import "./App.css";

/**
 * Telemetry data for the solar car dashboard.
 * Each entry represents one telemetry module (battery, motor, solar array).
 */
const telemetryData = [
  {
    id: "battery-pack",
    type: "battery",
    name: "Battery Pack",
    metrics: [
      { label: "Voltage", value: "48.2V", status: "GOOD" },
      { label: "Current", value: "12.4A", status: "GOOD" },
      { label: "Temperature", value: "32°C", status: "WARNING" },
      { label: "State of Charge", value: "87%", status: "GOOD" },
    ],
  },
  {
    id: "motor-controller",
    type: "motor",
    name: "Motor Controller",
    metrics: [
      { label: "RPM", value: "2847", status: "ERROR" },
      { label: "Power", value: "1.2kW", status: "GOOD" },
      { label: "Temperature", value: "45°C", status: "WARNING" },
      { label: "Efficiency", value: "94%", status: "GOOD" },
    ],
  },
  {
    id: "solar-array",
    type: "solar",
    name: "Solar Array Section",
    metrics: [
      { label: "Voltage", value: "51.8V", status: "GOOD" },
      { label: "Current", value: "8.3A", status: "GOOD" },
      { label: "Power Output", value: "430W", status: "GOOD" },
      { label: "Irradiance", value: "867 W/m²", status: "ERROR" },
    ],
  },
];

/**
 * TelemetryCard Component
 * Renders a single telemetry module (battery, motor, solar) using props.
 */
function TelemetryCard({ name, type, metrics }) {
  return (
    <div className="telemetry-card">
      <h2>{name}</h2>
      <p className="telemetry-type">{type.toUpperCase()}</p>

      {metrics.map((metric) => (
        <div className="data-row" key={metric.label}>
          <span className="label">{metric.label}:</span>
          <span className="value">{metric.value}</span>
          <span className={`status status-${metric.status.toLowerCase()}`}>
            {metric.status}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * App Component
 * Main dashboard that maps over telemetryData and renders TelemetryCard components.
 */
function App() {
  return (
    <div className="telemetry-dashboard">
      <h1>Solar Car Telemetry Dashboard</h1>
      <div className="telemetry-grid">
        {telemetryData.map((item) => (
          <TelemetryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
