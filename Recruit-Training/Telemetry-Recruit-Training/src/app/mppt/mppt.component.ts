import { Component, OnInit } from '@angular/core';
import { MpptService } from '../_services/mppt.service';
import { Mppt } from '../_objects/mppt';

@Component({
  selector: 'app-mppt',
  templateUrl: './mppt.component.html',
  styleUrls: ['./mppt.component.css']
})
export class MpptComponent implements OnInit {

  private mppt: Mppt;

  constructor(private bs: MpptService) { }

  ngOnInit() {
    this.mppt = this.bs.getData(1);
    console.log(this.mppt);
  }

}