export type inputState = {
  batteryInput: string;
  speedInput: string;
  weatherInput: string;
};

export type Action = {
  type: "batteryInput" | "speedInput" | "weatherInput";
  payload: string;
};
