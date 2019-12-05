import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  airPosts: any[] = [];
  


// step 8 - set up a constructor
  constructor(private searchService: SearchService) { }

  search(subName: string): void {
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

  initMap () {
    var  map  =  new  google.maps.Map(document.getElementById('map'),  {  
      center:  new  google.maps.LatLng(51.505,  -0.09),  
      mapTypeId:  google.maps.MapTypeId.ROADMAP,  
      zoom:  11  
  });  

    var  t  =  new  Date().getTime();  
    var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
          getTileUrl:  function(coord,  zoom)  {  
                    return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=6093a570588d1a52e24bdde7f35550c7486d2fd8";  
          },  
          name:  "Air  Quality",  
    });  

    map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
  }

  ngOnInit() {
    this.initMap();
  }

}
