import React from 'react';

interface AlertProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  clickDismissable?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, clickDismissable, children }) => {
    const handleCloseClick = () => {
        if (onDismiss && !clickDismissable) {
          onDismiss();
        }
      };

      const handleAlertClick = () => {
        if (onDismiss && clickDismissable) {
          onDismiss();
        }
      };

  return (
    <div
      className={`alert alert-${type} ${clickDismissable ? 'click-dismissable' : ''}`}
      role="alert"
      onClick={handleAlertClick}
    >
      {children}
      {onDismiss && !clickDismissable && (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={handleCloseClick}
        ></button>
      )}
    </div>
  );
};

export default Alert;
