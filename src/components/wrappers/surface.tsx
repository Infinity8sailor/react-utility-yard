import React, { HTMLAttributes, forwardRef } from 'react';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  /** 
   * The visual variant of the surface layer. 
   * 'heavy' provides maximum background separation (default).
   * 'light' provides a more subtle grounding layer.
   */
  variant?: 'heavy' | 'light';
  /** Preset padding amount */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Preset border radius */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const paddingMap = {
  none: '0',
  sm: '1rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
};

const radiusMap = {
  sm: 'var(--ruy-radius-sm)',
  md: 'var(--ruy-radius-md)',
  lg: 'var(--ruy-radius-lg)',
  xl: 'var(--ruy-radius-xl)',
  '2xl': 'var(--ruy-radius-2xl)',
};

/**
 * Surface is the foundational grounding layer for the glassmorphic design system.
 * It is meant to wrap layout sections, providing heavy blur and contrast
 * so that child components remain legible over complex backgrounds.
 */
export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className = '', variant = 'heavy', padding = 'lg', radius = '2xl', style, children, ...props }, ref) => {
    
    // For 'heavy', we use the robust `.ruy-surface` class from tokens.css
    // For 'light', we can fall back to the standard `.ruy-glass`
    const baseClass = variant === 'heavy' ? 'ruy-surface' : 'ruy-glass';
    
    return (
      <div
        ref={ref}
        className={`${baseClass} ${className}`}
        style={{
          padding: paddingMap[padding],
          borderRadius: radiusMap[radius],
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Surface.displayName = 'Surface';
