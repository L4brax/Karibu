import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";

export const Step = ({ step }) => {
  const divIcon = L.divIcon({
    html: ReactDOMServer.renderToString(
      <img alt="img" src={step.pictures[0]}></img>
    ),
    className: "div-custom-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const click = () => {
    console.log("CLICKED");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  return (
    <Marker
      position={step.position}
      icon={divIcon}
      eventHandlers={{ click }}
    ></Marker>
  );
};
