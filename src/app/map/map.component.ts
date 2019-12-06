import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
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

  constructor() { }
	
	initMap () {
  var  map  =  new  window.google.maps.Map(document.getElementById('map'),  {  
    center:  new  window.google.maps.LatLng(51.505,  -0.09),  
    mapTypeId:  window.google.maps.MapTypeId.ROADMAP,  
    zoom:  11  
});  
  var  t  =  new  Date().getTime();  
  var  waqiMapOverlay  =  new  window.google.maps.ImageMapType({  
        getTileUrl:  function(coord,  zoom)  {  
                  return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=AIzaSyBjiGx9DXzREA_CZEdPKleOI6fUVEqWReo";  
        },  
        name:  "Air  Quality",  
  });  
  map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
}

 ngOnInit() {
    this.initMap();
  }

}
