import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  public input: any;
  title = 'Telemetry Recruit Training';
  weather = 50;
  speed = 0;
  battery = 0;
  range = 0;
  validate: FormGroup;
  buttonclick = false;

  constructor (
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.validate = this.fb.group ({
      speedIn: ['', [Validators.required, Validators.min(0), Validators.max(90)]],
      batteryIn: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  get validateControl() {
    return this.validate.controls;
  }


  onMouseWeather(event: MouseEvent) {
    this.buttonclick = false;
    this.weather = parseInt((event.target as HTMLInputElement).value);
  }

  onKeySpeed(event: KeyboardEvent) {
    this.buttonclick = false;
    this.speed = parseInt((event.target as HTMLInputElement).value);
  }

  onKeyBattery(event: KeyboardEvent) {
    this.buttonclick = false;
    this.battery = parseInt((event.target as HTMLInputElement).value);
  }

  calculateRange() {
    this.buttonclick = true;
    this.range = -(this.speed * this.speed * this.battery / 2500) + (4 * this.battery) + this.weather;

  }
}
