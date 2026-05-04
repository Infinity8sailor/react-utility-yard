import { forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant */
  variant?: 'default' | 'glass';
  /** Label text above the input */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Error message (shows error state) */
  error?: string;
  /** Element to render on the left side */
  leftAddon?: React.ReactNode;
  /** Element to render on the right side */
  rightAddon?: React.ReactNode;
  /** Full container className */
  containerClassName?: string;

  // ── Legacy compat ──
  /** @deprecated Use `onChange` with standard event signature */
  onchange?: (value: string) => void;
  /** @deprecated Use `onKeyDown` */
  onkeyDown?: React.KeyboardEventHandler;
  /** @deprecated Use `readOnly` */
  editOn?: boolean;
  /** @deprecated Use `autoFocus` */
  focus?: boolean;
  /** Standard onChange */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      label,
      helperText,
      error,
      leftAddon,
      rightAddon,
      containerClassName = '',
      className = '',
      // Legacy
      onchange,
      onkeyDown,
      editOn,
      focus,
      onChange,
      onKeyDown,
      readOnly,
      autoFocus,
      ...rest
    },
    ref,
  ) => {
    const isReadOnly = editOn !== undefined ? !editOn : readOnly;

    const wrapperClasses = [
      'ruy-input',
      `ruy-input-${size}`,
      variant === 'glass' ? 'ruy-input-glass' : '',
      error ? 'ruy-input-error' : '',
    ].filter(Boolean).join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onchange) onchange(e.target.value);
      if (onChange) onChange(e);
    };

    return (
      <div className={containerClassName}>
        {label && <label className="ruy-input-label">{label}</label>}
        <div className={wrapperClasses}>
          {leftAddon && <span style={{ display: 'inline-flex', flexShrink: 0, marginRight: '0.25rem' }}>{leftAddon}</span>}
          <input
            ref={ref}
            className={className}
            onChange={handleChange}
            onKeyDown={onkeyDown || onKeyDown}
            readOnly={isReadOnly}
            autoFocus={focus || autoFocus}
            {...rest}
          />
          {rightAddon && <span style={{ display: 'inline-flex', flexShrink: 0, marginLeft: '0.25rem' }}>{rightAddon}</span>}
        </div>
        {error && <p className="ruy-input-error-text">{error}</p>}
        {helperText && !error && <p className="ruy-input-helper">{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
