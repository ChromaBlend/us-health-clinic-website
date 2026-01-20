import { query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

// Helper to get authenticated user or null
async function getCurrentUser(ctx: any) {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const user = await ctx.db.get(userId);
    return user;
}

export const getBiomarkerStats = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUser(ctx);
        if (!user) {
            return {
                inRange: 0,
                optimal: 0,
                outOfRange: 0,
            };
        }

        const biomarkers = await ctx.db
            .query("biomarkers")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .collect();

        const total = biomarkers.length || 1;
        const inRange = biomarkers.filter(b => b.status === 'in-range').length;
        const optimal = biomarkers.filter(b => b.status === 'optimal').length;
        const outOfRange = biomarkers.filter(b => b.status === 'out-of-range').length;

        return {
            inRange: Math.round((inRange / total) * 100),
            optimal: Math.round((optimal / total) * 100),
            outOfRange: Math.round((outOfRange / total) * 100),
        };
    },
});

export const getAppointments = query({
    args: {
        type: v.optional(v.string()),
        limit: v.optional(v.number())
    },
    handler: async (ctx, args) => {
        const user = await getCurrentUser(ctx);
        if (!user) return [];

        const limit = args.limit || 20; // Default page size

        let q = ctx.db.query("appointments").withIndex("by_userId", (q) => q.eq("userId", user._id));

        // In-memory filter for low cardinality 'type'
        const results = await q.take(limit);

        return args.type ? results.filter(a => a.type === args.type) : results;
    },
});

export const getMedications = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUser(ctx);
        if (!user) return [];
        return await ctx.db
            .query("medications")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .filter((q) => q.eq(q.field("active"), true))
            .collect();
    },
});

export const getTestResults = query({
    args: { limit: v.optional(v.number()) },
    handler: async (ctx, args) => {
        const user = await getCurrentUser(ctx);
        if (!user) return [];
        const limit = args.limit || 10;

        // Note: We don't have a specific index for date sorting yet in schema.ts
        // For now we will just get them by userId. 
        // Ideally we adds .order("desc") if we had a recordedAt index
        return await ctx.db
            .query("testResults")
            // Oops, schema was named 'testResults' in markdown but 'biomarkers' covers results?
            // Wait, let's check schema.ts. I didn't add 'testResults' table in Step 92.
            // I only added: users, biomarkers, appointments, medications.
            // I need to add 'testResults' table to schema first OR decide if 'biomarkers' covers it.
            // The ResultsFeed shows "Comprehensive Metabolic Panel", "Hormone Optimization Panel".
            // These look like "Panel" or "Report" objects, different from individual biomarkers.
            // I will add a 'testResults' table to schema.ts first.
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .collect();
    }
});

export const getHealthProfile = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUser(ctx);
        if (!user) return null;
        return await ctx.db
            .query("healthProfile")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .first();
    },
});

export const getHealthInsights = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUser(ctx);
        if (!user) return [];
        return await ctx.db
            .query("healthInsights")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .collect();
    },
});
