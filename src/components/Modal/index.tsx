import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';

export interface ModalProps {
  /** Whether the modal is visible */
  isOpen: boolean;
  /** Called when the modal should close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal body content */
  children?: React.ReactNode;
  /** Max width of the modal panel */
  maxWidth?: string;
  /** Additional class on the panel */
  className?: string;
  /** Close on backdrop click (default: true) */
  closeOnBackdrop?: boolean;
  /** Close on Escape key (default: true) */
  closeOnEscape?: boolean;
  /** Show the accent bar at the top */
  showAccentBar?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '28rem',
  className = '',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showAccentBar = true,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) onClose();
    },
    [onClose, closeOnEscape],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="ruy-modal-overlay"
      onClick={closeOnBackdrop ? onClose : undefined}
      style={{ animation: 'ruy-fade-in 0.2s ease' }}
    >
      <div
        ref={panelRef}
        className={`ruy-modal-panel ${className}`}
        style={{ maxWidth, animation: 'ruy-scale-in 0.25s ease' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {showAccentBar && <div className="ruy-modal-accent-bar" />}
        <button className="ruy-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="ruy-modal-body">
          {title && <h2 className="ruy-modal-title">{title}</h2>}
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

// ── Confirm Modal preset ──
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string | React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: 'danger' | 'warning' | 'info';
  icon?: React.ReactNode;
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  variant = 'info',
  icon,
}: ConfirmModalProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'danger': return { color: 'danger', iconColor: 'text-red-500', bg: 'bg-red-500/10', DefaultIcon: AlertTriangle };
      case 'warning': return { color: 'warning', iconColor: 'text-amber-500', bg: 'bg-amber-500/10', DefaultIcon: AlertCircle };
      case 'info':
      default:
        return { color: 'accent', iconColor: 'text-blue-500', bg: 'bg-blue-500/10', DefaultIcon: Info };
    }
  };

  const styles = getVariantStyles();
  const IconToUse = icon ? () => <>{icon}</> : styles.DefaultIcon;

  return (
    <Modal isOpen={isOpen} onClose={onCancel} title="" showAccentBar={false} className="max-w-md">
      <div className="flex items-start gap-4 mb-2 pt-2">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${styles.bg}`}>
          <IconToUse className={`w-6 h-6 ${styles.iconColor}`} />
        </div>
        <div className="flex-1 mt-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="text-sm text-slate-400">
            {message}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-8">
        <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>
        <Button
          variant="solid"
          color={styles.color as any}
          onClick={() => { onConfirm(); onCancel(); }}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}

