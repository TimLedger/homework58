import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

interface ModalProps {
  show: boolean;
  title: string;
  onClose: () => void;
  buttons?: { type: string; label: string; onClick: () => void }[];
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, title, onClose, buttons, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {buttons &&
                buttons.map((btn, index) => (
                  <button key={index} className={`btn btn-${btn.type}`} onClick={btn.onClick}>
                    {btn.label}
                  </button>
                ))}
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
