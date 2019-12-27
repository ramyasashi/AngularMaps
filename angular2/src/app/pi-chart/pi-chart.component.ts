/// <reference types="@types/googlemaps" />
import { Component, OnInit, Inject} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label} from 'ng2-charts';
import { Service1Service } from '../service1.service';
import { Users } from '../users';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import {} from "googlemaps";
@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.css']
})
export class PiChartComponent implements OnInit {

  users: Users[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Moving', 'idle', 'Over Speeding', 'Stopped'];
  public pieChartData: SingleDataSet = [300, 500, 100, 200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(private service: Service1Service, public dialog: MatDialog) {
    // monkeyPatchChartJsTooltip();
    // monkeyPatchChartJsLegend();
  }
  
  ngOnInit() {
    this.service.getUsersList().subscribe(data => {
      console.log(data);
      this.users = data});
  }
  // callFun(l1: number, l2: number){
  //   var mapProp= {
  //   center:new google.maps.LatLng(l1, l2),
  //   zoom:5,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // };
  // var map = new google.maps.Map(document.getElementById("map"),mapProp);
  // }
  
  openDailog(data1): void {
    const dialogRef = this.dialog.open(AlertMessagesExampleDialog, {
      width: '250px',
      height: '300px',
      data: data1
    });
    console.log(data1);
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog got closed");
      console.log( 'result is', result );
      // if (result) {
      //   data1.name = result.name;
      //   data1.state = result.state;
      //   data1.time = result.time;
      // }
    })
  }

  openDailog2(data2: Users){
    console.log(data2)
    const dialogRef = this.dialog.open(MapExampleDialog, {
      width: '800px',
      height: '500px',
      data: data2
    });
    console.log("data2",data2);
    
    // var mapProp= {
    //     center:new google.maps.LatLng(data2.location.latitude, data2.location.longitude),
    //     zoom:2,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   var map = new google.maps.Map(document.getElementById("map"),mapProp);

      dialogRef.afterClosed().subscribe(result => {
        console.log("Dialog2 got closed");
        console.log( 'result is', result.location.latitude );
      })
  }
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alert-message-example-dialog',
  templateUrl: 'alert-message-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class AlertMessagesExampleDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AlertMessagesExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    onNoThanksClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    // no code here
  }
 }

 @Component({
  // tslint:disable-next-line:component-selector
  selector: 'map-example-dialog',
  templateUrl: 'map-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class MapExampleDialog implements OnInit {
  lat: any;
  lng: any;
  constructor(
    public dialogRef: MatDialogRef<MapExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.lat = data.location.latitude;
      this.lng = data.location.longitude;
    }
    onNoThanksClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
    // this.location1 = this.data.location;
  }
 }
