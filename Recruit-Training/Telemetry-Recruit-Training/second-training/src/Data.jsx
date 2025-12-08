export const telemetryData = [
  {
    id: "battery-pack-1",
    type: "battery",
    name: "Battery Pack",
    metrics: [
      { label: "Voltage", value: "48.2V", status: "good" },
      { label: "Current", value: "12.4A", status: "good" },
      { label: "Temperature", value: "32°C", status: "warning" },
      { label: "State of Charge", value: "87%", status: "good" },
    ],
  },
  {
    id: "motor-controller-1",
    type: "motor",
    name: "Motor Controller",
    metrics: [
      { label: "RPM", value: "2847", status: "error" },
      { label: "Power", value: "1.2kW", status: "good" },
      { label: "Temperature", value: "45°C", status: "warning" },
      { label: "Efficiency", value: "94%", status: "good" },
    ],
  },
  {
    id: "solar-array-1",
    type: "solar",
    name: "Solar Array Section",
    metrics: [
      { label: "Voltage", value: "51.8V", status: "good" },
      { label: "Current", value: "8.3A", status: "good" },
      { label: "Power Output", value: "430W", status: "good" },
      { label: "Irradiance", value: "867 W/m²", status: "error" },
    ],
  },
];