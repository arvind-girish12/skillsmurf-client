import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../../Assets/contentpic.jpg";

const Login = (props) => {
  return (
    <>
      <Container className="login-page">
        <Row>
          <div className="login-header">
            <p className="title">SKILLSMURF</p>
            <p className="subtitle">Smurfing your way through learning</p>
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
              decision as to where, when and how to start? In this generation of
              passive information, it takes more than resources being available
              for one to delve into focused learning. What is focused learning?
              It's the art of knowing what you want to learn and specifically
              pick out a well structured format of content to learn the specific
              skill. Now, there are plenty of resources available online, but if
              you lack the motivation to start? Fret not. Using this app, you
              can now easily make productive decisions when it comes to
              learning. Please sign up, and smurf away.{" "}
            </p>
          </Col>
          <Col>
            Login
            {/* <LoginComponent /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
