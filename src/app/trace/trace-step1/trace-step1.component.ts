import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-step1',
  templateUrl: './trace-step1.component.html',
  styleUrls: ['./trace-step1.component.scss']
})
export class TraceStep1Component implements OnInit {
  public hiddenInfo1:boolean = true;
  public hiddenInfo2:boolean = true;
  public hiddenDate:boolean = false;
  public hiddenPacking:boolean = false;
  public hiddenLots:boolean = true;
  public hiddenPallets:boolean = true;
  public hiddenSerial:boolean = true;
  public hiddenCreation:boolean = true;
  public hiddenExpiration:boolean = true;
  public labelNumber:string = "Enter lot number here";
  public typeRange:string = "";
  public valRange:string = "";
  public step3:string = "";
  public step4:string = "";
  public comp:string = "disabled";
  constructor() { 

    
  }

  ngOnInit() {
  }
  info1(){
    this.hiddenInfo1 = this.hiddenInfo1 == true ? false :true;
  }
  info2(){
    this.hiddenInfo2 = this.hiddenInfo2 == true ? false :true;
  }
  creation(){
    this.hiddenCreation =  false;
    this.hiddenExpiration = true;
  }
  expiration(){
    this.hiddenCreation =  true;
    this.hiddenExpiration = false;
  }

  byDate(div:string){
    if(div == "date"){
      this.valRange = "Date: 04/01/2019";
      this.typeRange = "Expiration date range";
      this.step3 = "Narrow down with specific package ID";
      this.step4 = "Narrow down by facility";
      this.comp = "completed";
      this.hiddenDate = false;
      this.hiddenPacking = true;
    }else{
      this.hiddenDate = true;
      this.hiddenPacking = false;
    }
    this.hiddenLots = false;
    this.hiddenPallets = false;
    this.hiddenSerial  = false;
  }

}
