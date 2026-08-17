import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


/* =====================================================
   TRAFFIC COLOR
===================================================== */

function getColor(load) {
  if (load >= 90) return "#ff4055";
  if (load >= 75) return "#ff8a00";
  if (load >= 50) return "#ffd43b";
  return "#20e58a";
}


/* =====================================================
   TRAFFIC MAP
===================================================== */

export default function TrafficMap({ junctions = [] }) {

  /*
    Your existing data uses:
    junction.lat
    junction.lng
    junction.load
    junction.name
  */

  return (
    <div className="traffic-map-container">

      {/* MAP */}

      <MapContainer
        center={[21.1458, 79.0882]}
        zoom={12}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >

        {/* OpenStreetMap */}

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* =================================================
            TRAFFIC JUNCTIONS
        ================================================= */}

        {junctions.map((junction) => (

          <CircleMarker
            key={junction.id}
            center={[
              junction.lat,
              junction.lng
            ]}
            radius={12}
            pathOptions={{
              color: getColor(junction.load),
              fillColor: getColor(junction.load),
              fillOpacity: 0.85,
              weight: 3,
            }}
          >

            <Popup>

              <div className="traffic-popup">

                <h3>
                  🚦 {junction.name}
                </h3>

                <div className="popup-row">
                  <span>Traffic Load</span>
                  <strong>
                    {junction.load}%
                  </strong>
                </div>

                <div className="popup-row">
                  <span>Status</span>

                  <strong
                    style={{
                      color: getColor(junction.load),
                    }}
                  >
                    {
                      junction.load >= 90
                        ? "Critical"
                        : junction.load >= 75
                        ? "Heavy"
                        : junction.load >= 50
                        ? "Moderate"
                        : "Low"
                    }
                  </strong>
                </div>

              </div>

            </Popup>

          </CircleMarker>

        ))}

      </MapContainer>


      {/* =================================================
          LIVE BADGE
      ================================================= */}

      <div className="map-live-badge">
        <span></span>
        LIVE SIMULATION
      </div>


      {/* =================================================
          LEGEND
      ================================================= */}

      <div className="traffic-map-legend">

        <div className="legend-title">
          TRAFFIC LEVEL
        </div>

        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: "#20e58a" }}
          />
          Low
        </div>

        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: "#ffd43b" }}
          />
          Moderate
        </div>

        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: "#ff8a00" }}
          />
          High
        </div>

        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: "#ff4055" }}
          />
          Critical
        </div>

      </div>

    </div>
  );
}