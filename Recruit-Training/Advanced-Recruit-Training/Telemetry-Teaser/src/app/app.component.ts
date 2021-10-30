import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  public input: any;
  title = 'Telemetry Recruit Training';
  weather = 50;
  speed = 0;
  battery = 0;
  range = 0;
  speedInput = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(90)]);
  batteryInput = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]);
  outputMessage = ""
  buttonPress = false;

  onMouseWeather(event: MouseEvent) {
    this.weather = parseInt((event.target as HTMLInputElement).value);
    this.buttonPress = false;
  }

  onKeySpeed(event: KeyboardEvent) {
    this.speed = parseInt((event.target as HTMLInputElement).value);
    this.buttonPress = false;
  }

  onKeyBattery(event: KeyboardEvent) {
    this.battery = parseInt((event.target as HTMLInputElement).value);
    this.buttonPress = false;
  }

  calculateRange() {
    this.buttonPress = true;
    this.range = -(this.speed * this.speed * this.battery / 2500) + (4 * this.battery) + this.weather;
    this.outputMessage = "The predicted range of the Elysia is " + this.range + "km.";
}
};
