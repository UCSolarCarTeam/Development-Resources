export interface State {
  speedInput: string ;
  batteryInput: string;
  weatherInput: number;
  calculatedRange: {message: string; colour: string};
  isClicked: boolean;
}

export interface Action {
  type: "SET_SPEED_INPUT" | "SET_BATTERY_INPUT" | "SET_WEATHER_INPUT" | "SET_CALCULATED_RANGE" | "SET_IS_CLICKED";
  payload: any;
}
