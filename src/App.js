import "./index.scss";
import { Step } from "./components/Map/Step";
import { SidePanel } from "./layout/SidePanel";

import { MapContainer, TileLayer, Polyline, ZoomControl } from "react-leaflet";
import { useState } from "react";

const App = () => {
  const steps = [
    {
      id: 1,
      date: new Date(),
      position: [48.856614, 2.3522219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
      title: "Un très bel endroit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor.",
      country: "Norway",
    },
    {
      id: 2,
      date: new Date(),
      position: [48.556614, 2.3832219],
      pictures: [
        "https://images.unsplash.com/photo-1544009520-e2ea9189f15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      ],
      title: "Un très bel endroit.",
      country: "Norway",
    },
    {
      id: 3,
      date: new Date(),
      position: [48.556614, 2.6522219],
      pictures: [
        "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      country: "Norway",
    },
    {
      id: 4,
      date: new Date(),
      position: [48.596614, 2.6522219],
      pictures: [
        "https://images.unsplash.com/photo-1517904518766-16c4f3ab0293?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      id: 5,
      date: new Date(),
      position: [48.556614, 3.5522219],
      pictures: [
        "https://images.unsplash.com/photo-1542047078441-229be3aa1f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      ],
      country: "Norway",
    },
    {
      id: 6,
      date: new Date(),
      position: [48.856614, 2.3522219],
      pictures: [
        "https://images.unsplash.com/photo-1500207432837-973f6b39fcdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5vcndheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ],
      title: "Un très bel endroit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem.",
      country: "Norway",
    },
    {
      id: 7,
      date: new Date(),
      position: [48.556614, 2.3832219],
      pictures: [
        "https://images.unsplash.com/photo-1593291736356-f2a88429d126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      title: "Un très bel endroit.",
      country: "Norway",
    },
    {
      id: 8,
      date: new Date(),
      position: [48.556614, 2.6522219],
      pictures: [
        "https://images.unsplash.com/photo-1514038047819-af3435565412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        "https://images.unsplash.com/photo-1542321994-0df81c449c17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5vcndheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
      country: "Norway",
    },
    {
      id: 9,
      date: new Date(),
      position: [48.596614, 2.6522219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
    },
    {
      id: 10,
      date: new Date(),
      position: [48.556614, 3.5522219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
      country: "Norway",
    },
  ];

  const [stepIdSelected, setStepIdSelected] = useState(null);

  const onStepClick = (stepId) => {
    setStepIdSelected(stepId);
  };

  return (
    <div className="App">
      <div className="main-layout">
        <SidePanel steps={steps} stepIdSelected={stepIdSelected} />
        <MapContainer
          center={[48.856614, 2.3522219]}
          zoom={12}
          scrollWheelZoom={true}
          className="main-map"
          zoomControl={false}
        >
          <ZoomControl position="topright" zoomInText="+" zoomOutText="-" />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={
              "https://wxs.ign.fr/ortho/geoportail/wmts?" +
              "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0" +
              "&STYLE=normal" +
              "&TILEMATRIXSET=PM" +
              "&FORMAT=image/jpeg" +
              "&LAYER=ORTHOIMAGERY.ORTHOPHOTOS" +
              "&TILEMATRIX={z}" +
              "&TILEROW={y}" +
              "&TILECOL={x}"
            }
          />
          {steps.map((step) => (
            <Step key={step.id} step={step} onStepClick={onStepClick} />
          ))}
          <Polyline
            positions={steps.map((step) => step.position)}
            pathOptions={{ color: "#ffffff", dashArray: "7" }}
            weight="3"
          ></Polyline>
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
