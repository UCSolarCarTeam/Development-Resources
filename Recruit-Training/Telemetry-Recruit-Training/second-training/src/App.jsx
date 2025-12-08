import "./App.css";
import { telemetryData } from "./Data.jsx"

function App() {
  
    const getColor = (status) => {
      if (status === "GOOD") return "green";
      if (status === "WARNING") return { color: "orange" };
      if (status === "ERROR") return { color: "red" };
    }
  
  return (
    <div className="telemetry-dashboard">
      <h1>Solar Car Telemetry Dashboard</h1>
      {telemetryData.map((card) => (
        <div key={card.id} className="telemetry-card">
          <h3>{card.name}</h3>
          {card.metrics.map((cardValue, i) => (
            <div key={i} className="data-row">
              <span className="label">{cardValue.label}: </span>
              <span className="value">{cardValue.value} </span>
              <span id={getColor(cardValue.status.toUpperCase())} className="status">{cardValue.status.toUpperCase()} </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
