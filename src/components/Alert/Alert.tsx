import React from 'react';
import './Alert.css';

interface AlertProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  clickDismissable?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, clickDismissable, children }) => {
  const handleClick = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      {clickDismissable && <div onClick={handleClick} className="dismiss-overlay" />}
      {children}
      {onDismiss && (
        <button type="button" className="btn-close" aria-label="Close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;
