/**
 * Icon component — supports both Lucide React icons and Material Icons font.
 * 
 * Usage with Lucide:
 *   import { Settings } from 'lucide-react';
 *   <Icon><Settings size={20} /></Icon>
 * 
 * Usage with Material Icons (legacy):
 *   <MaterialIcon icon="settings" size="md" />
 */

export interface IconProps {
  /** Lucide icon as child element */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: React.MouseEventHandler;
  /** Size in pixels (for wrapper) */
  size?: number;
  /** Cursor style */
  cursor?: 'default' | 'pointer';
  /** Additional class */
  className?: string;
}

export function Icon({
  children,
  onClick,
  size,
  cursor = 'default',
  className = '',
}: IconProps) {
  return (
    <span
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor,
        fontSize: size,
        lineHeight: 1,
        color: 'inherit',
      }}
    >
      {children}
    </span>
  );
}

// ── Legacy Material Icon ──

export interface MaterialIconProps {
  /** Material icon name (e.g., 'settings', 'home') */
  icon: string;
  /** Click handler */
  onClick?: React.MouseEventHandler;
  /** @deprecated Use onClick */
  onclick?: React.MouseEventHandler;
  /** Size preset */
  size?: 'sm' | 'md' | 'lg' | number;
  /** Cursor style */
  cursor?: 'normal' | 'pointer';
}

const sizeToPx: Record<string, number> = {
  sm: 18,
  md: 24,
  lg: 32,
};

export function MaterialIcon({
  icon,
  onClick,
  onclick,
  size = 'md',
  cursor = 'normal',
}: MaterialIconProps) {
  const px = typeof size === 'number' ? size : sizeToPx[size] || 24;

  return (
    <span
      onClick={onClick || onclick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor,
        fontSize: px,
        lineHeight: 1,
      }}
    >
      <i
        className="material-icons"
        style={{
          fontSize: 'inherit',
          fontVariationSettings: `'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' ${px}`,
        }}
      >
        {icon}
      </i>
    </span>
  );
}
