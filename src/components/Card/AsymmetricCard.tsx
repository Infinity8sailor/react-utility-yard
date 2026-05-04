import React, { HTMLAttributes, forwardRef } from 'react';

export interface AsymmetricCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The non-symmetrical shape of the card */
  shape?: 'cyberpunk' | 'organic';
  children: React.ReactNode;
}

export const AsymmetricCard = forwardRef<HTMLDivElement, AsymmetricCardProps>(
  ({ className = '', shape = 'cyberpunk', children, style, ...props }, ref) => {
    
    // Sci-Fi Cyberpunk style with clipped corners
    const cyberpunkStyle: React.CSSProperties = {
      background: 'var(--ruy-bg-surface)',
      backdropFilter: 'blur(var(--ruy-glass-blur))',
      clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
      borderLeft: '4px solid var(--ruy-accent)',
      position: 'relative',
    };

    // Organic style with uneven blob-like border radii
    const organicStyle: React.CSSProperties = {
      background: 'var(--ruy-bg-surface)',
      backdropFilter: 'blur(var(--ruy-glass-blur))',
      borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
      border: '1px solid var(--ruy-glass-border)',
      transition: 'border-radius 0.5s ease-in-out',
    };

    const activeStyle = shape === 'cyberpunk' ? cyberpunkStyle : organicStyle;

    return (
      <div 
        ref={ref} 
        className={`ruy-asymmetric-card ruy-asymmetric-card-${shape} ${className}`} 
        style={{
          padding: '2rem',
          ...activeStyle,
          ...style
        }} 
        {...props}
      >
        {children}
        
        {/* Glowing edge for cyberpunk */}
        {shape === 'cyberpunk' && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '40px',
            height: '40px',
            background: 'var(--ruy-accent)',
            filter: 'blur(20px)',
            opacity: 0.5,
            pointerEvents: 'none'
          }} />
        )}
      </div>
    );
  }
);

AsymmetricCard.displayName = 'AsymmetricCard';
