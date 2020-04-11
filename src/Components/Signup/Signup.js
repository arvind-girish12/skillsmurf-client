import React, { useState } from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import { FaUserIcon, FaKeyIcon } from "../../Assets/icons";

const Signup = (props) => {
  const { show, handleClose } = props;

  const { formDetails, setFormDetails } = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const updatedFormDetails = {
      ...formDetails,
      [evt.target.name]: evt.target.value,
    };
    setFormDetails(updatedFormDetails);
  };

  const handleCreateAccount = () => {
    console.log("createaccount");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} className="signup-modal" centered>
        <Modal.Body>
          <div className="signup-container d-flex flex-column justify-content-center">
            <p className="text-center signup-heading">CREATE NEW ACCOUNT</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    {FaUserIcon}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    {FaKeyIcon}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    {FaKeyIcon}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="secondary"
                type="submit"
                onClick={handleClose}
                className="mr-4 my-4"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={(event) => {
                  handleCreateAccount(formDetails);
                }}
                className="mr-4 my-4"
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
