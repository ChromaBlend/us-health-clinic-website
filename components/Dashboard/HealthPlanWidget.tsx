import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Icons } from '../Icons';

const getIcon = (name: string) => {
    switch (name) {
        case "Utensils": return <Icons.Utensils className="w-5 h-5 text-orange-600" />;
        case "Moon": return <Icons.Moon className="w-5 h-5 text-indigo-600" />;
        default: return <Icons.Activity className="w-5 h-5 text-teal-600" />;
    }
};

export const HealthPlanWidget = () => {
    const rawInsights = useQuery(api.dashboard.getHealthInsights);

    // Transform Convex data to match UI expected shape (adding icon component)
    const insights = (rawInsights || []).map(item => ({
        ...item,
        icon: getIcon(item.iconName)
    }));

    // Fallback if loading or empty (optional, removes flickering emptiness)
    if (!rawInsights) {
        // return <Skeleton />; or just return null/empty
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-serif font-bold text-xl text-gray-900">Your Health Plan</h3>
                    <p className="text-sm text-gray-500 mt-1">Actionable insights tailored to your biology.</p>
                </div>
                <button className="text-teal-700 hover:bg-teal-50 p-2 rounded-full transition-colors">
                    <Icons.ArrowRight className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-4 flex-1">
                {insights.map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer group">
                        <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                            {item.icon}
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5 block">{item.category}</span>
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">{item.title}</h4>
                            <p className="text-sm text-gray-500 leading-snug">{item.action}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Icons.CheckCircle className="w-4 h-4 text-teal-500" />
                    <span>2 of 5 weekly goals completed</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-teal-500 w-[40%] rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
