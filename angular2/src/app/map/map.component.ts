import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() data: any;
  a: any;
  b: any;
  
  constructor() {
    this.a = this.data.latitude;
    this.b = this.data.longitude;
    // this.a = 12.959777;
    // this.b = 77.602484
  }

  ngOnInit() {
    // var mapProp= {
    // center:new google.maps.LatLng(this.data.location.latitude, this.data.location.longitude),
    // zoom:5,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // var map = new google.maps.Map(document.getElementById("map"),mapProp);
  }

}
