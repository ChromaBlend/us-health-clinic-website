import React from 'react';
import { FadeIn } from '../../components/Animations';
import { Button } from '../../components/UI';
import { Icons } from '../../components/Icons';

const Messages = () => {
    return (
        <FadeIn className="h-[calc(100vh-140px)] min-h-[600px] flex flex-col md:flex-row bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            {/* Sidebar List */}
            <div className="w-full md:w-80 border-r border-gray-100 flex flex-col bg-gray-50/50">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h2 className="font-serif font-bold text-lg text-gray-900">Concierge</h2>
                        <p className="text-xs text-teal-600 font-medium">Unlimited Messaging</p>
                    </div>
                    <button className="text-teal-700 hover:bg-teal-50 p-2 rounded-full transition-colors">
                        <Icons.Plus className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-white transition-colors ${i === 1 ? 'bg-white border-l-4 border-l-teal-700 shadow-sm' : 'border-l-4 border-l-transparent'}`}>
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-bold text-gray-900 text-sm">Dr. Sarah Chen</span>
                                <span className="text-xs text-gray-400">10:42 AM</span>
                            </div>
                            <p className="text-sm text-gray-500 line-clamp-2">
                                Your latest metabolic panel results look great. I wanted to highlight a few improvements...
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-white font-serif font-bold">CT</div>
                        <div>
                            <h3 className="font-bold text-gray-900">USHC Care Team</h3>
                            <p className="text-xs text-green-600 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                Online • Typically replies in 5m
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400"><Icons.Phone className="w-5 h-5" /></button>
                        <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400"><Icons.Video className="w-5 h-5" /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FDFBF7]">
                    <div className="flex justify-center">
                        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
                    </div>

                    {/* Received */}
                    <div className="flex gap-4 max-w-lg">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-serif text-xs font-bold shrink-0 mt-1">SC</div>
                        <div className="space-y-1">
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-gray-700 text-sm leading-relaxed border border-gray-100">
                                Hi Sarah, I reviewed your latest labs. The Vitamin D protocol seems to be working efficiently!
                            </div>
                            <span className="text-xs text-gray-400 ml-2">10:42 AM</span>
                        </div>
                    </div>

                    {/* Sent */}
                    <div className="flex gap-4 max-w-lg ml-auto flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-teal-900 text-white flex items-center justify-center font-serif text-xs font-bold shrink-0 mt-1">You</div>
                        <div className="space-y-1 text-right">
                            <div className="bg-teal-900 p-4 rounded-2xl rounded-tr-none shadow-sm text-white text-sm leading-relaxed">
                                That's great news! I have been feeling much more energetic lately. Should I continue the same dosage?
                            </div>
                            <span className="text-xs text-gray-400 mr-2">10:45 AM</span>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex gap-4 items-end bg-gray-50 p-2 rounded-3xl border border-gray-200 focus-within:ring-2 focus-within:ring-teal-100 focus-within:border-teal-300 transition-all">
                        <button className="p-3 text-gray-400 hover:text-teal-700"><Icons.Plus className="w-5 h-5" /></button>
                        <textarea
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 py-3 text-sm"
                            rows={1}
                        />
                        <button className="p-3 bg-teal-900 text-white rounded-full hover:bg-teal-800 shadow-md transform hover:scale-105 transition-all">
                            <Icons.Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

export default Messages;
