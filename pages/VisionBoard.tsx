import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { BoardItem, BoardItemProps } from '../components/VisionBoard/BoardItem';
import { Toolbar } from '../components/VisionBoard/Toolbar';
import { AssetSheet } from '../components/VisionBoard/AssetSheet';
import { SectionHeading } from '../components/UI';
import { FadeIn } from '../components/Animations';
import { motion } from 'framer-motion';
import { WelcomeScreen } from '../components/VisionBoard/WelcomeScreen';

const VisionBoard = () => {
    const [items, setItems] = useState<BoardItemProps[]>([]);
    const [maxZIndex, setMaxZIndex] = useState(1);
    const [isAssetSheetOpen, setIsAssetSheetOpen] = useState(false);

    // Onboarding State
    const [hasOnboarded, setHasOnboarded] = useState(false);
    const [userName, setUserName] = useState('');

    // Drawing State
    const [isDrawing, setIsDrawing] = useState(false);
    // currentPoints stores the raw {x, y} for the active stroke
    const [currentPoints, setCurrentPoints] = useState<{ x: number, y: number }[]>([]);

    const handleSelectAsset = (url: string) => {
        const newItem: BoardItemProps = {
            id: Date.now().toString(),
            type: 'image',
            content: url,
            position: { x: window.innerWidth / 2 - 150, y: window.innerHeight / 2 - 150 },
            width: 300,
            height: 300,
            zIndex: maxZIndex + 1,
            onUpdate: updateItem,
            onDelete: deleteItem,
            onBringToFront: bringToFront,
        };
        setItems((prev) => [...prev, newItem]);
        setMaxZIndex((prev) => prev + 1);
    };

    React.useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const items = e.clipboardData?.items;
            if (!items) return;

            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile();
                    if (blob) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const newItem: BoardItemProps = {
                                id: Date.now().toString(),
                                type: 'image',
                                content: event.target?.result as string,
                                position: { x: window.innerWidth / 2 - 100, y: window.innerHeight / 2 - 100 },
                                width: 300,
                                height: 300,
                                zIndex: maxZIndex + 1,
                                onUpdate: updateItem,
                                onDelete: deleteItem,
                                onBringToFront: bringToFront,
                            };
                            setItems((prev) => [...prev, newItem]);
                            setMaxZIndex((prev) => prev + 1);
                        };
                        reader.readAsDataURL(blob);
                    }
                }
            }
        };

        window.addEventListener('paste', handlePaste);
        return () => window.removeEventListener('paste', handlePaste);
    }, [maxZIndex]);

    const handleAddImage = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newItem: BoardItemProps = {
                id: Date.now().toString(),
                type: 'image',
                content: e.target?.result as string,
                position: { x: Math.random() * (window.innerWidth - 400) + 100, y: Math.random() * (window.innerHeight - 400) + 100 },
                width: 300,
                height: 300,
                zIndex: maxZIndex + 1,
                onUpdate: updateItem,
                onDelete: deleteItem,
                onBringToFront: bringToFront,
            };
            setItems((prev) => [...prev, newItem]);
            setMaxZIndex((prev) => prev + 1);
        };
        reader.readAsDataURL(file);
    };

    const handleAddNote = () => {
        const newItem: BoardItemProps = {
            id: Date.now().toString(),
            type: 'note',
            content: '', // Empty initially
            position: { x: window.innerWidth / 2 - 100, y: window.innerHeight / 2 - 100 },
            width: 256,
            height: 256,
            zIndex: maxZIndex + 1,
            onUpdate: updateItem,
            onDelete: deleteItem,
            onBringToFront: bringToFront,
        };
        setItems((prev) => [...prev, newItem]);
        setMaxZIndex((prev) => prev + 1);
    };

    const handleAddText = () => {
        const newItem: BoardItemProps = {
            id: Date.now().toString(),
            type: 'text',
            content: '',
            position: { x: window.innerWidth / 2 - 100, y: window.innerHeight / 2 - 50 },
            width: 300,
            zIndex: maxZIndex + 1,
            onUpdate: updateItem,
            onDelete: deleteItem,
            onBringToFront: bringToFront,
        };
        setItems((prev) => [...prev, newItem]);
        setMaxZIndex((prev) => prev + 1);
    };

    const updateItem = (id: string, updates: any) => {
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)));
    };

    const deleteItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const bringToFront = (id: string) => {
        setMaxZIndex((prev) => prev + 1);
        updateItem(id, { zIndex: maxZIndex + 1 });
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        if (!isDrawing) return;
        const x = e.clientX;
        const y = e.clientY;
        setCurrentPoints([{ x, y }]);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDrawing || currentPoints.length === 0) return;
        const x = e.clientX;
        const y = e.clientY;
        setCurrentPoints((prev) => [...prev, { x, y }]);
    };

    const handlePointerUp = () => {
        if (!isDrawing || currentPoints.length < 2) {
            setCurrentPoints([]);
            return;
        }

        // 1. Calculate Bounding Box
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        currentPoints.forEach(p => {
            if (p.x < minX) minX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.x > maxX) maxX = p.x;
            if (p.y > maxY) maxY = p.y;
        });

        // Add some padding
        const padding = 10;
        minX -= padding;
        minY -= padding;
        maxX += padding;
        maxY += padding;

        const width = maxX - minX;
        const height = maxY - minY;

        // 2. Normalize Points relative to bounding box
        // Create SVG Path 'd'
        const d = currentPoints.map((p, i) => {
            const lx = p.x - minX;
            const ly = p.y - minY;
            return `${i === 0 ? 'M' : 'L'} ${lx} ${ly}`;
        }).join(' ');

        // 3. Create Board Item
        const newItem: BoardItemProps = {
            id: Date.now().toString(),
            type: 'drawing',
            content: d,
            position: { x: minX, y: minY },
            width: width,
            height: height,
            zIndex: maxZIndex + 1,
            onUpdate: updateItem,
            onDelete: deleteItem,
            onBringToFront: bringToFront,
        };

        setItems((prev) => [...prev, newItem]);
        setMaxZIndex((prev) => prev + 1);
        setCurrentPoints([]); // Clear current stroke
    };

    // Helper to generate path for the CURRENT active stroke (global overlay)
    const getCurrentPathString = () => {
        if (currentPoints.length === 0) return '';
        return currentPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    };

    // Ref for the board container
    const boardRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (!boardRef.current) return;

        try {
            const canvas = await html2canvas(boardRef.current, {
                useCORS: true, // Allow loading remote images (Unsplash)
                scale: 2, // Higher quality
                backgroundColor: '#FFFDF5', // Cream background color
                ignoreElements: (element) => {
                    // Ignore toolbar and asset sheet
                    return element.tagName === 'BUTTON' || element.classList.contains('fixed');
                }
            });

            const link = document.createElement('a');
            link.download = `vision-board-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error("Download failed:", error);
            alert("Failed to download vision board. Some images might be protected.");
        }
    };

    const handleOnboardingComplete = (name: string) => {
        setUserName(name);
        setHasOnboarded(true);
    };

    // if (!hasOnboarded) {
    //     return <WelcomeScreen onComplete={handleOnboardingComplete} />;
    // }

    return (
        <div
            ref={boardRef}
            className="min-h-screen bg-cream overflow-hidden relative touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#115e59 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative z-10 pt-32 px-6 pointer-events-none">
                <FadeIn>
                    <SectionHeading>{userName ? `${userName}'s Vision Board` : 'Your Vision Board'}</SectionHeading>
                    <p className="text-center text-gray-500 max-w-lg mx-auto mb-8">
                        Visualize your health journey. Drag, drop, and design your future self.
                    </p>
                </FadeIn>
            </div>

            {/* Drawing Layer - ONLY active stroke */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2000]">
                {currentPoints.length > 0 && (
                    <path d={getCurrentPathString()} stroke="#0f766e" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                )}
            </svg>

            {/* Canvas Area - Items */}
            <div className={`absolute inset-0 w-full h-full overflow-hidden ${isDrawing ? 'pointer-events-none' : ''}`}>
                {items.map((item) => (
                    <BoardItem
                        key={item.id}
                        {...item}
                        onUpdate={updateItem}
                        onDelete={deleteItem}
                        onBringToFront={bringToFront}
                    />
                ))}
            </div>

            <Toolbar
                onAddImage={handleAddImage}
                onAddNote={handleAddNote}
                onAddText={handleAddText}
                onOpenAssets={() => setIsAssetSheetOpen(true)}
                isDrawing={isDrawing}
                onToggleDrawing={() => setIsDrawing(!isDrawing)}
                onDownload={handleDownload}
            />

            <AssetSheet
                isOpen={isAssetSheetOpen}
                onClose={() => setIsAssetSheetOpen(false)}
                onSelectAsset={handleSelectAsset}
            />

            {/* Onboarding Overlay */}
            {!hasOnboarded && (
                <WelcomeScreen onComplete={handleOnboardingComplete} />
            )}
        </div>
    );
};

export default VisionBoard;
