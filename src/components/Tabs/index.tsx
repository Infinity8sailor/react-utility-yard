import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

// --- Context ---
interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: 'default' | 'pills' | 'underline';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tabs components must be used within a Tabs provider');
  return context;
}

// --- Tabs Container ---
export interface TabsProps {
  defaultValue: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
  children: ReactNode;
}

export function Tabs({
  defaultValue,
  value,
  onChange,
  variant = 'default',
  className = '',
  children,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value !== undefined ? value : internalValue;

  const handleTabChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab: activeValue, setActiveTab: handleTabChange, variant }}>
      <div className={`ruy-tabs ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// --- Tab List ---
export interface TabListProps {
  children: ReactNode;
  className?: string;
  justify?: 'start' | 'center' | 'end' | 'between';
}

export function TabList({ children, className = '', justify = 'start' }: TabListProps) {
  const { variant } = useTabs();
  
  const baseStyle: React.CSSProperties = {
    display: 'flex',
    gap: variant === 'pills' ? '0.5rem' : '1rem',
    justifyContent: justify === 'start' ? 'flex-start' : justify === 'center' ? 'center' : justify === 'end' ? 'flex-end' : 'space-between',
    borderBottom: variant === 'underline' ? '1px solid var(--ruy-border-light)' : 'none',
    position: 'relative',
    background: variant === 'pills' ? 'var(--ruy-glass-bg)' : 'transparent',
    padding: variant === 'pills' ? '0.25rem' : '0',
    borderRadius: variant === 'pills' ? 'var(--ruy-radius-full)' : '0',
  };

  return (
    <div className={`ruy-tab-list ${className}`} style={baseStyle} role="tablist">
      {children}
    </div>
  );
}

// --- Tab Item ---
export interface TabProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Tab({ value, children, disabled = false, className = '' }: TabProps) {
  const { activeTab, setActiveTab, variant } = useTabs();
  const isActive = activeTab === value;

  const baseStyle: React.CSSProperties = {
    position: 'relative',
    padding: variant === 'pills' ? '0.5rem 1rem' : '0.5rem 0',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : isActive ? 1 : 0.7,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? (variant === 'pills' ? '#fff' : 'var(--ruy-text-primary)') : 'var(--ruy-text-secondary)',
    transition: 'color var(--ruy-transition-fast)',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '0.875rem',
    zIndex: 1,
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      className={`ruy-tab ${isActive ? 'active' : ''} ${className}`}
      style={baseStyle}
      onClick={() => !disabled && setActiveTab(value)}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      
      {/* Framer Motion Indicator */}
      {isActive && (
        <motion.div
          layoutId={`tab-indicator-${variant}`}
          className="ruy-tab-indicator"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            position: 'absolute',
            ...(variant === 'pills' 
              ? {
                  inset: 0,
                  backgroundColor: 'var(--ruy-color-accent)',
                  borderRadius: 'var(--ruy-radius-full)',
                  zIndex: 0,
                } 
              : {
                  bottom: -1,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: 'var(--ruy-color-accent)',
                  zIndex: 1,
                }),
          }}
        />
      )}
    </button>
  );
}

// --- Tab Panel ---
export interface TabPanelProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabPanel({ value, children, className = '' }: TabPanelProps) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <motion.div
      role="tabpanel"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className={`ruy-tab-panel ${className}`}
      style={{ padding: '0.5rem 0', outline: 'none' }}
    >
      {children}
    </motion.div>
  );
}
