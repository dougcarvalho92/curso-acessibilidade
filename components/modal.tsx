"use client";
import { ReactNode, useEffect, useRef } from "react";
import Axe from "./axe";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  id: string;
}

export function Modal({ isOpen, onClose, children, title, id }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <Axe>
      <div
        id={id}
        ref={modalRef}
        className={styles.overlay}
        onClick={onClose}
        role='dialog'
        aria-modal={true}
        aria-labelledby={`${id}-modalTitle`} // Accessibility attributes for screen readers
        aria-describedby={`${id}-modalContent`} // Accessibility attributes for screen readers
        tabIndex={-1} // Ensure the modal can receive focus
      >
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          {title && (
            <h2 className={styles.title} id={`${id}-modalTitle`}>
              {title}
            </h2>
          )}
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <div className={styles.content} id={`${id}-modalContent`}>
            {children}
          </div>
        </div>
      </div>
    </Axe>
  );
}
