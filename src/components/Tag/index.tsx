export interface TagProps {
  /** Tag content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'solid' | 'outline' | 'glass';
  /** Color scheme */
  color?: 
    | 'accent' | 'danger' | 'success' | 'warning' | 'neutral'
    | 'slate' | 'gray' | 'zinc' | 'stone' | 'red' | 'orange' | 'amber' 
    | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' 
    | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Callback when remove button is clicked */
  onRemove?: () => void;
  /** Additional class */
  className?: string;

  // Legacy compat
  /** @deprecated Use `children` */
  text?: string;
}

export function Tag({
  children,
  variant = 'solid',
  color = 'neutral',
  size = 'sm',
  onRemove,
  className = '',
  text,
}: TagProps) {
  const variantClass = variant === 'outline'
    ? 'ruy-tag-outline'
    : variant === 'glass'
      ? 'ruy-tag-glass'
      : `ruy-tag-solid ruy-tag-color-${color}`;

  const classes = ['ruy-tag', `ruy-tag-${size}`, variantClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {children || text}
      {onRemove && (
        <button className="ruy-tag-remove" onClick={onRemove} aria-label="Remove">
          ×
        </button>
      )}
    </span>
  );
}
