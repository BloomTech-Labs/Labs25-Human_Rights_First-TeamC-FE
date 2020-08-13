import React, { useState } from 'react';
import Button from './Button';

const Modal = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={props.handleShow}
        disabled={props.isDisabled}
        className={props.classType || 'primary'}
      >
        Grahpic Consent
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Consent to Graphic Materials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Application may contain graphic materials that may be disturbing to
          some viewers.
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Consent
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal;
