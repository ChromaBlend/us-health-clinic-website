import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
    ...authTables,

    users: defineTable({
        name: v.optional(v.string()),
        email: v.optional(v.string()),
        image: v.optional(v.string()),
        role: v.optional(v.string()), // "patient" | "admin"
    }).index("email", ["email"]),

    biomarkers: defineTable({
        userId: v.id("users"), // Foreign Key
        name: v.string(),
        value: v.number(),
        unit: v.string(),
        status: v.string(), // "optimal", "in-range", "out-of-range"
        category: v.string(),
        recordedAt: v.int64(), // Timestamps as integers for range queries
    })
        .index("by_userId", ["userId"])
        .index("by_userId_status", ["userId", "status"]), // Compound index for efficient stats

    appointments: defineTable({
        userId: v.id("users"),
        title: v.string(),
        date: v.string(),
        type: v.string(),
        status: v.string(),
        startTime: v.int64(),
    })
        .index("by_userId", ["userId"])
        .index("by_userId_date", ["userId", "startTime"]), // For sorting upcoming

    medications: defineTable({
        userId: v.id("users"),
        name: v.string(),
        dose: v.string(),
        refills: v.number(),
        active: v.boolean(),
    })
        .index("by_userId", ["userId"]),

    testResults: defineTable({
        userId: v.id("users"),
        title: v.string(),
        date: v.string(),
        status: v.string(), // "Normal", "Action Needed"
        statusColor: v.optional(v.string()) // "text-orange-600..." (Optional, ideally computed on frontend but storing for v1 migration ease)
    })
        .index("by_userId", ["userId"]),

    healthProfile: defineTable({
        userId: v.id("users"),
        biologicalAge: v.number(),
        chronologicalAge: v.number(),
        bars: v.array(v.number()), // Array of values for the bars visualization
    })
        .index("by_userId", ["userId"]),

    healthInsights: defineTable({
        userId: v.id("users"),
        category: v.string(),
        title: v.string(),
        desc: v.string(),
        action: v.string(),
        iconName: v.string(), // Store icon name as string e.g. "Utensils"
        bg: v.string(),
        completed: v.boolean(),
    })
        .index("by_userId", ["userId"]),
});
