import {
  Map,
  Brain,
  Route,
  BarChart3,
  Zap,
  Ambulance,
  Code2,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Live Traffic Map",
    text: "Visualize traffic conditions across the simulated road network.",
  },
  {
    icon: Brain,
    title: "AI Prediction",
    text: "Identify zones that may become highly congested.",
  },
  {
    icon: Route,
    title: "Traffic Redistribution",
    text: "Recommend movement toward under-used corridors.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    text: "Analyze congestion and traffic volume trends.",
  },
  {
    icon: Zap,
    title: "Simulation",
    text: "Compare simulated traffic before and after optimization.",
  },
  {
    icon: Ambulance,
    title: "Emergency Corridor",
    text: "Demonstrate a simulated ambulance priority route.",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "React Router",
  "Leaflet",
  "OpenStreetMap",
  "Recharts",
  "Axios",
  "React Icons",
];

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">
        <div className="hero-badge">
          SMART CITY • HACKATHON PROTOTYPE
        </div>

        <h1>
          TrafficFlow <span>AI</span>
        </h1>

        <p>
          Intelligent traffic management through simulation,
          prediction and smart traffic redistribution.
        </p>
      </section>


      {/* FEATURES */}

      <section className="about-section">

        <div className="section-heading">
          <h2>Key Features</h2>
          <p>
            A complete frontend prototype for intelligent
            traffic management.
          </p>
        </div>

        <div className="feature-grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                className="feature-card"
                key={index}
              >
                <div className="feature-icon">
                  <Icon size={24} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>
            );
          })}

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section className="about-section technology-section">

        <div className="section-heading">
          <div className="heading-icon">
            <Code2 size={20} />
          </div>

          <div>
            <h2>Technology Stack</h2>

            <p>
              Technologies used to build the prototype.
            </p>
          </div>
        </div>


        <div className="technology-list">

          {technologies.map((tech, index) => (
            <span key={index}>
              {tech}
            </span>
          ))}

        </div>

      </section>


      {/* PROJECT TEAM */}

      <section className="team-card">

        <div className="team-icon">
          <Users size={22} />
        </div>

        <div>
          <h2>Project Team</h2>

          <p>
            TrafficFlow AI is a collaborative smart-city
            solution combining traffic data, AI prediction,
            optimization, simulation and a React-based
            dashboard.
          </p>
        </div>

      </section>


      {/* DISCLAIMER */}

      <section className="disclaimer-card">

        <h2>Demo Disclaimer</h2>

        <p>
          The traffic values, routes and emergency corridor
          shown in this prototype are simulated demonstration
          data. The prototype does not control real-world
          traffic signals or guarantee real ambulance arrival
          times.
        </p>

      </section>

    </div>
  );
}