import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.scss']
})
export class TraceComponent implements OnInit {
  public isHidden1:boolean = false;
  public isHidden2:boolean = false;
  public isHidden3:boolean = false;
  public hiddenInfo1:boolean = true;
  public hiddenInfo2:boolean = true;
  public hiddenInfo3:boolean = true;
  public hiddenList1:boolean = true;
  public hiddenList2:boolean = true;
  public hiddenList3:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  find1(){
    this.isHidden2 = true;
    this.isHidden3 = true;
    this.hiddenList1 = false;
  }
  find2(){
    this.isHidden1 = true;
    this.isHidden3 = true;
    this.hiddenList2 = false;
  }
  find3(){
    this.isHidden1 = true;
    this.isHidden2 = true;
    this.hiddenList3 = false;
  }
  info1(){
    this.hiddenInfo1 = this.hiddenInfo1 == true ? false :true;
  }
  info2(){
    this.hiddenInfo2 = this.hiddenInfo2 == true ? false :true;
  }
  info3(){
    this.hiddenInfo3 = this.hiddenInfo3 == true ? false :true;
  }
}
