import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circle' | 'rect';
  width?: string | number;
  height?: string | number;
  animation?: 'shimmer' | 'pulse' | 'none';
  className?: string;
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'shimmer',
  className = '',
  style,
  ...props
}: SkeletonProps) {
  // Determine border radius based on variant
  const borderRadius =
    variant === 'circle' ? '50%' : variant === 'text' ? '0.25rem' : '0.5rem';

  // Determine default dimensions if not provided
  const defaultWidth =
    width || (variant === 'circle' ? '3rem' : variant === 'text' ? '100%' : '100%');
  const defaultHeight =
    height || (variant === 'circle' ? '3rem' : variant === 'text' ? '1.2em' : '6rem');

  return (
    <div
      className={`ruy-skeleton ruy-skeleton-${animation} ${className}`}
      style={{
        width: defaultWidth,
        height: defaultHeight,
        borderRadius,
        backgroundColor: 'var(--ruy-bg-skeleton)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {/* We inject shimmer animation CSS directly to keep component self-contained */}
      {animation === 'shimmer' && (
        <>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .ruy-skeleton-shimmer::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.12),
                transparent
              );
              animation: shimmer 2s infinite;
            }
            [data-theme="light"] .ruy-skeleton-shimmer::after {
              background: linear-gradient(
                90deg,
                transparent,
                rgba(0, 0, 0, 0.05),
                transparent
              );
            }
          `}} />
        </>
      )}
      {animation === 'pulse' && (
        <>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            .ruy-skeleton-pulse {
              animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}} />
        </>
      )}
    </div>
  );
}
