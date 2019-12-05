import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
declare global {
	interface Window {
		google: any;
	}
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
 airPosts: any[] = [];
 initMap () {
  var  map  =  new  window.google.maps.Map(document.getElementById('map'),  {  
    center:  new  window.google.maps.LatLng(51.505,  -0.09),  
    mapTypeId:  window.google.maps.MapTypeId.ROADMAP,  
    zoom:  11  
});  
  var  t  =  new  Date().getTime();  
  var  waqiMapOverlay  =  new  window.google.maps.ImageMapType({  
        getTileUrl:  function(coord,  zoom)  {  
                  return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=6093a570588d1a52e24bdde7f35550c7486d2fd8";  
        },  
        name:  "Air  Quality",  
  });  
  map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
}
// step 8 - set up a constructor
  constructor(private searchService: SearchService) { }
  search(subName: string): void {
	  console.log(this.searchService);
// step 9 - call the services's method that makes the request    
    console.log(subName);
    this.searchService
	.fetchData(subName)
// step 10 - subscribe to an observable to get the response (data from request)    
    .subscribe((response: any) => {
      console.log(response);
      this.airPosts = response.data;
    }, error => {
      console.log(`oh  no. ${error}`);
    });
  }
  ngOnInit() {
    this.initMap();
  }
}
