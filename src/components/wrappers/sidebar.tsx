import { useState } from 'react';

export interface SideBarProps {
  /** Content for the sidebar panel */
  sideBar_list?: React.ReactNode;
  /** Main content area */
  children: React.ReactNode;
  /** Sidebar position */
  side?: 'left' | 'right';
  /** Sidebar title */
  title?: string;
  /** Sidebar width when expanded */
  width?: string;
  /** Initially collapsed */
  defaultCollapsed?: boolean;
  /** Custom icon for the toggle button (ReactNode or function of collapsed state) */
  toggleIcon?: React.ReactNode | ((collapsed: boolean) => React.ReactNode);
  /** Additional class */
  className?: string;

  // Legacy compat
  /** @deprecated Use `side` with 'left' */
  leftside?: boolean;
  /** @deprecated Use CSS */
  titleBarColor?: string;
  /** @deprecated Use CSS */
  titleTextColor?: string;
}

export function SideBar({
  sideBar_list,
  children,
  side,
  title = '',
  width = '18rem',
  defaultCollapsed = false,
  toggleIcon,
  className = '',
  leftside,
  titleBarColor,
  titleTextColor,
}: SideBarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  // Legacy compat: leftside prop
  const resolvedSide = side || (leftside === false ? 'right' : 'left');

  // Handle width: check if it's a tailwind class or a CSS value
  const isWidthClass = width.startsWith('w-');
  const panelStyle = {
    width: collapsed ? '3.5rem' : (isWidthClass ? undefined : width),
    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const panelClasses = [
    'ruy-sidebar-panel',
    !collapsed && isWidthClass ? width : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`ruy-sidebar ruy-sidebar-${resolvedSide} ${className}`}>
      <div
        className={panelClasses}
        style={panelStyle}
      >
        <div 
          className={`ruy-sidebar-header ${titleBarColor || ''}`}
          style={{ backgroundColor: titleBarColor && !titleBarColor.startsWith('bg-') ? titleBarColor : undefined }}
        >
          <button
            className="ruy-sidebar-toggle"
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            style={{ color: titleTextColor && !titleTextColor.startsWith('text-') ? titleTextColor : undefined }}
          >
            {toggleIcon ? (
              typeof toggleIcon === 'function' ? toggleIcon(collapsed) : toggleIcon
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {collapsed ? (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                ) : (
                  <path d="M18 6L6 18M6 6l12 12" />
                )}
              </svg>
            )}
          </button>
          {!collapsed && title && (
            <span 
              className={`ruy-sidebar-title ${titleTextColor || ''}`}
              style={{ color: titleTextColor && !titleTextColor.startsWith('text-') ? titleTextColor : undefined }}
            >
              {title}
            </span>
          )}
        </div>
        {!collapsed && <div className="ruy-sidebar-content">{sideBar_list}</div>}
      </div>
      <div className="ruy-sidebar-main">{children}</div>
    </div>
  );
}
