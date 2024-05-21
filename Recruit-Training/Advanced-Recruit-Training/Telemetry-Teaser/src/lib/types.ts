export type inputState = {
  batteryInput: number;
  speedInput: number;
  weatherInput: number;
};

export type Action = {
  type: "batteryInput" | "speedInput" | "weatherInput";
  payload: number;
};
