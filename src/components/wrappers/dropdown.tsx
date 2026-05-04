import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../hooks';

// --- Dropdown Container ---
export interface DropdownProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  className?: string;
  width?: number | string;
}

export function Dropdown({
  children,
  trigger,
  placement = 'bottom-left',
  className = '',
  width = 220,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const toggle = () => setIsOpen((prev) => !prev);

  // Position logic (simplified for standard placements)
  const getPosition = () => {
    if (!containerRef.current) return {};
    const rect = containerRef.current.getBoundingClientRect();
    
    // Default to bottom-left relative to trigger
    let top = rect.bottom + 8;
    let left = rect.left;
    let right = 'auto';

    if (placement.includes('right')) {
      left = 'auto';
      right = window.innerWidth - rect.right;
    }
    if (placement.includes('top')) {
      top = rect.top - 8; // we'd need to subtract dropdown height for true top, but this needs ResizeObserver in full impl
    }

    return {
      top: `${top}px`,
      left: left !== 'auto' ? `${left}px` : 'auto',
      right: right !== 'auto' ? `${right}px` : 'auto',
    };
  };

  return (
    <div className={`ruy-dropdown-container ${className}`} ref={containerRef} style={{ display: 'inline-block' }}>
      <div onClick={toggle} style={{ cursor: 'pointer', display: 'inline-block' }}>
        {trigger}
      </div>

      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, scale: 0.95, y: placement.includes('bottom') ? -10 : 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: placement.includes('bottom') ? -10 : 10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                ...getPosition(),
                width,
                zIndex: 'var(--ruy-z-popover)' as any,
                background: 'var(--ruy-bg-popover)',
                backdropFilter: 'blur(var(--ruy-glass-blur))',
                WebkitBackdropFilter: 'blur(var(--ruy-glass-blur))',
                border: '1px solid var(--ruy-glass-border)',
                borderRadius: 'var(--ruy-radius-md)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
              onClick={() => setIsOpen(false)} // Close on item click
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

// --- Dropdown Item ---
export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  danger?: boolean;
}

export function DropdownItem({ children, icon, danger, className = '', ...props }: DropdownItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`ruy-dropdown-item ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem 0.75rem',
        borderRadius: 'var(--ruy-radius-sm)',
        cursor: 'pointer',
        fontSize: '0.875rem',
        color: danger ? 'var(--ruy-danger)' : 'var(--ruy-text-secondary)',
        background: isHovered 
          ? (danger ? 'var(--ruy-danger-muted)' : 'var(--ruy-bg-surface-hover)') 
          : 'transparent',
        transition: 'background var(--ruy-transition-fast)',
      }}
      {...props}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      <span style={{ flex: 1 }}>{children}</span>
    </div>
  );
}

// --- Dropdown Divider ---
export function DropdownDivider() {
  return (
    <div style={{ height: '1px', background: 'var(--ruy-border-color)', opacity: 0.5, margin: '0.25rem 0' }} />
  );
}
