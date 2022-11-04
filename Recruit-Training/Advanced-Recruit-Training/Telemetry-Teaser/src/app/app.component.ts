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
  speedInput = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(90) ]);
  batteryInput = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100) ]);
  range = 0;
  buttonPressed = false;

  onMouseWeather(event: MouseEvent) {
    this.weather = parseInt((event.target as HTMLInputElement).value);
  }

  onKeySpeed(event: KeyboardEvent) {
    this.speed = parseInt((event.target as HTMLInputElement).value);
    this.buttonPressed = false;
  }

  onKeyBattery(event: KeyboardEvent) {
    this.battery = parseInt((event.target as HTMLInputElement).value);
    this.buttonPressed = false;
  }

  calculateRange() {
    const s = this.speed;
    const b = this.battery;
    const w = this.weather;
    this.buttonPressed = true;

    let range_ = - (s * s * b / 2500) + (4 * b) + w;

    if ((typeof s !== 'number' || typeof b !== 'number')||
      (this.speed < 0 || this.speed > 90)||
      (this.battery < 0 || this.battery > 100)) {
    }
    else
      document.getElementById("rangeDisplay").innerHTML = `The predicted range of
        the Eylsia is ` + range_ + ` km.`;
  }
}
