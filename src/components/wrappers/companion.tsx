import React, { HTMLAttributes, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface CompanionAnchorProps extends HTMLAttributes<HTMLDivElement> {
  /** The position of the companion relative to the children */
  anchor?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** URL for the default idle image/gif */
  idleImageUrl?: string;
  /** URL for the active/hover image/gif */
  activeImageUrl?: string;
  /** Width of the companion */
  companionSize?: number;
  /** Offset from the anchor point */
  offset?: { x: number; y: number };
  children: React.ReactNode;
}

export const CompanionAnchor = forwardRef<HTMLDivElement, CompanionAnchorProps>(
  ({ 
    className = '', 
    anchor = 'top-right', 
    idleImageUrl, 
    activeImageUrl,
    companionSize = 60,
    offset = { x: 0, y: -20 },
    children, 
    style, 
    ...props 
  }, ref) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // If no images are provided, we can fallback to a generic shape or nothing.
    // The user requested a generic bounding system that acts as defined even if not provided.
    const hasImage = !!idleImageUrl;

    const getAnchorStyles = (): React.CSSProperties => {
      const base: React.CSSProperties = { position: 'absolute', zIndex: 50 };
      switch (anchor) {
        case 'top-left': return { ...base, top: offset.y, left: offset.x, transform: 'translate(-50%, -50%)' };
        case 'top-right': return { ...base, top: offset.y, right: offset.x, transform: 'translate(50%, -50%)' };
        case 'bottom-left': return { ...base, bottom: offset.y, left: offset.x, transform: 'translate(-50%, 50%)' };
        case 'bottom-right': return { ...base, bottom: offset.y, right: offset.x, transform: 'translate(50%, 50%)' };
        default: return base;
      }
    };

    return (
      <div 
        ref={ref} 
        className={`ruy-companion-anchor ${className}`} 
        style={{ position: 'relative', display: 'inline-block', ...style }} 
        onMouseEnter={(e) => { setIsHovered(true); props.onMouseEnter?.(e); }}
        onMouseLeave={(e) => { setIsHovered(false); props.onMouseLeave?.(e); }}
        onMouseDown={(e) => { setIsClicked(true); props.onMouseDown?.(e); }}
        onMouseUp={(e) => { setIsClicked(false); props.onMouseUp?.(e); }}
        {...props}
      >
        <motion.div
          style={{
            ...getAnchorStyles(),
            width: companionSize,
            height: companionSize,
            pointerEvents: 'none', // Companion shouldn't block clicks
          }}
          animate={isClicked ? "clicked" : isHovered ? "hovered" : "idle"}
          variants={{
            idle: { y: 0, scale: 1 },
            hovered: { y: -5, scale: 1.05, transition: { type: "spring", stiffness: 300 } },
            clicked: { y: -15, scale: 1.1, transition: { type: "spring", stiffness: 500, damping: 10 } }
          }}
        >
          {hasImage ? (
            <img 
              src={isHovered && activeImageUrl ? activeImageUrl : idleImageUrl} 
              alt="Companion" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            // Fallback generic boundary shape if no image is provided
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'var(--ruy-accent)',
              opacity: 0.8,
              boxShadow: '0 0 15px var(--ruy-accent)',
              border: '2px solid white'
            }} />
          )}
        </motion.div>
        
        {children}
      </div>
    );
  }
);

CompanionAnchor.displayName = 'CompanionAnchor';
