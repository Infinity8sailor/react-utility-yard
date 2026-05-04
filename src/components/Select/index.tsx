import { useState, useRef, useEffect, useCallback } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /** List of options */
  options: SelectOption[] | string[];
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Size preset */
  size?: 'sm' | 'md';
  /** Disabled state */
  disabled?: boolean;
  /** Additional class */
  className?: string;

  // Legacy compat
  /** @deprecated Use `onChange` */
  onClick?: (value: string) => void;
  /** @deprecated Use `placeholder` */
  title?: string;
  /** @deprecated Use `value` */
  default_value?: string;
}

function normalizeOptions(opts: SelectOption[] | string[]): SelectOption[] {
  return opts.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
}

export function Select({
  options: rawOptions,
  value,
  onChange,
  placeholder = 'Select...',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  title,
  default_value,
}: SelectProps) {
  const options = normalizeOptions(rawOptions);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? default_value ?? '');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  const handleSelect = (val: string) => {
    setSelected(val);
    setIsOpen(false);
    onChange?.(val);
    onClick?.(val);
  };

  // Close on outside click
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, handleClickOutside]);

  const selectedLabel = options.find((o) => o.value === selected)?.label;

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative', display: 'inline-block', minWidth: '8rem' }}>
      {title && <label className="ruy-input-label">{title}</label>}
      <button
        type="button"
        className={`ruy-select-trigger ruy-select-trigger-${size}`}
        onClick={() => !disabled && setIsOpen((v) => !v)}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selectedLabel ? '' : 'ruy-select-placeholder'}>
          {selectedLabel || placeholder}
        </span>
        <svg className={`ruy-select-chevron ${isOpen ? 'ruy-select-chevron-open' : ''}`}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="ruy-select-dropdown" role="listbox" style={{ animation: 'ruy-slide-down 0.15s ease' }}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`ruy-select-option ${selected === opt.value ? 'ruy-select-option-selected' : ''}`}
              role="option"
              aria-selected={selected === opt.value}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** @deprecated Use `Select` with `options` prop */
export const SelectOptions = Select;
