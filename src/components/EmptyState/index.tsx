import { forwardRef } from 'react';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display — emoji string or ReactNode (e.g., Lucide icon) */
  icon?: React.ReactNode;
  /** Primary message */
  title: string;
  /** Secondary descriptive text */
  description?: string;
  /** Optional CTA button or link */
  action?: React.ReactNode;
  /** Layout density */
  variant?: 'default' | 'compact';
  /** Additional className */
  className?: string;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon,
      title,
      description,
      action,
      variant = 'default',
      className = '',
      ...rest
    },
    ref
  ) => {
    const isCompact = variant === 'compact';

    return (
      <div
        ref={ref}
        className={`ruy-empty-state ruy-empty-state-${variant} ${className}`}
        {...rest}
      >
        {icon && (
          <div className="ruy-empty-state-icon">
            {typeof icon === 'string' ? (
              <span role="img" aria-label="empty-state-icon">
                {icon}
              </span>
            ) : (
              icon
            )}
          </div>
        )}
        <h3 className="ruy-empty-state-title">{title}</h3>
        {description && (
          <p className="ruy-empty-state-description">{description}</p>
        )}
        {action && !isCompact && (
          <div className="ruy-empty-state-action">{action}</div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
