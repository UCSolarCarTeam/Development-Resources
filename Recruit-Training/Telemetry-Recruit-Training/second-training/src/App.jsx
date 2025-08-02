import "./App.css";

function App() {
  return (
    <>
      <div className="telemetry-dashboard">
        <h1>Solar Car Telemetry Dashboard</h1>

        <div className="telemetry-card">
          <h2>Battery Pack</h2>
          <div className="data-row">
            <span className="label">Voltage:</span>
            <span className="value">48.2V</span>
            <span className="status">GOOD</span>
          </div>
          <div className="data-row">
            <span className="label">Current:</span>
            <span className="value">12.4A</span>
            <span className="status">GOOD</span>
          </div>
          <div className="data-row">
            <span className="label">Temperature:</span>
            <span className="value">32°C</span>
            <span className="status">WARNING</span>
          </div>
          <div className="data-row">
            <span className="label">State of Charge:</span>
            <span className="value">87%</span>
            <span className="status">GOOD</span>
          </div>
        </div>

        <div className="telemetry-card">
          <h2>Motor Controller</h2>
          <div className="data-row">
            <span className="label">RPM:</span>
            <span className="value">2847</span>
            <span className="status">ERROR</span>
          </div>
          <div className="data-row">
            <span className="label">Power:</span>
            <span className="value">1.2kW</span>
            <span className="status">GOOD</span>
          </div>
          <div className="data-row">
            <span className="label">Temperature:</span>
            <span className="value">45°C</span>
            <span className="status">WARNING</span>
          </div>
          <div className="data-row">
            <span className="label">Efficiency:</span>
            <span className="value">94%</span>
            <span className="status">GOOD</span>
          </div>
        </div>

        <div className="telemetry-card">
          <h2>Solar Array Section</h2>
          <div className="data-row">
            <span className="label">Voltage:</span>
            <span className="value">51.8V</span>
            <span className="status">GOOD</span>
          </div>
          <div className="data-row">
            <span className="label">Current:</span>
            <span className="value">8.3A</span>
            <span className="status">GOOD</span>
          </div>
          <div className="data-row">
            <span className="label">Power Output:</span>
            <span className="value">430W</span>
            <span className="status">GOOD</span>
          </div>
          <div className="data-row">
            <span className="label">Irradiance:</span>
            <span className="value">867 W/m²</span>
            <span className="status">ERROR</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
