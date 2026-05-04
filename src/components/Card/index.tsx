import React, { ReactNode } from 'react';

// --- Card Container ---
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'glass' | 'solid' | 'outline';
  hoverable?: boolean;
}

export function Card({
  children,
  variant = 'glass',
  hoverable = false,
  className = '',
  ...props
}: CardProps) {
  const baseStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--ruy-radius-lg)',
    overflow: 'hidden',
    transition: 'transform var(--ruy-transition-fast), box-shadow var(--ruy-transition-fast)',
    ...(variant === 'glass' && {
      background: 'var(--ruy-bg-elevated)',
      backdropFilter: 'blur(var(--ruy-glass-blur))',
      WebkitBackdropFilter: 'blur(var(--ruy-glass-blur))',
      border: '1px solid var(--ruy-glass-border)',
      boxShadow: 'var(--ruy-shadow-md)',
      ...(document.documentElement.getAttribute('data-theme') === 'light' && {
        background: 'rgba(255, 255, 255, 0.45)',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
      })
    }),
    ...(variant === 'solid' && {
      background: 'var(--ruy-bg-surface)',
      border: '1px solid var(--ruy-border-light)',
      boxShadow: 'var(--ruy-shadow-md)',
    }),
    ...(variant === 'outline' && {
      background: 'transparent',
      border: '1px solid var(--ruy-border-base)',
    }),
  };

  const hoverClass = hoverable ? 'ruy-card-hoverable' : '';

  return (
    <div
      className={`ruy-card ${hoverClass} ${className}`}
      style={baseStyle}
      {...props}
    >
      {/* We inject some pure CSS for the hover effect so we don't need JS events */}
      {hoverable && (
        <style dangerouslySetInnerHTML={{__html: `
          .ruy-card-hoverable:hover {
            transform: translateY(-2px);
            box-shadow: var(--ruy-shadow-lg);
          }
        `}} />
      )}
      {children}
    </div>
  );
}

// --- Card Header ---
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div
      className={`ruy-card-header ${className}`}
      style={{
        padding: '1.25rem 1.25rem 0.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// --- Card Title ---
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function CardTitle({ children, className = '', ...props }: CardTitleProps) {
  return (
    <h3
      className={`ruy-card-title ${className}`}
      style={{
        fontSize: '1.125rem',
        fontWeight: 600,
        color: 'var(--ruy-text-primary)',
        margin: 0,
        lineHeight: 1.2,
      }}
      {...props}
    >
      {children}
    </h3>
  );
}

// --- Card Description ---
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function CardDescription({ children, className = '', ...props }: CardDescriptionProps) {
  return (
    <p
      className={`ruy-card-description ${className}`}
      style={{
        fontSize: '0.875rem',
        color: 'var(--ruy-text-secondary)',
        margin: 0,
      }}
      {...props}
    >
      {children}
    </p>
  );
}

// --- Card Body ---
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardBody({ children, className = '', ...props }: CardBodyProps) {
  return (
    <div
      className={`ruy-card-body ${className}`}
      style={{
        padding: '0.75rem 1.25rem 1.25rem',
        flex: '1 1 auto',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// --- Card Footer ---
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <div
      className={`ruy-card-footer ${className}`}
      style={{
        padding: '0.75rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid var(--ruy-border-light)',
        background: 'rgba(0,0,0,0.02)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export * from './MediaCard';
export * from './AsymmetricCard';
