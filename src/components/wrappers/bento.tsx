import React, { HTMLAttributes, forwardRef } from 'react';

export interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
  /** The maximum number of columns on desktop */
  columns?: number;
  /** Gap between grid items */
  gap?: string;
  /** Children should be BentoGridItem components */
  children: React.ReactNode;
}

export const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className = '', columns = 3, gap = '1.5rem', children, style, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`ruy-bento-grid ${className}`} 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap,
          ...style
        }} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

BentoGrid.displayName = 'BentoGrid';

export interface BentoGridItemProps extends HTMLAttributes<HTMLDivElement> {
  /** How many columns this item should span on desktop (e.g. 1, 2, 3) */
  colSpan?: number;
  /** How many rows this item should span on desktop (e.g. 1, 2) */
  rowSpan?: number;
  children: React.ReactNode;
}

export const BentoGridItem = forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className = '', colSpan = 1, rowSpan = 1, children, style, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`ruy-bento-grid-item ${className}`} 
        style={{
          gridColumn: `span ${colSpan} / span ${colSpan}`,
          gridRow: `span ${rowSpan} / span ${rowSpan}`,
          display: 'flex',
          flexDirection: 'column',
          ...style
        }} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

BentoGridItem.displayName = 'BentoGridItem';
