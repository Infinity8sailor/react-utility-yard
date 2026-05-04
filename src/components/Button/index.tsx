import { forwardRef, useRef, useEffect } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual style */
  variant?: 'solid' | 'outline' | 'ghost' | 'glass';
  /** Color scheme */
  color?: 'accent' | 'danger' | 'success' | 'neutral';
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Show loading spinner */
  loading?: boolean;
  /** Icon element to show before text */
  leftIcon?: React.ReactNode;
  /** Icon element to show after text */
  rightIcon?: React.ReactNode;
  /** Render as icon-only button (square) */
  iconOnly?: boolean;
  /** Auto-focus on mount */
  focus?: boolean;

  // ── Legacy compat (from v1) ──
  /** @deprecated Use `children` or keep for backward compat */
  text?: string;
  /** @deprecated Use `onClick` */
  onclick?: React.MouseEventHandler;
  /** @deprecated Use `onKeyDown` */
  onkeydown?: React.KeyboardEventHandler;
  /** @deprecated Use style={{ zIndex }} */
  z_id?: number;
  /** @deprecated Use `leftIcon` with an icon component */
  icon?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'accent',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      iconOnly = false,
      focus = false,
      className = '',
      disabled,
      children,
      // Legacy props
      text,
      onclick,
      onkeydown,
      z_id,
      icon,
      onClick,
      onKeyDown,
      style,
      ...rest
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const buttonRef = (ref as React.RefObject<HTMLButtonElement>) || internalRef;

    useEffect(() => {
      if (focus && buttonRef.current) {
        buttonRef.current.focus();
      }
    }, [focus]);

    const variantClass =
      variant === 'ghost'
        ? 'ruy-btn-ghost'
        : variant === 'glass'
          ? 'ruy-btn-glass'
          : `ruy-btn-${variant}-${color}`;

    const sizeClass = `ruy-btn-${size}`;

    const classes = [
      'ruy-btn',
      sizeClass,
      variantClass,
      iconOnly ? 'ruy-btn-icon' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const mergedStyle = z_id ? { ...style, zIndex: z_id } : style;

    const content = children || text || 'Button';

    return (
      <button
        ref={buttonRef}
        className={classes}
        disabled={disabled || loading}
        onClick={onclick || onClick}
        onKeyDown={onkeydown || onKeyDown}
        style={mergedStyle}
        {...rest}
      >
        {loading ? (
          <span className="ruy-spinner-circle" style={{ width: '1em', height: '1em', borderWidth: '2px' }} />
        ) : leftIcon ? (
          <span style={{ display: 'inline-flex', flexShrink: 0 }}>{leftIcon}</span>
        ) : null}
        {!iconOnly && <span>{content}</span>}
        {rightIcon && !loading && (
          <span style={{ display: 'inline-flex', flexShrink: 0 }}>{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
