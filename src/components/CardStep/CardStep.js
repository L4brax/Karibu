import React from "react";
import "./CardStep.scss";
import { format } from "date-fns";

export const CardStep = ({ step, stepRef }) => {
  return (
    <div className="card-step-container" ref={stepRef}>
      {step && step.title && <h1 className="step-title">{step.title}</h1>}
      <div className="step-infos">
        {step && step.country && (
          <div className="step-country">{step.country}</div>
        )}
        &nbsp;{"•"}&nbsp;
        <div className="step-timestamp">
          {format(step.date, "EEEE, MMMM do y")}
        </div>
      </div>
      {step && step.desc && <div className="step-desc">{step.desc}</div>}
      {step.pictures &&
        step.pictures.length > 0 &&
        step.pictures.map((picture) => (
          <img className="card-step-img" alt="img" src={picture}></img>
        ))}
    </div>
  );
};
