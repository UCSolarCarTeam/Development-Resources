import { Component, OnInit } from '@angular/core';
import { Mppt } from '../../_objects/mppt';

@Component({
  selector: 'app-mppt',
  templateUrl: './mppt.component.html',
  styleUrls: ['./mppt.component.css']
})
export class MpptComponent implements OnInit {

  private mppt: Mppt;

  constructor() { }

  ngOnInit() {
    console.log(this.mppt);
  }

}

