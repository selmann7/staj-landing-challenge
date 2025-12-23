import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { Button } from '../Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose} role="presentation">
      <div 
        className={`${styles.modalContent} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div className={styles.modalHeader}>
          {title && <h2 id="modal-title" className={styles.modalTitle}>{title}</h2>}
          <Button variant="ghost" onClick={onClose} className={styles.modalCloseBtn} aria-label="Close modal">
            &times;
          </Button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
