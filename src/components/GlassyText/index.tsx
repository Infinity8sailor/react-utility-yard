import React, { forwardRef, ReactNode } from 'react';

export interface GlassyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** 
   * Visual style of the glassy wrapper.
   * 'vibrant' - colorful glow, high saturation, visible border.
   * 'minimal' - subtle and clean. Best for dashboards.
   * 'frosted' - heavy blur, low opacity. Best for overlays.
   */
  variant?: 'vibrant' | 'minimal' | 'frosted';
  /** 
   * Elevation intensity.
   * 'low'  — barely there, flat feel.
   * 'mid'  — default, balanced float.
   * 'high' — dramatic shadow + glow.
   */
  depth?: 'low' | 'mid' | 'high';
  /** 
   * Spacing between glass edge and content.
   * 'compact' — tight, chip-like.
   * 'sm'      — balanced default.
   * 'lg'      — spacious, card-like.
   */
  padding?: 'compact' | 'sm' | 'lg';
  /** 
   * Border radius.
   * 'none' — sharp corners (0px).
   * 'sm'   — subtle rounding.
   * 'full' — fully rounded / pill shape.
   */
  radius?: 'none' | 'sm' | 'full';
}

const paddingMap = {
  compact: '0.125rem 0.5rem',
  sm: '0.5rem 1rem',
  lg: '1.25rem 2.5rem',
};

const depthMap = { low: 2, mid: 5, high: 9 };

const radiusMap = {
  none: '0px',
  sm: 'var(--ruy-radius-sm)',
  full: 'var(--ruy-radius-full)',
};

/**
 * Detect the current RUY theme from the DOM.
 * Falls back to 'dark' if no data-theme attribute is set.
 */
function getResolvedTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
}

/** Color palette for each theme mode */
function getThemeColors(isDark: boolean) {
  const overlay = isDark ? '255, 255, 255' : '0, 0, 0';
  const opacityScale = isDark ? 1 : 1.4;
  return { overlay, opacityScale };
}

/**
 * GlassyText — Universal Visibility Wrapper
 * 
 * Wraps content in a frosted glass card that keeps it visible
 * on any dynamic background. Reacts to dark/light theme automatically.
 */
export const GlassyText = forwardRef<HTMLDivElement, GlassyTextProps>(
  ({ 
    children, 
    variant = 'minimal', 
    depth = 'mid', 
    padding = 'compact', 
    radius = 'sm',
    style, 
    className = '', 
    ...props 
  }, ref) => {
    
    const numericDepth = depthMap[depth] ?? depthMap.mid;
    const shadowOpacity = 0.15 + (numericDepth * 0.04);

    // Theme-aware colors — reads data-theme from DOM
    const isDark = getResolvedTheme() === 'dark';
    const { overlay, opacityScale } = getThemeColors(isDark);

    // Shadow color: always black but lighter on light themes
    const shadowBase = isDark 
      ? `rgba(0, 0, 0, ${shadowOpacity})`
      : `rgba(0, 0, 0, ${shadowOpacity * 0.4})`;
    
    // Variant configurations — all theme-aware via overlay color
    const configs = {
      vibrant: {
        bg: `rgba(${overlay}, ${(0.1 * opacityScale).toFixed(3)})`,
        border: `rgba(${overlay}, ${(0.25 * opacityScale).toFixed(3)})`,
        blur: '12px',
        saturation: '200%',
        glow: `0 0 ${numericDepth * 2}px rgba(${overlay}, ${(0.08 * opacityScale).toFixed(3)})`,
      },
      minimal: {
        bg: `rgba(${overlay}, ${(0.03 * opacityScale).toFixed(3)})`,
        border: `rgba(${overlay}, ${(0.1 * opacityScale).toFixed(3)})`,
        blur: '24px',
        saturation: '100%',
        glow: 'none',
      },
      frosted: {
        bg: `rgba(${overlay}, ${(0.05 * opacityScale).toFixed(3)})`,
        border: `rgba(${overlay}, ${(0.08 * opacityScale).toFixed(3)})`,
        blur: '40px',
        saturation: '120%',
        glow: 'none',
      }
    };

    const config = configs[variant];
    const resolvedPadding = paddingMap[padding as keyof typeof paddingMap] || padding;
    const resolvedRadius = radiusMap[radius as keyof typeof radiusMap] ?? radius;

    // Glass card style — single layer, no ghost
    const glassStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: resolvedPadding,
      borderRadius: resolvedRadius,
      background: config.bg,
      backdropFilter: `blur(${config.blur}) saturate(${config.saturation})`,
      WebkitBackdropFilter: `blur(${config.blur}) saturate(${config.saturation})`,
      border: `1px solid ${config.border}`,
      boxShadow: `0 ${numericDepth}px ${numericDepth * 4}px ${shadowBase}${config.glow !== 'none' ? `, ${config.glow}` : ''}`,
      transition: 'all var(--ruy-transition-spring)',
      textShadow: variant === 'vibrant' 
        ? (isDark ? '0 2px 10px rgba(0,0,0,0.5)' : '0 1px 4px rgba(0,0,0,0.15)') 
        : 'none',
      ...style
    };

    return (
      <div 
        ref={ref} 
        className={`ruy-glassy-text ${variant} ${className}`} 
        style={glassStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassyText.displayName = 'GlassyText';
