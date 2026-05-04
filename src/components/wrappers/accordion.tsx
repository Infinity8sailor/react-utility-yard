import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Accordion Container ---
export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  className?: string;
  defaultExpanded?: string[];
}

export function Accordion({
  children,
  allowMultiple = false,
  className = '',
  defaultExpanded = [],
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string[]>(defaultExpanded);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setExpanded((prev) => 
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setExpanded((prev) => 
        prev.includes(id) ? [] : [id]
      );
    }
  };

  // Clone children to pass expanded state
  const styledChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const id = child.props.id || child.key;
      return React.cloneElement(child as React.ReactElement<any>, {
        isExpanded: expanded.includes(id),
        onToggle: () => toggle(id),
      });
    }
    return child;
  });

  return (
    <div className={`ruy-accordion ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
      {styledChildren}
    </div>
  );
}

// --- Accordion Item ---
export interface AccordionItemProps {
  id: string; // Required for state matching
  title: React.ReactNode;
  children: React.ReactNode;
  isExpanded?: boolean; // Injected by parent
  onToggle?: () => void; // Injected by parent
  className?: string;
  variant?: 'glass' | 'solid' | 'transparent';
}

export function AccordionItem({
  title,
  children,
  isExpanded = false,
  onToggle,
  className = '',
  variant = 'glass',
}: AccordionItemProps) {
  
  const bgStyle = variant === 'glass'
    ? { background: 'var(--ruy-glass-bg)', backdropFilter: 'var(--ruy-glass-blur)', border: '1px solid var(--ruy-glass-border)' }
    : variant === 'solid'
      ? { background: 'var(--ruy-bg-surface)', border: '1px solid var(--ruy-border-base)' }
      : { background: 'transparent', borderBottom: '1px solid var(--ruy-border-light)' };

  return (
    <div 
      className={`ruy-accordion-item ${className}`}
      style={{
        borderRadius: variant !== 'transparent' ? 'var(--ruy-radius-md)' : '0',
        overflow: 'hidden',
        ...bgStyle
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--ruy-text-primary)',
          fontWeight: 600,
          fontSize: '1rem',
          outline: 'none',
        }}
        aria-expanded={isExpanded}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1rem 1rem 1rem', color: 'var(--ruy-text-secondary)', fontSize: '0.875rem' }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
