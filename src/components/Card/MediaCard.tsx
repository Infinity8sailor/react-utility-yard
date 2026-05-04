import React, { HTMLAttributes, forwardRef } from 'react';
import { Card, CardProps } from './index';

export interface MediaCardProps extends CardProps {
  /** The URL of the image to display */
  imageUrl: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Content to overlay on the image (e.g. badges, tags) */
  imageOverlay?: React.ReactNode;
  /** The aspect ratio of the image container (e.g. '16/9', '4/3') */
  aspectRatio?: string;
}

export const MediaCard = forwardRef<HTMLDivElement, MediaCardProps>(
  ({ className = '', imageUrl, imageAlt = '', imageOverlay, aspectRatio = '16/9', children, style, ...props }, ref) => {
    return (
      <Card ref={ref} className={`ruy-media-card ${className}`} style={{ overflow: 'hidden', ...style }} {...props}>
        <div 
          className="ruy-media-card-image-container"
          style={{ 
            position: 'relative', 
            width: '100%', 
            aspectRatio,
            overflow: 'hidden'
          }}
        >
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--ruy-transition-slow)'
            }}
            className="ruy-media-card-img"
          />
          {/* Gradient Overlay for legibility if things are put on top, and to blend with card body */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--ruy-bg-surface) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)',
              pointerEvents: 'none'
            }}
          />
          {imageOverlay && (
            <div style={{ position: 'absolute', inset: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {imageOverlay}
            </div>
          )}
        </div>
        {children}
      </Card>
    );
  }
);

MediaCard.displayName = 'MediaCard';
