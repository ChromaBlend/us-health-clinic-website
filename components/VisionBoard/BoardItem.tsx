import React, { useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { Trash2, GripVertical, Maximize2 } from 'lucide-react';

export interface BoardItemProps {
  id: string;
  type: 'image' | 'note' | 'text' | 'drawing';
  content: string; // URL for image, text content for others
  position: { x: number; y: number };
  width?: number;
  height?: number;
  zIndex: number;
  onUpdate: (id: string, updates: any) => void;
  onDelete: (id: string) => void;
  onBringToFront: (id: string) => void;
  onHistorySave: () => void;
}

export const BoardItem: React.FC<BoardItemProps> = ({
  id,
  type,
  content,
  position,
  width,
  height,
  zIndex,
  onUpdate,
  onDelete,
  onBringToFront,
  onHistorySave,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dragControls = useDragControls();
  const constraintsRef = useRef(null);

  // Default dimensions if not provided
  const currentWidth = width || (type === 'text' ? 300 : 256);
  const currentHeight = height || (type === 'text' ? 100 : (type === 'note' ? 256 : 256));

  // Common styles
  const baseStyles = "absolute cursor-grab active:cursor-grabbing group";

  // Type-specific styles - removed fixed w/h classes since we use inline styles now
  const typeStyles = {
    image: "bg-white p-2 shadow-lg rounded-xl",
    note: "bg-yellow-100 p-6 text-gray-800 font-handwriting shadow-md rotate-1 rounded-xl",
    text: "bg-transparent text-gray-900 font-serif text-2xl font-medium p-2 border border-transparent hover:border-teal-200/50 rounded-lg",
    drawing: "pointer-events-auto", // SVG handles its own size
  };

  const handleDragEnd = (_: any, info: any) => {
    onUpdate(id, { position: { x: position.x + info.offset.x, y: position.y + info.offset.y } });
  };

  const handleResizePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation(); // Prevent parent drag
    onHistorySave();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = currentWidth;
    const startHeight = currentHeight;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      onUpdate(id, {
        width: Math.max(50, startWidth + deltaX), // Smaller min width for drawings
        height: Math.max(50, startHeight + deltaY),
      });
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      initial={{ x: position.x, y: position.y, scale: 0.9, opacity: 0 }}
      animate={{
        x: position.x,
        y: position.y,
        width: currentWidth,
        height: type === 'text' ? 'auto' : currentHeight, // Text height auto-grows usually, but let's see
        scale: 1,
        opacity: 1,
        zIndex
      }}
      onDragEnd={handleDragEnd}
      onPointerDown={(e) => {
        e.stopPropagation();
        onBringToFront(id);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseStyles} ${typeStyles[type]}`}
      style={{ touchAction: 'none' }}
    >
      {/* Drag Handle & Controls - Only visible on hover */}
      <div
        className={`absolute -top-10 left-0 right-0 h-10 flex items-center justify-between px-2 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onPointerDown={(e) => {
          onHistorySave();
          dragControls.start(e);
        }}
      >
        <div className="flex gap-2">
          <div className="p-1.5 bg-white text-gray-400 rounded-full shadow-sm cursor-grab hover:text-teal-700">
            <GripVertical size={16} />
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(id); }}
          className="p-1.5 bg-white text-red-400 rounded-full shadow-sm hover:text-red-600 hover:bg-red-50"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Content Rendering */}
      {type === 'image' && (
        <div className="relative w-full h-full overflow-hidden rounded-lg pointer-events-none">
          <img src={content} alt="board item" className="w-full h-full object-cover" />
        </div>
      )}

      {type === 'note' && (
        <textarea
          defaultValue={content}
          className="w-full h-full bg-transparent resize-none border-none focus:ring-0 text-lg leading-relaxed placeholder-yellow-800/50"
          placeholder="Type your note..."
          onBlur={(e) => onUpdate(id, { content: e.target.value })}
        />
      )}

      {type === 'text' && (
        <textarea
          defaultValue={content}
          className="w-full h-full bg-transparent resize-none border-none focus:ring-0 text-3xl font-serif text-gray-900 text-center placeholder-gray-300 overflow-hidden"
          placeholder="Add text"
          onBlur={(e) => onUpdate(id, { content: e.target.value })}
          autoFocus={content === ''}
          style={{ minHeight: '1.5em' }}
        />
      )}

      {type === 'drawing' && (
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
          className="pointer-events-none"
        >
          <path d={content} stroke="#0f766e" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {/* Resize Handle */}
      {isHovered && (
        <div
          onPointerDown={handleResizePointerDown}
          className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center cursor-nwse-resize hover:bg-teal-50 z-50 text-gray-400"
        >
          <Maximize2 size={12} className="transform rotate-90" />
        </div>
      )}
    </motion.div>
  );
};
