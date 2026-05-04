import { useId } from 'react';

export interface ToggleSwitchProps {
  /** Whether the toggle is checked */
  checked?: boolean;
  /** Callback when toggled */
  onChange?: (checked: boolean) => void;
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Disabled state */
  disabled?: boolean;

  // ── Legacy compat ──
  /** @deprecated Use `checked` */
  check?: boolean;
  /** @deprecated Use `label` */
  text?: string;
  /** @deprecated Use `onChange` — old signature: (e: ChangeEvent) => void */
  color?: 'blue' | 'green' | 'red';
}

export function ToggleSwitch({
  checked,
  onChange,
  size = 'md',
  label,
  disabled = false,
  // Legacy
  check,
  text,
}: ToggleSwitchProps) {
  const id = useId();
  const isChecked = checked ?? check;

  return (
    <label
      className={`ruy-toggle ruy-toggle-${size} ${disabled ? 'ruy-toggle-disabled' : ''}`}
      htmlFor={id}
      style={disabled ? { opacity: 0.5, pointerEvents: 'none' } : undefined}
    >
      <input
        id={id}
        type="checkbox"
        role="switch"
        aria-checked={isChecked}
        checked={isChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className="ruy-toggle-track">
        <span className="ruy-toggle-thumb" />
      </span>
      {(label || text) && <span className="ruy-toggle-label">{label || text}</span>}
    </label>
  );
}
