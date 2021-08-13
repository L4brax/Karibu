import "./index.scss";
import { Step } from "./components/Map/Step";
import { SidePanel } from "./layout/SidePanel";

import { MapContainer, TileLayer, Polyline, ZoomControl } from "react-leaflet";

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
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      date: new Date(),
      position: [48.556614, 2.3832219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
      title: "Un très bel endroit.",
    },
    {
      id: 3,
      date: new Date(),
      position: [48.556614, 2.6522219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
    },
    {
      id: 4,
      date: new Date(),
      position: [48.596614, 2.6522219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
    },
    {
      id: 5,
      date: new Date(),
      position: [48.556614, 3.5522219],
      pictures: [
        "https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg",
      ],
    },
  ];

  return (
    <div className="App">
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
          <Step key={step.id} step={step} />
        ))}
        <Polyline
          positions={steps.map((step) => step.position)}
          pathOptions={{ color: "#ffffff", dashArray: "7" }}
          weight="3"
        ></Polyline>
      </MapContainer>

      <SidePanel steps={steps} />
    </div>
  );
};

export default App;
