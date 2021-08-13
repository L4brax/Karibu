import React from "react";
import { CardStep } from "./../../components/CardStep";
import "./SidePanel.scss";

export const SidePanel = ({ steps }) => {
  return (
    <div className="side-panel">
      {steps.map((step) => (
        <CardStep key={step.id} step={step} />
      ))}
    </div>
  );
};
