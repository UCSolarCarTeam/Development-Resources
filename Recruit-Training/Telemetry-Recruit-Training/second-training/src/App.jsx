import "./App.css";
import { telemetryData } from "./Data.jsx"

function App() {
  return (
    <div className="telemetry-dashboard">
      <h1>Solar Car Telemetry Dashboard</h1>
      {telemetryData.map((card, i) => (
        <div key={card.id} className="telemetry-card">
          <h3>{card.name}</h3>
          {card.metrics.map((cardValue, j) => (
            <div key={j} className="data-row">
              <span className="label">{cardValue.label}: </span>
              <span className="value">{cardValue.value} </span>
              <span className="status">{cardValue.status} </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
