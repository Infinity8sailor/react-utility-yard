import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- NavBar Container ---
export interface NavBarProps {
  brand?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'transparent';
  sticky?: boolean;
}

export function NavBar({
  brand,
  children,
  className = '',
  variant = 'glass',
  sticky = false,
}: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1.5rem',
    position: sticky ? 'sticky' : 'relative',
    top: sticky ? 0 : 'auto',
    left: 0,
    right: 0,
    zIndex: 1000,
    width: '100%',
    transition: 'background var(--ruy-transition-fast), backdrop-filter var(--ruy-transition-fast)',
    ...(variant === 'glass' && {
      background: 'var(--ruy-bg-popover)',
      backdropFilter: 'blur(var(--ruy-glass-blur))',
      WebkitBackdropFilter: 'blur(var(--ruy-glass-blur))',
      borderBottom: '1px solid var(--ruy-glass-border)',
    }),
    ...(variant === 'solid' && {
      background: 'var(--ruy-bg-surface)',
      borderBottom: '1px solid var(--ruy-border-light)',
    }),
  };

  return (
    <nav className={`ruy-navbar ${className}`} style={baseStyle}>
      <div className="ruy-navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0 }}>
        {brand}
      </div>

      {/* Desktop Menu */}
      <div className="ruy-navbar-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'flex-end' }}>
        <div className="ruy-navbar-items" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {children}
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="ruy-navbar-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--ruy-text-primary)',
          cursor: 'pointer',
          padding: '0.5rem'
        }}
      >
        {mobileMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--ruy-bg-popover)',
              backdropFilter: 'blur(32px)',
              borderBottom: '1px solid var(--ruy-glass-border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
              gap: '1rem',
              zIndex: 999
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .ruy-navbar-desktop { display: none !important; }
          .ruy-navbar-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
}

// --- NavItem ---
export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export function NavItem({
  children,
  active = false,
  className = '',
  style,
  ...props
}: NavItemProps) {
  return (
    <a
      className={`ruy-navitem ${active ? 'active' : ''} ${className}`}
      style={{
        textDecoration: 'none',
        color: active ? 'var(--ruy-color-accent)' : 'var(--ruy-text-secondary)',
        fontWeight: active ? 600 : 500,
        fontSize: '0.875rem',
        transition: 'color var(--ruy-transition-fast)',
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  );
}
