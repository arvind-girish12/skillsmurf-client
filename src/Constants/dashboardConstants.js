import React from "react";
import { Button } from "react-bootstrap";

export const BoredQuestionComponent = (props) => {
  const { handleSuccess, handleFailure } = props;
  return (
    <>
      <div className="question-title">
        Are you bored? Is it time to do something interesting?
      </div>
      <div className="question-action">
        <Button
          variant="secondary"
          type="submit"
          onClick={handleFailure}
          className="mr-4 my-4"
        >
          No
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSuccess}
          className="mr-4 my-4"
        >
          Yes
        </Button>
      </div>
    </>
  );
};

export const actionsProcess = {
  bored: {
    cancel: "bye",
    current: "bored",
    next: "durationAvailable",
  },
  durationAvailable: {
    previous: null,
    current: "durationAvailable",
    next: "actionType",
  },
  actionType: {
    previous: null,
    current: "actionType",
    next: "actionSuggestion",
  },
  actionSuggestion: {
    previous: null,
    current: "actionSuggestion",
    next: "reroll",
  },
  reroll: {
    previous: "actionSuggestion",
    current: "reroll",
    next: "actionType",
  },
};
