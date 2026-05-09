import { forwardRef } from 'react';

export interface StatLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading icon — emoji string or ReactNode */
  icon?: React.ReactNode;
  /** Label text for the stat */
  label?: React.ReactNode;
  /** The text value to display */
  value: React.ReactNode;
  /** Trend text (e.g. "+12%") */
  trend?: string;
  /** Custom color for the value */
  color?: string;
  /** Use muted styling (lower contrast) */
  muted?: boolean;
  /** Size preset */
  size?: 'xs' | 'sm' | 'md';
  /** Additional className */
  className?: string;
}

export const StatLabel = forwardRef<HTMLSpanElement, StatLabelProps>(
  (
    {
      icon,
      label,
      value,
      trend,
      color,
      muted = false,
      size = 'md',
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const classes = [
      'ruy-stat-label',
      `ruy-stat-label-${size}`,
      muted ? 'ruy-stat-label-muted' : '',
      className,
    ].filter(Boolean).join(' ');

    return (
      <span 
        ref={ref} 
        className={classes} 
        style={{ ...style, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} 
        {...rest}
      >
        {icon && (
          <span className="ruy-stat-label-icon">
            {typeof icon === 'string' ? icon : icon}
          </span>
        )}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {label && (
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1px' }}>
              {label}
            </span>
          )}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span className="ruy-stat-label-value" style={{ color: color || 'inherit', fontWeight: 600 }}>
              {value}
            </span>
            {trend && (
              <span style={{ fontSize: '10px', color: trend.startsWith('+') ? '#00ED64' : '#FF4D4D', opacity: 0.8 }}>
                {trend}
              </span>
            )}
          </div>
        </div>
      </span>
    );
  }
);

StatLabel.displayName = 'StatLabel';
