import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//start from the below line!!!

export class AppComponent {
  
  public input: any;
  range:number = 0;
  title = 'Telemetry Recruit Training';
  weather:number = 50;
  speed:number = 0;
  battery:number = 0;
  toggle:boolean = false;


  onMouseWeather(event: MouseEvent) {
    this.weather = parseInt((event.target as HTMLInputElement).value);
  }

  onKeySpeed(event: KeyboardEvent) {
    this.speed = parseInt((event.target as HTMLInputElement).value);
    
    

  }

  onKeyBattery(event: KeyboardEvent) {
    this.battery = parseInt((event.target as HTMLInputElement).value);
  }

  calculateRange() {
    //u typed the below two lines!!!
    this.toggle = true;
    this.range = -1*((this.speed * this.speed * this.battery) / 2500) + (4 * this.battery) + this.weather
  }
}
