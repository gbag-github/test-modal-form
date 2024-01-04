// Globals
import './styles.scss';
import React, { useState } from 'react';
import { ModalTest } from 'modals/ModalTest';

const TestForm = () => {
  const [openModal, setOpenModal] = useState(true);

  // Handler
  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = () => {
    console.log('Form Submitted!');
  };

  // Render
  return (
    <div className="test-form">
      <a
        href="#"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Click to open Modal
      </a>

      {openModal && <ModalTest handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} />}
    </div>
  );
};

export { TestForm };
