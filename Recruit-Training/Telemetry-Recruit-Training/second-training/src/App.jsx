/**  
ERRORS IN ORIGINAL FILE: 

1. Massive code duplication - The same JSX structure is repeated 7 times for different components
2. Hardcoded data - All telemetry values are hardcoded instead of being in a data structure
3. No reusable components - Everything is in one giant component
4. Poor maintainability - Adding a new telemetry component would require copying and pasting more code

CHANGES MADE: 

1. Created telemetryData is an array with all the objects that have an id
2. Created TelemteryCard maps over the array of data and renders it using props
3. Implemented data mapping to create telemetry cards
 */

import "./App.css";

/**
 * Contains all the data with id, name, type and values 
 */

const telemetryData =[
    {
       id:"battery-pack" ,
       name: "Battery Pack",
       data: [
        {label:"Voltage: ", value : "48.2V", status :"GOOD"},
        {label: "Current: ", value: "12.4A", status :"GOOD"},
        {label: "Temperature: ", value: "32°C", status :"WARNING"},
        {label: "State of Charge:", value: "87%", status : "GOOD"},
       ],
    },

     {
       id: "motor-controller" ,
       name: "Motor Contoller",
       data: [
        {label:"RPM: ", value : "2847", status : "ERROR"},
        {label: "Power: ", value : "1.2kW", status : "GOOD"},
        {label: "Temperature: ", value : "45°C", status : "WARNING"},
        {label: "Effeciency:", value : "94%", status : "GOOD"},
       ],
    },

     {
       id: "solar-array" ,
       name: "Solar Array Section",
       data: [
        {label:"Voltage: ", value : "51.8V", status : "GOOD"},
        {label: "Current: ", value: "8.3A", status : "GOOD"},
        {label: "Power: ", value : "430W", status : "GOOD"},
        {label: "Irradiance:", value : "67 W/m²", status : "ERROR"},
       ],
    },
];

/**
 * Maps over the array of data and renders using props
 */

function TelemetryCard ({name, data }){
  return (
    <div className="telemetry-card">
      <h2>{name}</h2>

      {data.map((data) => (
        <div className="data-row" key={data.label}>
          <span className="label">{data.label}</span>
          <span className="value">{data.value}</span>
          <span className="status">{data.status}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * App component
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