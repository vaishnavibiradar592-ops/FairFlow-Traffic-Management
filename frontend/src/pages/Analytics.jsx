import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import {
  congestionData,
  authorities
} from "../data/demoData";

export default function Analytics() {

  return (
    <div className="page">

      {/* HEADER */}
      <div className="page-header">

        <div>

          <h1>Traffic Analytics</h1>

          <p>
            Analyze congestion, traffic volume
            and authority-wise traffic load
          </p>

        </div>

      </div>


      {/* TOP SUMMARY */}
      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon">
            📈
          </div>

          <div>

            <p>Peak Congestion</p>

            <h2>94%</h2>

            <span>Highest recorded</span>

          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            🚗
          </div>

          <div>

            <p>Peak Volume</p>

            <h2>13,800</h2>

            <span>vehicles / hour</span>

          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ⏱️
          </div>

          <div>

            <p>Peak Period</p>

            <h2>5 PM</h2>

            <span>Evening peak</span>

          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ⚠️
          </div>

          <div>

            <p>Critical Zones</p>

            <h2>2</h2>

            <span>High congestion</span>

          </div>

        </div>

      </div>


      {/* CHARTS */}
      <div className="analytics-grid">


        {/* CONGESTION */}
        <div className="card chart-card">

          <h2>
            CONGESTION TREND
          </h2>

          <p>
            Traffic congestion during peak windows
          </p>


          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <LineChart
              data={congestionData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
              />

              <YAxis
                domain={[0, 100]}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="congestion"
                stroke="#00aaff"
                strokeWidth={3}
                dot={{
                  r: 5
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>


        {/* TRAFFIC VOLUME */}
        <div className="card chart-card">

          <h2>
            TRAFFIC VOLUME
          </h2>

          <p>
            Vehicles recorded per hour
          </p>


          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <BarChart
              data={congestionData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="volume"
                fill="#157a58"
                radius={[5, 5, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>


        {/* AUTHORITY LOAD */}
        <div className="card chart-card">

          <h2>
            AUTHORITY LOAD COMPARISON
          </h2>

          <p>
            Current traffic load across
            planning authorities
          </p>


          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <BarChart
              data={authorities}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="name"
              />

              <YAxis
                domain={[0, 100]}
              />

              <Tooltip />

              <Bar
                dataKey="load"
                fill="#ff8a00"
                radius={[5, 5, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>


        {/* INSIGHTS */}
        <div className="card insight-card">

          <h2>
            KEY INSIGHTS
          </h2>


          <div className="insight">

            <strong>
              94%
            </strong>

            <span>
              Highest congestion occurs
              during the evening peak.
            </span>

          </div>


          <div className="insight">

            <strong>
              13,800
            </strong>

            <span>
              Maximum simulated traffic
              volume per hour.
            </span>

          </div>


          <div className="insight">

            <strong>
              Authority C
            </strong>

            <span>
              Currently has the highest
              traffic load.
            </span>

          </div>


          <div className="insight">

            <strong>
              5 PM
            </strong>

            <span>
              Critical period identified
              for evening traffic.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}