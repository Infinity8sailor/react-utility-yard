import { forwardRef } from 'react';

export interface StatLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading icon — emoji string or ReactNode */
  icon?: React.ReactNode;
  /** The text value to display */
  value: React.ReactNode;
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
      value,
      muted = false,
      size = 'md',
      className = '',
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
      <span ref={ref} className={classes} {...rest}>
        {icon && (
          <span className="ruy-stat-label-icon">
            {typeof icon === 'string' ? icon : icon}
          </span>
        )}
        <span className="ruy-stat-label-value">{value}</span>
      </span>
    );
  }
);

StatLabel.displayName = 'StatLabel';
