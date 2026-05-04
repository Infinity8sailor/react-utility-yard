import React, { HTMLAttributes, forwardRef } from 'react';

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Whether the spine should have a glowing effect. */
  glow?: boolean;
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ className = '', glow = true, children, style, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`ruy-timeline ${className}`} 
        style={{ position: 'relative', paddingLeft: '1.5rem', ...style }} 
        {...props}
      >
        {/* The Spine */}
        <div 
          className="ruy-timeline-spine"
          style={{
            position: 'absolute',
            left: '0.75rem',
            top: '1rem',
            bottom: '1rem',
            width: '2px',
            background: glow 
              ? 'linear-gradient(to bottom, transparent, var(--ruy-accent) 10%, var(--ruy-accent-hover) 90%, transparent)' 
              : 'var(--ruy-border-color)',
            opacity: glow ? 0.5 : 1,
            pointerEvents: 'none',
          }} 
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {children}
        </div>
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';

export interface TimelineNodeProps extends HTMLAttributes<HTMLDivElement> {
  /** The icon or number to display inside the node */
  icon?: React.ReactNode;
  /** The color variant of the node */
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
  /** The content of the node (usually a Card or Surface) */
  children: React.ReactNode;
  /** Custom CSS for the node container */
  nodeStyle?: React.CSSProperties;
}

export const TimelineNode = forwardRef<HTMLDivElement, TimelineNodeProps>(
  ({ className = '', icon, variant = 'primary', children, style, nodeStyle, ...props }, ref) => {
    
    const getBgColor = () => {
      switch(variant) {
        case 'success': return 'var(--ruy-success)';
        case 'danger': return 'var(--ruy-danger)';
        case 'warning': return 'var(--ruy-warning)';
        case 'neutral': return 'var(--ruy-border-color)';
        default: return 'var(--ruy-accent)';
      }
    };

    return (
      <div 
        ref={ref} 
        className={`ruy-timeline-node-container ${className}`} 
        style={{ position: 'relative', ...style }} 
        {...props}
      >
        {/* Node Icon/Dot */}
        <div 
          className="ruy-timeline-node"
          style={{
            position: 'absolute',
            left: '-1.5rem', // Adjust to align with spine center (which is at left: 0.75rem relative to parent padding)
            top: '1rem', // Align with typical card title
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            background: getBgColor(),
            color: 'var(--ruy-text-inverse)',
            boxShadow: `0 0 12px ${getBgColor()}88, inset 0 2px 4px rgba(255,255,255,0.3)`,
            border: '2px solid var(--ruy-bg-base)',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            ...nodeStyle
          }}
        >
          {icon || <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: 'white' }} />}
        </div>

        {/* Content */}
        <div className="ruy-timeline-content" style={{ paddingLeft: '1.5rem' }}>
          {children}
        </div>
      </div>
    );
  }
);

TimelineNode.displayName = 'TimelineNode';
