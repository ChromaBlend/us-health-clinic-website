import React from 'react';
import { Image as ImageIcon, StickyNote, Type, Plus, Pen, Download, Undo } from 'lucide-react';

interface ToolbarProps {
    onAddImage: (file: File) => void;
    onAddNote: () => void;
    onAddText: () => void;
    onOpenAssets: () => void;
    isDrawing: boolean;
    onToggleDrawing: () => void;
    onDownload: () => void;
    isEmpty: boolean;
    onUndo: () => void;
    canUndo: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onAddImage, onAddNote, onAddText, onOpenAssets, isDrawing, onToggleDrawing, onDownload, isEmpty, onUndo, canUndo }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onAddImage(file);
        }
        // Reset inputs
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-2xl border border-gray-100 p-2 rounded-full flex items-center gap-2 z-[1000]">

            {/* Upload Image */}
            <div className="relative group">
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-4 rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
                    title="Upload Image"
                >
                    <ImageIcon size={24} />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Add Image
                </span>
            </div>

            {/* Add Note */}
            <div className="relative group">
                <button
                    onClick={onAddNote}
                    className="p-4 rounded-full bg-yellow-50 text-amber-600 hover:bg-yellow-100 transition-colors"
                    title="Add Note"
                >
                    <StickyNote size={24} />
                </button>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Add Note
                </span>
            </div>

            {/* Add Text */}
            <div className="relative group">
                <button
                    onClick={onAddText}
                    className="p-4 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                    title="Add Text"
                >
                    <Type size={24} />
                </button>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Add Text
                </span>
            </div>

            {/* Draw Tool */}
            <div className="relative group">
                <button
                    onClick={onToggleDrawing}
                    className={`p-4 rounded-full transition-colors ${isDrawing ? 'bg-teal-600 text-white shadow-inner' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                    title="Draw"
                >
                    <Pen size={24} />
                </button>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {isDrawing ? 'Stop Drawing' : 'Draw'}
                </span>
            </div>

            {/* Undo */}
            <div className="relative group">
                <button
                    onClick={onUndo}
                    disabled={!canUndo}
                    className={`p-4 rounded-full transition-colors ${!canUndo ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                    title="Undo"
                >
                    <Undo size={24} />
                </button>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Undo
                </span>
            </div>

            {/* Download */}
            <div className="relative group">
                <button
                    onClick={onDownload}
                    disabled={isEmpty}
                    className={`p-4 rounded-full transition-colors ${isEmpty ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                    title={isEmpty ? "Board is empty" : "Download Board"}
                >
                    <Download size={24} />
                </button>
                {!isEmpty && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Download
                    </span>
                )}
            </div>

            <div className="w-px h-8 bg-gray-200 mx-2"></div>

            <div className="relative group cursor-pointer" onClick={onOpenAssets}>
                <div className="p-4 rounded-full bg-teal-700 text-white shadow-lg hover:bg-teal-600 transition-colors">
                    <Plus size={24} />
                </div>
            </div>

        </div>
    );
};
