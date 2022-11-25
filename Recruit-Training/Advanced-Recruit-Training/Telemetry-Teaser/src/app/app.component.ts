import { Component} from '@angular/core';


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
  clicked = false;
  carRange = 0;

  onMouseWeather(event: MouseEvent) {
    this.weather = parseInt((event.target as HTMLInputElement).value);
    this.clicked = false;
  }

  onKeySpeed(event: KeyboardEvent) {
    this.speed = parseInt((event.target as HTMLInputElement).value);
    this.clicked = false;
  }

  onKeyBattery(event: KeyboardEvent) {
    this.battery = parseInt((event.target as HTMLInputElement).value);
    this.clicked = false;
  }

  calculateRange() {
    this.clicked = true;
    this.carRange = -((this.speed)^2 * this.battery / 2500) + 4 * this.battery + this.weather;
    //console.log("Weather: " + this.weather + "\nSpeed: " + this.speed + "\nBattery: " + this.battery + "\nRange: " + this.carRange);
  }
}
