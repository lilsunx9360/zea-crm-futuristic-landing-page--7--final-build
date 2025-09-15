
import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'normal' | 'large';
  initialPosition?: { top: number; left: number } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size = 'normal', initialPosition }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) {
      setIsRendered(false);
    }
  };

  if (!isRendered) return null;

  const sizeClasses = {
    normal: 'max-w-md',
    large: 'max-w-4xl',
  };

  const getAnimationProps = () => {
    const isClosing = !isOpen;

    if (initialPosition) {
      const translateX = initialPosition.left - window.innerWidth / 2;
      const translateY = initialPosition.top - window.innerHeight / 2;
      
      // FIX: Cast style object to React.CSSProperties to allow for custom CSS properties.
      const style = {
        '--initial-translate-x': `${translateX}px`,
        '--initial-translate-y': `${translateY}px`,
      } as React.CSSProperties;

      return {
        className: isClosing ? 'animate-pop-to-point' : 'animate-pop-from-point',
        style,
      };
    }
    
    return {
      className: isClosing ? 'animate-fade-out-scale' : 'animate-fade-in-scale',
      style: {},
    };
  };

  const animation = getAnimationProps();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className={`relative bg-slate-800 border border-slate-700 rounded-2xl shadow-lg w-full ${sizeClasses[size]} ${animation.className}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={onAnimationEnd}
        style={animation.style}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale { animation: fade-in-scale 0.3s ease-out forwards; }

        @keyframes fade-out-scale {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        .animate-fade-out-scale { animation: fade-out-scale 0.2s ease-in forwards; }

        @keyframes pop-from-point {
          from {
            opacity: 0;
            transform: translate(var(--initial-translate-x), var(--initial-translate-y)) scale(0.1);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-pop-from-point { animation: pop-from-point 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes pop-to-point {
          from {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(var(--initial-translate-x), var(--initial-translate-y)) scale(0.1);
          }
        }
        .animate-pop-to-point { animation: pop-to-point 0.3s cubic-bezier(0.36, 0, 0.66, -0.56) forwards; }
      `}</style>
    </div>
  );
};

export default Modal;
