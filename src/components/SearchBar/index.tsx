import { forwardRef, useRef } from 'react';
import { Button } from '../Button/index';
import { Spinner } from '../Loading/loading';

export interface SearchBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current input value */
  value: string;
  /** Called on every input change */
  onChange: (value: string) => void;
  /** Called when action button is clicked or Enter is pressed */
  onAction?: () => void;
  /** Input placeholder text */
  placeholder?: string;
  /** Label for the action button (if omitted, no button is shown) */
  actionLabel?: string;
  /** Icon rendered on the left side of the input */
  icon?: React.ReactNode;
  /** Small helper text below the input */
  helperText?: string;
  /** Show loading spinner on the action button */
  loading?: boolean;
  /** Disable the input and button */
  disabled?: boolean;
  /** Visual variant */
  variant?: 'glass' | 'solid';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  (
    {
      value,
      onChange,
      onAction,
      placeholder,
      actionLabel,
      icon,
      helperText,
      loading = false,
      disabled = false,
      variant = 'glass',
      size = 'md',
      className = '',
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onAction && value.trim() !== '') {
        onAction();
      }
    };

    const containerClasses = [
      'ruy-searchbar',
      `ruy-searchbar-${variant}`,
      `ruy-searchbar-${size}`,
      disabled ? 'ruy-disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

    return (
      <div className="ruy-searchbar-wrapper" style={{ width: '100%' }}>
        <div ref={ref} className={containerClasses} {...rest}>
          {icon && (
            <div className="ruy-searchbar-icon">
              {typeof icon === 'string' ? icon : icon}
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            className="ruy-searchbar-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            style={{
              paddingLeft: icon ? '3.5rem' : '1.25rem',
              paddingRight: actionLabel ? '5rem' : '1.25rem',
            }}
          />
          {actionLabel && (
            <div className="ruy-searchbar-action">
              <Button
                variant="solid"
                color="accent"
                size={size === 'lg' ? 'md' : 'sm'}
                loading={loading}
                disabled={disabled || value.trim() === ''}
                onClick={onAction}
              >
                {actionLabel}
              </Button>
            </div>
          )}
        </div>
        {helperText && <div className="ruy-searchbar-helper">{helperText}</div>}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
