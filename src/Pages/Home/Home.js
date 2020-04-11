import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../../Assets/contentpic.jpg";
import Login from "../../Components/Login/Login";
import ForgotPassword from "../../Components/ForgotPassword/ForgotPassword";
import Signup from "../../Components/Signup/Signup";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSubmitForm = (formDetails) => {
    if (!_.isEmpty(formDetails)) {
      history.push("/dashboard");
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleSignUp = () => {
    setShowSignupModal(true);
  };

  return (
    <>
      <div className="page">
        <Container className="home-page">
          <Row>
            <div className="home-header">
              <p className="title">SKILLSURF</p>
              <p className="subtitle">Surfing your way through learning</p>
            </div>
          </Row>
          <Row>
            <Col>
              <img className="left-pic" src={Content} alt="content" />
              <p className="content-text">
                Are you mentally tired of just blindly scrolling through content
                and knowing deep inside that you're barely interested in most of
                it? Do you feel you could be much better off learning stuff that
                you've always wanted to, but lack the motivation to make a
                decision as to where, when and how to start? In this generation
                of passive information, it takes more than resources being
                available for one to delve into focused learning. What is
                focused learning? It's the art of knowing what you want to learn
                and specifically pick out a well structured format of content to
                learn the specific skill. Now, there are plenty of resources
                available online, but if you lack the motivation to start? Fret
                not. Using this app, you can now easily make productive
                decisions when it comes to learning. Happy Surfing!!
              </p>
            </Col>
            <Col>
              <Login
                handleSubmitForm={handleSubmitForm}
                handleForgotPassword={handleForgotPassword}
                handleSignUp={handleSignUp}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {showForgotPasswordModal && (
        <ForgotPassword
          show={showForgotPasswordModal}
          handleClose={() => setShowForgotPasswordModal(false)}
        />
      )}
      {showSignupModal && (
        <Signup
          show={showSignupModal}
          handleClose={() => setShowSignupModal(false)}
        />
      )}
    </>
  );
};

export default Home;
