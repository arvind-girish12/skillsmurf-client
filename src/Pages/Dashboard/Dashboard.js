import React, { useState, useEffect } from "react";
import { FaCogIcon } from "../../Assets/icons";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BoredQuestionComponent } from "../../Constants/dashboardConstants";
import { actionsProcess } from "../../Constants/dashboardConstants";

const Dashboard = (props) => {
  const history = useHistory();

  const [questionContent, setQuestionContent] = useState("bored");

  const handleSuccess = () => {
    console.log(questionContent);
  };

  const handleFailure = () => {
    console.log(questionContent);
  };

  const renderQuestionContent = () => {
    switch (questionContent) {
      case "bored":
        return (
          <BoredQuestionComponent
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        );
      case "durationAvailable":
        return (
          <BoredQuestionComponent
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        );
      case "actionType":
        return (
          <BoredQuestionComponent
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        );
      case "actionSuggestion":
        return (
          <BoredQuestionComponent
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        );
      case "reroll":
        return (
          <BoredQuestionComponent
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        );
      default:
        return null;
    }
  };

  const handleUserPreferencesClick = () => {
    history.push("/userPreferences");
  };

  return (
    <>
      <div className="page dashboard-page d-flex flex-column">
        <div className="dashboard-header d-flex justify-content-end">
          <div className="cursor-pointer" onClick={handleUserPreferencesClick}>
            {FaCogIcon}
          </div>
        </div>
        <Container className="flex-fill">
          <div className="d-flex flex-column align-items-center">
            <p className="f-6">Hi Arvind!! Welcome back. </p>
            <div className="question-content">{renderQuestionContent()}</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
