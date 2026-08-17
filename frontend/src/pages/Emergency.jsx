import { useState } from "react";

import {
  FaAmbulance,
  FaHospital,
  FaRoute,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt
} from "react-icons/fa";

import TrafficMap from "../components/TrafficMap";

import {
  junctions,
  ambulanceRoute
} from "../data/demoData";


export default function Emergency() {

  const [active, setActive] = useState(false);


  const activateAmbulance = () => {

    setActive(false);

    setTimeout(() => {

      setActive(true);

    }, 700);

  };


  return (

    <div className="page">


      {/* HEADER */}

      <div className="page-header">

        <div>

          <h1>
            Emergency Management
          </h1>

          <p>
            Simulated ambulance priority
            corridor management
          </p>

        </div>


        <button
          className="emergency-btn"
          onClick={activateAmbulance}
        >

          <FaAmbulance />

          Activate Ambulance

        </button>

      </div>



      {/* EMERGENCY CARDS */}

      <div className="emergency-grid">


        {/* HOSPITAL */}

        <div className="card">

          <FaHospital className="large-icon" />

          <h2>
            CITY HOSPITAL
          </h2>

          <p>
            Emergency destination
          </p>

          <span className="status-green">
            ● Available
          </span>

        </div>



        {/* AMBULANCE */}

        <div className="card">

          <FaAmbulance className="large-icon" />

          <h2>
            AMB-001
          </h2>

          <p>
            Emergency ambulance
          </p>

          <span
            className={
              active
                ? "status-blue"
                : "status-gray"
            }
          >

            ●{" "}

            {active
              ? "Priority Active"
              : "Standby"
            }

          </span>

        </div>



        {/* ROUTE */}

        <div className="card">

          <FaRoute className="large-icon" />

          <h2>
            PRIORITY CORRIDOR
          </h2>

          <p>
            Optimized route through
            lower-congestion roads
          </p>

          <span
            className={
              active
                ? "status-blue"
                : "status-gray"
            }
          >

            ●{" "}

            {active
              ? "Active"
              : "Ready"
            }

          </span>

        </div>

      </div>



      {/* ROUTE DETAILS */}

      <div className="emergency-details">


        <div className="card">

          <h2>
            EMERGENCY STATUS
          </h2>


          <div className="emergency-status-row">

            <div>

              <FaMapMarkerAlt />

              <span>
                Current Location
              </span>

            </div>

            <strong>
              Junction 1
            </strong>

          </div>


          <div className="emergency-status-row">

            <div>

              <FaHospital />

              <span>
                Destination
              </span>

            </div>

            <strong>
              City Hospital
            </strong>

          </div>


          <div className="emergency-status-row">

            <div>

              <FaClock />

              <span>
                Estimated Demo Time
              </span>

            </div>

            <strong>
              8 min
            </strong>

          </div>

        </div>



        <div className="card">

          <h2>
            PRIORITY ROUTE
          </h2>

          <p>
            The simulated route connects the
            ambulance to the hospital through
            the selected priority corridor.
          </p>

          <div className="route-info">

            <span>
              Junction 1
            </span>

            <span>→</span>

            <span>
              Junction 2
            </span>

            <span>→</span>

            <span>
              Junction 4
            </span>

            <span>→</span>

            <span>
              Hospital
            </span>

          </div>

        </div>

      </div>



      {/* MAP */}

      <div className="card emergency-map">

        <div className="section-title">

          <h2>
            AMBULANCE PRIORITY CORRIDOR
          </h2>


          {active && (

            <span className="live">

              ● PRIORITY CORRIDOR ACTIVE

            </span>

          )}

        </div>


        <TrafficMap

          junctions={junctions}

          route={
            active
              ? ambulanceRoute
              : []
          }

        />

      </div>



      {/* SUCCESS MESSAGE */}

      {active && (

        <div className="success-message">

          <FaCheckCircle />

          {" "}

          Ambulance priority corridor
          activated successfully.

          <br />

          The blue route on the map represents
          the simulated emergency corridor.

        </div>

      )}


    </div>

  );

}