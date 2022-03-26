import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { resetFakeAsyncZone } from '@angular/core/testing';
import { visitFunctionBody } from 'typescript';

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
  show = true;

  onMouseWeather(event: MouseEvent) {
    this.weather = parseInt((event.target as HTMLInputElement).value);
   
  }

  onKeySpeed(event: KeyboardEvent) {
    this.speed = parseInt((event.target as HTMLInputElement).value);
    this.toggle();
    this.show = true;
   
  
  }

  onKeyBattery(event: KeyboardEvent) {
    this.battery = parseInt((event.target as HTMLInputElement).value);
    this.toggle();
    this.show = true;
   
    
  
  }

  calculateRange() {

      this.range = -(this.speed * this.speed * this.battery / 2500) + (4 * this.battery) + this.weather;
  
    }
    
  checkBatteryRange(){
    if (this.battery > 100 || this.battery < 0){
      return false; 
    }
    else {
      return true;
    }
    
  }
  checkSpeedRange(){
    if (this.speed > 90 || this.speed < 0){
      return false; 
    }
    else{
      return true;
    }
    
  }
  toggle(){ 
    if (this.checkSpeedRange() == true && this.checkBatteryRange() == true ){
      this.show = !this.show;
      this.calculateRange();
    }        
}
}


