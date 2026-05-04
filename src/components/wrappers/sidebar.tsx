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
  /** Custom icon for the toggle button */
  toggleIcon?: React.ReactNode;
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
}: SideBarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  // Legacy compat: leftside prop
  const resolvedSide = side || (leftside === false ? 'right' : 'left');

  return (
    <div className={`ruy-sidebar ruy-sidebar-${resolvedSide} ${className}`}>
      <div
        className="ruy-sidebar-panel"
        style={{ width: collapsed ? '3rem' : width }}
      >
        <div className="ruy-sidebar-header">
          <button
            className="ruy-sidebar-toggle"
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {toggleIcon ? (
              typeof toggleIcon === 'function' ? toggleIcon(collapsed) : toggleIcon
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {collapsed ? (
                  <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
                ) : (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                )}
              </svg>
            )}
          </button>
          {!collapsed && title && <span className="ruy-sidebar-title">{title}</span>}
        </div>
        {!collapsed && <div className="ruy-sidebar-content">{sideBar_list}</div>}
      </div>
      <div className="ruy-sidebar-main">{children}</div>
    </div>
  );
}
