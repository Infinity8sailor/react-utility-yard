export interface TooltipProps {
  /** Tooltip content text */
  content: string;
  /** Position relative to the trigger */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Trigger element */
  children: React.ReactNode;
  /** Additional class */
  className?: string;
}

export function Tooltip({
  content,
  position = 'top',
  children,
  className = '',
}: TooltipProps) {
  return (
    <span className={`ruy-tooltip-wrapper ${className}`}>
      {children}
      <span className={`ruy-tooltip ruy-tooltip-${position}`} role="tooltip">
        {content}
      </span>
    </span>
  );
}
