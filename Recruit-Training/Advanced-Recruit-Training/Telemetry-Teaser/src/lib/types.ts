export type inputState = {
  batteryInput: number | undefined;
  speedInput: number | undefined;
  weatherInput: number;
};

export type Action = {
  type: "batteryInput" | "speedInput" | "weatherInput";
  payload: number | undefined;
};
