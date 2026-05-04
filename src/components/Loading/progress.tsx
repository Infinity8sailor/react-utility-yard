import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  value?: number;
  max?: number;
  variant?: 'linear' | 'circular' | 'gradient-wave';
  color?: string; // e.g. 'var(--ruy-color-accent)'
  size?: number | string; // For circular variant
  thickness?: number | string; // For both variants
  showLabel?: boolean;
  indeterminate?: boolean;
  className?: string;
}

export function ProgressBar({
  value = 0,
  max = 100,
  variant = 'linear',
  color = 'var(--ruy-accent)',
  size = 48,
  thickness = 8,
  showLabel = false,
  indeterminate = false,
  className = '',
}: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = indeterminate ? 0 : Math.round((clampedValue / max) * 100);

  if (variant === 'circular') {
    const radius = (typeof size === 'number' ? size : 48) / 2 - (typeof thickness === 'number' ? thickness : 4) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div 
        className={`ruy-progress-circular ${className}`} 
        style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke="var(--ruy-bg-skeleton)"
            strokeWidth={thickness}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={indeterminate ? { strokeDashoffset: circumference } : false}
            animate={
              indeterminate 
                ? { strokeDashoffset: [circumference, 0, circumference], rotate: [0, 360, 360] }
                : { strokeDashoffset: offset }
            }
            transition={
              indeterminate
                ? { duration: 2, ease: 'linear', repeat: Infinity }
                : { duration: 0.5, ease: 'easeOut' }
            }
          />
        </svg>
        {showLabel && !indeterminate && (
          <span style={{ position: 'absolute', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ruy-text-primary)' }}>
            {percentage}%
          </span>
        )}
      </div>
    );
  }

  const isGradientWave = variant === 'gradient-wave';

  return (
    <div 
      className={`ruy-progress-${variant} ${className}`}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : clampedValue}
      aria-valuemin={0}
      aria-valuemax={max}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        width: '100%'
      }}
    >
      {showLabel && !indeterminate && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '0.75rem', fontWeight: 600 }}>
          {percentage}%
        </div>
      )}
      <div 
        style={{ 
          width: '100%', 
          height: thickness, 
          background: 'var(--ruy-bg-skeleton)', 
          borderRadius: 'var(--ruy-radius-full)', 
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: isGradientWave 
              ? `linear-gradient(90deg, ${color}, var(--ruy-violet), var(--ruy-pink), ${color})` 
              : color,
            backgroundSize: isGradientWave ? '200% 100%' : 'auto',
            borderRadius: 'var(--ruy-radius-full)',
            transformOrigin: 'left',
          }}
          initial={indeterminate ? { x: '-100%' } : false}
          animate={{
            ...(indeterminate ? { x: ['-100%', '100%'] } : { width: `${percentage}%` }),
            ...(isGradientWave ? { backgroundPosition: ['0% 0%', '200% 0%'] } : {})
          }}
          transition={{
            ...(indeterminate ? { duration: 1.5, ease: 'easeInOut', repeat: Infinity } : { duration: 0.5, ease: 'easeOut' }),
            ...(isGradientWave ? { backgroundPosition: { duration: 3, ease: 'linear', repeat: Infinity } } : {})
          }}
        />
      </div>
    </div>
  );
}
