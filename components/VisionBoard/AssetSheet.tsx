import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

interface Asset {
    id: string;
    url: string;
    tags: string[];
}

const MOCK_ASSETS: Asset[] = [
    // Quotes
    { id: 'q1', url: 'https://images.unsplash.com/photo-1555445054-d965378779e2?q=80&w=600&auto=format&fit=crop', tags: ['quote', 'motivation', 'green'] },
    { id: 'q2', url: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=600&auto=format&fit=crop', tags: ['quote', 'happy', 'yellow'] },
    { id: 'q3', url: 'https://plus.unsplash.com/premium_photo-1664303499312-917c5d3ddd7e?q=80&w=600&auto=format&fit=crop', tags: ['quote', 'focus', 'white'] },

    // Scenery / Mood
    { id: 'm1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', tags: ['beach', 'calm', 'nature'] },
    { id: 'm2', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop', tags: ['mountain', 'adventure', 'stars'] },
    { id: 'm3', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop', tags: ['forest', 'calm', 'green'] },

    // Abstract / Texture
    { id: 'a1', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop', tags: ['texture', 'abstract', 'blue'] },
    { id: 'a2', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop', tags: ['abstract', 'liquid', 'orange'] },
];

interface AssetSheetProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectAsset: (url: string) => void;
}

export const AssetSheet: React.FC<AssetSheetProps> = ({ isOpen, onClose, onSelectAsset }) => {
    const [search, setSearch] = useState('');

    const filteredAssets = MOCK_ASSETS.filter(asset =>
        asset.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000]"
                    />

                    {/* Sheet */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white rounded-t-3xl shadow-2xl z-[2001] flex flex-col"
                    >
                        {/* Handle Bar */}
                        <div className="w-full flex justify-center pt-4 pb-2">
                            <div className="w-16 h-1.5 bg-gray-300 rounded-full" />
                        </div>

                        {/* Header */}
                        <div className="px-6 pb-4 flex items-center justify-between border-b border-gray-100">
                            <div className="relative flex-1 max-w-lg">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search quotes, vibes, textures..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-teal-700/20"
                                />
                            </div>
                            <button
                                onClick={onClose}
                                className="ml-4 p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                                title="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Grid */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredAssets.map(asset => (
                                    <button
                                        key={asset.id}
                                        onClick={() => {
                                            onSelectAsset(asset.url);
                                            onClose();
                                        }}
                                        className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 hover:ring-4 hover:ring-teal-700/30 transition-all"
                                    >
                                        <img
                                            src={asset.url}
                                            alt={asset.tags.join(', ')}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </button>
                                ))}
                            </div>
                            {filteredAssets.length === 0 && (
                                <div className="h-40 flex items-center justify-center text-gray-400">
                                    No items found matching "{search}"
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
