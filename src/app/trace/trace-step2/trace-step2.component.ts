import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-step2',
  templateUrl: './trace-step2.component.html',
  styleUrls: ['./trace-step2.component.scss']
})
export class TraceStep2Component implements OnInit {
  public typeRange:string = "Date: 04/01/2019";
  public valRange:string = "Expiration date range";
  constructor() { }

  ngOnInit() {
  }

}
