import React from 'react';
import './Alert.css';
import { CSSTransition } from 'react-transition-group';

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
    <CSSTransition
        in={true}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
    <div
      className={`alert alert-${type} ${clickDismissable ? 'click-dismissable' : ''}`}
      role="alert"
      onClick={handleAlertClick}
    >
      {children}
      {!clickDismissable && (
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={handleCloseClick}
        ></button>
      )}
    </div>
    </CSSTransition>
  );
};

export default Alert;
