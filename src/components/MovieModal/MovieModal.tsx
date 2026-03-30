import { useEffect } from 'react';
import { createPortal } from "react-dom";
import css from './MovieModal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function MovieModal({ onClose, children }: ModalProps) {

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);


    return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
    <div className={css.modal}>
    <button className={css.closeButton} aria-label="Close modal">
      &times;
    </button>
    <img
      src="https://image.tmdb.org/t/p/original/backdrop_path"
      alt="movie_title"
      className={css.image}
    />
    <div className={css.content}>
      <h2>movie_title</h2>
      <p>movie_overview</p>
      <p>
        <strong>Release Date:</strong> movie_release_date
      </p>
      <p>
        <strong>Rating:</strong> movie_vote_average/10
      </p>
    </div>
    </div>
    {children}
    </div>,
    document.body
    );
}