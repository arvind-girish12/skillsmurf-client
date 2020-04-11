import React from "react";
import { Modal, Button } from "react-bootstrap";

const ForgotPassword = (props) => {
  const { show, handleClose } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot password?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will recieve an email with instructions to reset your password.{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ForgotPassword;
