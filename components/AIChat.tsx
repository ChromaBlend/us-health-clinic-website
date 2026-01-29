import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';
import { Button } from './UI';
import { getPageContextAsToon } from '../utils/toon';
import { useConvexAuth } from "convex/react";

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface ChatSession {
    id: string;
    date: string;
    preview: string;
}

type ViewState = 'home' | 'chat' | 'history';

export const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<ViewState>('home');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello! I am your US Health Clinic assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { isAuthenticated } = useConvexAuth();

    const [mockHistory] = useState<ChatSession[]>([
        { id: '1', date: 'Oct 24, 2023', preview: 'Questions about metabolic panel...' },
        { id: '2', date: 'Nov 12, 2023', preview: 'Scheduling a follow-up...' },
        { id: '3', date: 'Jan 05, 2024', preview: 'Dietary signal clarifications...' },
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (view === 'chat') {
            scrollToBottom();
        }
    }, [messages, view]);

    const handleSend = async (text: string = input) => {
        if (!text.trim()) return;

        if (view !== 'chat') setView('chat');

        const userMessage = text;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsTyping(true);

        // Get page context in TOON format
        const context = getPageContextAsToon();
        console.log('Context (TOON):', context);

        // Mock AI response for now
        setTimeout(() => {
            const responses = [
                "I understand. Based on the page you're currently viewing, US Health Clinic offers comprehensive biomarker testing to help you optimize your health.",
                "That's a great question! Our doctors use data-driven insights to tailor a treatment plan specifically for your needs.",
                "You can find more details about our membership plans on the 'Subscribe' page, or I can help explain the benefits here.",
                "I see you're interested in our services. Would you like to know more about what we test or how our treatment process works?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    const startNewChat = () => {
        setMessages([{ role: 'assistant', content: 'Hello! I am your US Health Clinic assistant. How can I help you today?' }]);
        setView('chat');
    };

    const openHistory = () => {
        setView('history');
    };

    const suggestions = [
        "What do you test?",
        "How does it work?",
        "Pricing details",
        "Book appointment"
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-teal-700 text-white flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <Icons.Sparkles className="w-5 h-5 text-yellow-300" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm">Health Assistant</h3>
                                    <p className="text-[10px] text-teal-100">Always active</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {isAuthenticated && view !== 'history' && (
                                    <button
                                        onClick={openHistory}
                                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                        title="View History"
                                    >
                                        <Icons.History className="w-4 h-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <Icons.X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Views */}
                        <div className="flex-1 overflow-hidden relative">

                            {/* Home View (Empty State) */}
                            {view === 'home' && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
                                    <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                        <Icons.Sparkles className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">How can we help?</h3>
                                    <p className="text-sm text-gray-500 mb-8 max-w-[200px]">
                                        Ask about our panels, treatments, or your personal health roadmap.
                                    </p>

                                    <div className="grid grid-cols-2 gap-2 w-full mb-6">
                                        {suggestions.map((s, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSend(s)}
                                                className="p-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 hover:border-teal-500 hover:text-teal-700 transition-colors shadow-sm text-left"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>

                                    {isAuthenticated && (
                                        <button
                                            onClick={openHistory}
                                            className="text-xs text-teal-700 font-medium hover:underline flex items-center gap-1"
                                        >
                                            <Icons.History className="w-3 h-3" />
                                            View previous conversations
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* History View */}
                            {view === 'history' && (
                                <div className="absolute inset-0 flex flex-col p-4 bg-gray-50/50 overflow-y-auto">
                                    <div className="flex items-center gap-2 mb-6">
                                        <button onClick={() => setView('home')} className="text-gray-500 hover:text-gray-900">
                                            <Icons.ArrowLeft className="w-4 h-4" />
                                        </button>
                                        <h3 className="font-semibold text-gray-900">Chat History</h3>
                                    </div>

                                    <div className="space-y-3">
                                        {mockHistory.map(session => (
                                            <button
                                                key={session.id}
                                                className="w-full p-4 bg-white border border-gray-100 rounded-xl text-left hover:shadow-md transition-shadow group"
                                                onClick={() => setView('chat')} // In a real app, load this specific chat
                                            >
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-xs font-medium text-teal-700 opacity-60 group-hover:opacity-100 transition-opacity">
                                                        {session.date}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-700 line-clamp-2">{session.preview}</p>
                                            </button>
                                        ))}
                                    </div>

                                    <Button
                                        variant="primary"
                                        className="mt-6 w-full py-2 text-xs"
                                        onClick={startNewChat}
                                    >
                                        Start New Chat
                                    </Button>
                                </div>
                            )}

                            {/* Chat View */}
                            {view === 'chat' && (
                                <div className="absolute inset-0 flex flex-col">
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 pb-20">
                                        {messages.map((msg, i) => (
                                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                <div
                                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                                            ? 'bg-teal-700 text-white rounded-tr-none'
                                                            : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                                                        }`}
                                                >
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ))}
                                        {isTyping && (
                                            <div className="flex justify-start">
                                                <div className="bg-white border border-gray-100 shadow-sm p-3 rounded-2xl rounded-tl-none flex gap-1">
                                                    <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                                                    <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                                    <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>
                                    {/* Input */}
                                    <div className="p-4 bg-white border-t border-gray-100 flex gap-2 w-full absolute bottom-0">
                                        {/* Back button if in chat view to go home */}
                                        <button
                                            onClick={() => setView('home')}
                                            className="p-2 text-gray-400 hover:text-gray-600"
                                            title="Back to Menu"
                                        >
                                            <Icons.Menu className="w-5 h-5" />
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="Ask anything..."
                                            className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-teal-700/20 outline-none"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                            autoFocus
                                        />
                                        <button
                                            onClick={() => handleSend()}
                                            disabled={!input.trim()}
                                            className="bg-teal-700 text-white p-2 rounded-xl hover:bg-teal-600 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Icons.ArrowUp className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative group">
                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                    Chat with AI
                    <div className="absolute top-1/2 right-[-4px] -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-gray-900"></div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-800 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {isOpen ? (
                        <Icons.X className="w-6 h-6 relative z-10" />
                    ) : (
                        <Icons.Sparkles className="w-6 h-6 relative z-10" />
                    )}
                </button>
            </div>
        </div>
    );
};
