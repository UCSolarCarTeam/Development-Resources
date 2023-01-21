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
  speed = undefined;
  battery = undefined;
  speedInput = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(90)]);
  batteryInput = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]);
  
  buttonPressed = false;
  
  
  onMouseWeather(event: MouseEvent) {
    this.weather = parseInt((event.target as HTMLInputElement).value);
  }

  onKeySpeed(event: KeyboardEvent) {
    this.speed = parseInt((event.target as HTMLInputElement).value);
    this.buttonPressed=false;
  }

  onKeyBattery(event: KeyboardEvent) {
    this.battery = parseInt((event.target as HTMLInputElement).value);
    this.buttonPressed = false;
  }

  calculateRange() {
    let s = this.speed;
    let b = this.battery;
    let w = this.weather;
    this.buttonPressed = true;
    if (s > 0 && s < 90 && b > 0 && b < 100) {
      let range = -(s * s * b / 2500) + (4 * b) + w
      document.getElementById("rangeID").innerHTML = "The predicted range of the Elysia is:" + range + "km";
    }
    else {
      document.getElementById("rangeID").innerHTML = "";
    }
  }
}
