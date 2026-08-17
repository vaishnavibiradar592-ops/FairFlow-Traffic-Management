import { useState } from "react";
import {
  Play,
  Zap,
  ArrowRight,
  TrendingDown,
  Clock,
  Car,
} from "lucide-react";

export default function Simulation() {
  const [peakWindow, setPeakWindow] = useState("9 AM - 12 Noon");
  const [trafficCondition, setTrafficCondition] = useState("Normal Peak");
  const [isRunning, setIsRunning] = useState(false);

  const [result, setResult] = useState({
    beforeCongestion: 82,
    afterCongestion: 61,
    beforeTime: 34,
    afterTime: 27,
  });

  const runSimulation = () => {
    setIsRunning(true);

    setTimeout(() => {
      setResult({
        beforeCongestion: 82,
        afterCongestion: 61,
        beforeTime: 34,
        afterTime: 27,
      });

      setIsRunning(false);
    }, 1200);
  };

  const congestionImprovement =
    result.beforeCongestion - result.afterCongestion;

  const travelImprovement =
    result.beforeTime - result.afterTime;

  return (
    <div className="simulation-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="simulation-header">

        <div>
          <h1>Traffic Simulation</h1>

          <p>
            Simulate traffic redistribution during peak hours
          </p>
        </div>

        <button
          className="run-simulation-btn"
          onClick={runSimulation}
          disabled={isRunning}
        >
          <Play size={16} fill="currentColor" />

          {isRunning
            ? "Running..."
            : "Run Simulation"}
        </button>

      </div>


      {/* =================================================
          TOP CARDS
      ================================================= */}

      <div className="simulation-top-grid">

        {/* PARAMETERS */}

        <div className="simulation-parameter-card">

          <h3>
            SIMULATION PARAMETERS
          </h3>

          <div className="parameter-row">

            <div className="parameter-item">

              <label>
                Select Peak Window
              </label>

              <select
                value={peakWindow}
                onChange={(e) =>
                  setPeakWindow(e.target.value)
                }
              >
                <option>
                  9 AM - 12 Noon
                </option>

                <option>
                  4 PM - 7 PM
                </option>
              </select>

            </div>


            <div className="parameter-item">

              <label>
                Traffic Condition
              </label>

              <select
                value={trafficCondition}
                onChange={(e) =>
                  setTrafficCondition(e.target.value)
                }
              >
                <option>
                  Normal Peak
                </option>

                <option>
                  Heavy Peak
                </option>

                <option>
                  Extreme Peak
                </option>
              </select>

            </div>

          </div>

        </div>


        {/* OPTIMIZATION */}

        <div className="optimization-card">

          <h3>
            OPTIMIZATION STRATEGY
          </h3>

          <p>
            TrafficFlow AI identifies overloaded zones
            and redirects traffic toward under-used
            corridors.
          </p>

          <div className="optimization-badge">

            <Zap size={15} />

            Smart Traffic Redistribution

          </div>

        </div>

      </div>


      {/* =================================================
          BEFORE OPTIMIZATION
      ================================================= */}

      <div className="before-optimization">

        <h3>
          BEFORE OPTIMIZATION
        </h3>

        <p>
          Current traffic conditions before AI-based
          redistribution.
        </p>

      </div>


      {/* =================================================
          BEFORE → AFTER
      ================================================= */}

      <div className="optimization-results">

        {/* BEFORE */}

        <div className="optimization-result before">

          <h3>
            CURRENT CONDITION
          </h3>


          <div className="metric">

            <span>
              CONGESTION
            </span>

            <strong>
              {result.beforeCongestion}%
            </strong>

          </div>


          <div className="metric">

            <span>
              AVERAGE TRAVEL TIME
            </span>

            <strong>
              {result.beforeTime} min
            </strong>

          </div>

        </div>


        {/* ARROW */}

        <div className="optimization-arrow-box">

          <div className="arrow">
            <ArrowRight size={25} />
          </div>

          <span>
            AI OPTIMIZATION
          </span>

        </div>


        {/* AFTER */}

        <div className="optimization-result after">

          <h3>
            OPTIMIZED CONDITION
          </h3>


          <div className="metric">

            <span>
              CONGESTION
            </span>

            <strong>
              {result.afterCongestion}%
            </strong>

          </div>


          <div className="metric">

            <span>
              AVERAGE TRAVEL TIME
            </span>

            <strong>
              {result.afterTime} min
            </strong>

          </div>

        </div>

      </div>


      {/* =================================================
          IMPROVEMENT CARDS
      ================================================= */}

      <div className="simulation-improvements">

        <div className="improvement-card">

          <div className="improvement-icon">
            <TrendingDown size={20} />
          </div>

          <div>
            <span>
              CONGESTION REDUCTION
            </span>

            <strong>
              {congestionImprovement}%
            </strong>
          </div>

        </div>


        <div className="improvement-card">

          <div className="improvement-icon">
            <Clock size={20} />
          </div>

          <div>
            <span>
              TRAVEL TIME SAVED
            </span>

            <strong>
              {travelImprovement} min
            </strong>
          </div>

        </div>


        <div className="improvement-card">

          <div className="improvement-icon">
            <Car size={20} />
          </div>

          <div>
            <span>
              TRAFFIC REDISTRIBUTED
            </span>

            <strong>
              18%
            </strong>
          </div>

        </div>

      </div>


      {/* =================================================
          AI RECOMMENDATION
      ================================================= */}

      <div className="simulation-recommendation">

        <div className="recommendation-icon">
          <Zap size={22} />
        </div>

        <div>

          <h3>
            AI Recommendation
          </h3>

          <p>
            Redirect approximately 18% of traffic from
            overloaded corridors toward Authority A and
            Authority B during the selected peak window.
          </p>

        </div>

      </div>

    </div>
  );
}