import { ReactNode } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role='dialog'
      aria-modal='true'
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
