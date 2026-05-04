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

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDanger?: boolean;
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  isDanger = false,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} title={title}>
      <p className="ruy-modal-message">{message}</p>
      <div className="ruy-modal-actions">
        <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>
        <Button
          variant="solid"
          color={isDanger ? 'danger' : 'accent'}
          onClick={() => { onConfirm(); onCancel(); }}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}
