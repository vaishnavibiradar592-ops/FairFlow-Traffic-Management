import {
  FaTachometerAlt,
  FaCar,
  FaExclamationTriangle,
  FaClock,
  FaChartLine,
  FaLightbulb
} from "react-icons/fa";

import TrafficMap from "../components/TrafficMap";

import {
  junctions,
  authorities
} from "../data/demoData";


export default function Dashboard() {

  return (
    <div className="page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>

          <h1>
            Traffic Dashboard
          </h1>

          <p>
            Smart traffic monitoring and
            congestion management
          </p>

        </div>


        <div className="peak-selector">

          <span>
            PEAK WINDOW
          </span>

          <button className="active-window">
            9 AM - 12 Noon
          </button>

          <button>
            4 PM - 7 PM
          </button>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="stats-grid">


        {/* SPEED */}

        <div className="stat-card">

          <div className="stat-icon">
            <FaTachometerAlt />
          </div>

          <div>

            <p>
              Average Speed
            </p>

            <h2>
              26 km/h
            </h2>

            <span className="warning-text">
              ↓ 18% from normal
            </span>

          </div>

        </div>


        {/* VOLUME */}

        <div className="stat-card">

          <div className="stat-icon">
            <FaCar />
          </div>

          <div>

            <p>
              Traffic Volume
            </p>

            <h2>
              12,450
            </h2>

            <span>
              vehicles / hour
            </span>

          </div>

        </div>


        {/* CONGESTION */}

        <div className="stat-card">

          <div className="stat-icon">
            <FaExclamationTriangle />
          </div>

          <div>

            <p>
              Congestion
            </p>

            <h2>
              82%
            </h2>

            <span className="danger-text">
              High congestion
            </span>

          </div>

        </div>


        {/* TRAVEL TIME */}

        <div className="stat-card">

          <div className="stat-icon">
            <FaClock />
          </div>

          <div>

            <p>
              Avg Travel Time
            </p>

            <h2>
              31 min
            </h2>

            <span>
              +12% delay
            </span>

          </div>

        </div>

      </div>


      {/* ================= MAIN AREA ================= */}

      <div className="dashboard-grid">


        {/* TRAFFIC MAP */}

        <div className="card map-card">

          <div className="section-title">

            <div>

              <h2>
                LIVE TRAFFIC MAP
              </h2>

              <p>
                Simulated city traffic conditions
              </p>

            </div>


            <span className="live">
              ● LIVE SIMULATION
            </span>

          </div>


          <TrafficMap
            junctions={junctions}
          />

        </div>



        {/* AUTHORITY LOAD */}

        <div className="card authority-card">

          <div className="section-title">

            <h2>
              AUTHORITY LOAD
            </h2>

            <FaChartLine />

          </div>


          <p className="card-description">
            Traffic distribution across
            planning authorities
          </p>


          {authorities.map((authority) => (

            <div
              className="authority-row"
              key={authority.name}
            >

              <div className="authority-name">

                <span>
                  {authority.name}
                </span>

                <strong>
                  {authority.load}%
                </strong>

              </div>


              <div className="progress">

                <div
                  className="progress-fill"
                  style={{
                    width: `${authority.load}%`
                  }}
                />

              </div>

            </div>

          ))}


          <div className="authority-footer">

            <span>
              Highest load
            </span>

            <strong>
              Authority C
            </strong>

          </div>

        </div>

      </div>


      {/* ================= AI SECTION ================= */}

      <div className="ai-grid">


        {/* PREDICTION */}

        <div className="card ai-card">

          <div className="ai-title">

            <FaChartLine />

            <h2>
              AI CONGESTION PREDICTION
            </h2>

          </div>


          <div className="prediction">

            <div>

              <span>
                NEXT PEAK RISK
              </span>

              <strong>
                91%
              </strong>

            </div>


            <div>

              <span>
                EXPECTED TIME
              </span>

              <strong>
                5:00 PM
              </strong>

            </div>

          </div>


          <p>
            AI prediction indicates a high
            probability of congestion during
            the evening peak window.
          </p>

        </div>



        {/* RECOMMENDATION */}

        <div className="card recommendation-card">

          <div className="ai-title">

            <FaLightbulb />

            <h2>
              AI RECOMMENDATION
            </h2>

          </div>


          <p>
            Redirect approximately
            <strong> 15% </strong>
            of traffic from the overloaded
            corridor toward available
            alternate routes.
          </p>


          <button className="secondary-btn">

            View Optimization

          </button>

        </div>

      </div>


      {/* ================= BEFORE AFTER ================= */}

      <div className="card comparison-card">

        <div className="section-title">

          <div>

            <h2>
              SIMULATION IMPACT
            </h2>

            <p>
              Expected result after traffic
              redistribution
            </p>

          </div>

        </div>


        <div className="comparison-grid">


          <div className="comparison-box">

            <span>
              BEFORE
            </span>

            <strong>
              128%
            </strong>

            <small>
              Congestion
            </small>

            <strong>
              34 min
            </strong>

            <small>
              Average travel time
            </small>

          </div>


          <div className="comparison-arrow">
            →
          </div>


          <div className="comparison-box optimized">

            <span>
              AFTER
            </span>

            <strong>
              91%
            </strong>

            <small>
              Congestion
            </small>

            <strong>
              27 min
            </strong>

            <small>
              Average travel time
            </small>

          </div>

        </div>

      </div>


      {/* ================= FOOTER NOTE ================= */}

      <div className="demo-note">

        <FaLightbulb />

        <span>
          Demo values shown above are simulated
          prototype data for hackathon demonstration.
        </span>

      </div>

    </div>
  );
}