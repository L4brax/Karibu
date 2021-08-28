import React, { useEffect } from "react";
import { useListRefsFromSteps } from "../../hooks";
import { CardStep } from "./../../components/CardStep";
import "./SidePanel.scss";

export const SidePanel = ({ steps, stepIdSelected }) => {
  const refs = useListRefsFromSteps(steps);

  useEffect(() => {
    if (stepIdSelected) {
      refs[stepIdSelected].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [stepIdSelected, refs]);

  return (
    <div className="side-panel-container">
      <div className="side-panel-header">
        <div className="profile-image" />
        <h3>Du Nord vers le Sud ! - 2021</h3>
      </div>
      <div className="side-panel">
        {steps.map((step) => (
          <CardStep key={step.id} step={step} stepRef={refs[step.id]} />
        ))}
      </div>
    </div>
  );
};
