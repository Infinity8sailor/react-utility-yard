import React, { ReactNode } from 'react';
import { Card, CardProps } from './index';

export interface TintedMetadataCardProps extends Omit<CardProps, 'variant'> {
  /** The hex color code or CSS variable to tint the card (e.g., '#00E5FF' or 'var(--ruy-accent)') */
  tintColor?: string;
  /** Custom content slot for the header region */
  headerSlot?: ReactNode;
  /** Custom content slot for the footer region */
  footerSlot?: ReactNode;
  /** Main content of the card */
  children: ReactNode;
}

/**
 * A specialized glassmorphic card that supports dynamic color tinting and dedicated slots
 * for complex metadata in header and footer regions.
 */
export const TintedMetadataCard = React.forwardRef<HTMLDivElement, TintedMetadataCardProps>(
  (
    {
      tintColor,
      headerSlot,
      footerSlot,
      children,
      style,
      className = '',
      hoverable = true,
      ...props
    },
    ref,
  ) => {
    // Helper to extract RGB from hex or fallback to standard glass
    const getRgbValue = (color?: string) => {
      if (!color) return null;
      if (color.startsWith('var')) return color; // Handle CSS variables (will need specific CSS logic)
      
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      return isNaN(r) || isNaN(g) || isNaN(b) ? null : `${r}, ${g}, ${b}`;
    };

    const rgbValue = getRgbValue(tintColor);
    
    // Dynamic styles based on tintColor
    const tintedStyle: React.CSSProperties = {
      ...style,
      ...(rgbValue && {
        border: `1px solid rgba(${rgbValue}, 0.35)`,
        background: `linear-gradient(135deg, rgba(${rgbValue}, 0.12), rgba(${rgbValue}, 0.04))`,
        boxShadow: `0 8px 32px rgba(${rgbValue}, 0.08)`,
      }),
    };

    return (
      <Card
        ref={ref}
        variant="glass"
        hoverable={hoverable}
        className={`ruy-tinted-card ${className}`}
        style={tintedStyle}
        {...props}
      >
        {headerSlot && (
          <div 
            className="ruy-tinted-card-header" 
            style={{ 
              padding: '1.25rem 1.25rem 0.75rem', 
              borderBottom: rgbValue ? `1px solid rgba(${rgbValue}, 0.15)` : '1px solid var(--ruy-border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem'
            }}
          >
            {headerSlot}
          </div>
        )}
        
        {children && React.Children.count(children) > 0 && (
          <div className="ruy-tinted-card-body" style={{ padding: '1.25rem', flex: '1 1 auto' }}>
            {children}
          </div>
        )}
        
        {footerSlot && (
          <div 
            className="ruy-tinted-card-footer" 
            style={{ 
              padding: '0.75rem 1.25rem', 
              background: rgbValue ? `rgba(${rgbValue}, 0.03)` : 'rgba(0,0,0,0.02)', 
              borderTop: rgbValue ? `1px solid rgba(${rgbValue}, 0.15)` : '1px solid var(--ruy-border-light)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {footerSlot}
          </div>
        )}

        {/* Hover effect enhancement for tinted cards */}
        {hoverable && rgbValue && (
          <style dangerouslySetInnerHTML={{__html: `
            .ruy-tinted-card:hover {
              border-color: rgba(${rgbValue}, 0.5) !important;
              box-shadow: 0 12px 40px rgba(${rgbValue}, 0.15) !important;
              background: linear-gradient(135deg, rgba(${rgbValue}, 0.16), rgba(${rgbValue}, 0.06)) !important;
            }
          `}} />
        )}
      </Card>
    );
  },
);

TintedMetadataCard.displayName = 'TintedMetadataCard';
