import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";

export const Step = ({ step, onStepClick }) => {
  const divIcon = L.divIcon({
    html: ReactDOMServer.renderToString(
      <img alt="img" src={step.pictures[0]}></img>
    ),
    className: "div-custom-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  return (
    <Marker
      position={step.position}
      icon={divIcon}
      eventHandlers={{ click: () => onStepClick(step.id) }}
    ></Marker>
  );
};
