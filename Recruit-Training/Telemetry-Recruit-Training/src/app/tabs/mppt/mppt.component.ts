import { Component, OnInit } from '@angular/core';
import { MpptService } from '../../_services/mppt.service';
import { Mppt } from '../../_objects/mppt';

@Component({
  selector: 'app-mppt',
  templateUrl: './mppt.component.html',
  styleUrls: ['./mppt.component.css']
})
export class MpptComponent implements OnInit {

  private mppt: Mppt[];

  constructor(private ms: MpptService) { }

  ngOnInit() {
    this.mppt = [];
    for (let i = 0; i < 4; i++) {
      this.mppt.push(this.ms.getData(i));
      // this.mppt.push(this.ms.getData(i));
      console.log(this.mppt[i]);
    }
  }
}
