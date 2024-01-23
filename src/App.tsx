import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showDismissAlert, setShowDismissAlert] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeAlert = () => {
    setShowAlert(false);
    setShowDismissAlert(false);
    console.log('Alert closed');
  };

  const showAlertWithDismiss = () => {
    setShowDismissAlert(true);
  };

  const showAlertWithoutDismiss = () => {
    setShowAlert(true);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <button onClick={showAlertWithDismiss}>Show Alert with Dismiss</button>
      <button onClick={showAlertWithoutDismiss}>Show Alert without Dismiss</button>

      <Modal
        show={showModal}
        onClose={closeModal}
        title="Some Modal Title"
        buttons={[
          { type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
          { type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel')},
        ]}
      >
        <p>This is modal content</p>
      </Modal>

      {showDismissAlert && (
        <Alert type="warning" onDismiss={closeAlert} clickDismissable>
          This is a warning type alert
        </Alert>
      )}

      {showAlert && (
        <Alert type="success" onDismiss={closeAlert}> 
          This is a success type alert
        </Alert>
      )}

    </div>
  );
};

export default App;
