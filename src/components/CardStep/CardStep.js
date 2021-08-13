import React from "react";
import "./CardStep.scss";
import { format } from "date-fns";

export const CardStep = ({ step }) => {
  return (
    <div className="card-step-container">
      {step.pictures && step.pictures.length > 0 && (
        <img className="card-step-img" alt="img" src={step.pictures[0]}></img>
      )}
      <div className="step-timestamp">
        {format(step.date, "EEEE, MMMM do y")}
      </div>
    </div>
  );
};
