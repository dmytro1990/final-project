import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

declare global {
  interface Window {
    google: any;
  }
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() results: any;

  markers: any[] = [
    {
      position: { lat: 42.335960, lng: -83.049750 },
      label: {
        color: 'yellow',
        text: 'hello '
      },
      title: "Detroit",
      options: { animation: google.maps.Animation.BOUNCE }
    }
  ];

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }


  //  constructor() { }
  //	
  //	initMap () {
  //  var  map  =  new  window.google.maps.Map(document.getElementById('map'),  {  
  //    center:  new  window.google.maps.LatLng(51.505,  -0.09),  
  //    mapTypeId:  window.google.maps.MapTypeId.ROADMAP,  
  //    zoom:  11  
  //});  
  //  var  t  =  new  Date().getTime();  
  //  var  waqiMapOverlay  =  new  window.google.maps.ImageMapType({  
  //        getTileUrl:  function(coord,  zoom)  {  
  //                  return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=AIzaSyBjiGx9DXzREA_CZEdPKleOI6fUVEqWReo";  
  //        },  
  //        name:  "Air  Quality",  
  //  });  
  //  map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
  //}
  //
  // ngOnInit() {
  //    this.initMap();
  //  }

}
