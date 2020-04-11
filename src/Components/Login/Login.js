import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaUserIcon, FaKeyIcon } from "../../Assets/icons";

const Login = (props) => {
  const { handleSubmitForm, handleForgotPassword, handleSignUp } = props;
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const updatedFormDetails = {
      ...formDetails,
      [evt.target.name]: evt.target.value,
    };
    setFormDetails(updatedFormDetails);
  };
  return (
    <>
      <div className="login-container ml-5 d-flex flex-column justify-content-center">
        <p className="text-center login-heading">LOG IN</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">{FaUserIcon}</InputGroup.Text>
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
              <InputGroup.Text id="basic-addon1">{FaKeyIcon}</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Button className="link" onClick={handleForgotPassword}>
          Forgot your password?
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            handleSubmitForm(formDetails);
          }}
          className="mx-auto my-4"
        >
          Submit
        </Button>
        <div className="d-flex align-items-center justify-content-center ml-5">
          <span>New user?</span>
          <Button className="link" onClick={handleSignUp}>
            Create new account.
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
