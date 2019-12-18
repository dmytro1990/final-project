import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ViewChild } from '@angular/core'


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
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow
  @Input() results: any;
  @Input() cityResults: any[];
	

  

infoContent: string;
  markers: any[] = [];
  isGreen: boolean;
  isRed: boolean;
  isOrange: boolean;
//	info: MapInfoWindow
	
openInfo(marker: MapMarker, content) {
	    this.infoContent = "CONTENT";
    this.infoWindow.open(marker)
  }
 
	

  pulsar() {
    if (this.results.data.current.pollution.aqius <= 50) {
      this.isGreen = true;
    }
    else if (this.results.data.current.pollution.aqius >= 51 && this.results.data.current.pollution.aqius <= 100) {
      this.isOrange = true;
    }
    else if (this.results.data.current.pollution.aqius >= 101 && this.results.data.current.pollution.aqius <= 150) {
      this.isRed = true;
    }
  }

  zoom = 10
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    disableDefaultUI: true,
    draggable: false,
   	


    styles: [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8b9198"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#323336"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#414954"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2e2f31"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#7a7c80"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#242427"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#202022"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#393a3f"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#202022"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#393a3f"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#202022"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#202124"
          }
        ]
      }
    ]
  }




  createMarkers() {


    if (this.results && this.results.data) {


      this.center = {
        lat: this.results.data.location.coordinates[1],
        lng: this.results.data.location.coordinates[0]
      };
      this.markers = [{
        //      position: { lat: 42.335960, lng: -83.049750 },
        position: {
          lat: this.results.data.location.coordinates[1],
          lng: this.results.data.location.coordinates[0]
        },
	 
        visible: false,

        label: {
          color: 'white',
          text: '' + this.results.data.current.pollution.aqius,
        },
        title: this.results.data.city,
        options: {
          opacity: .8
          //		  animation: google.maps.Animation.BOUNCE 
        },

      }


      ]
      this.pulsar();
//	 this.getIcon();	
    }
  }

	
// getIcon() {
//	 icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
// }


  //		 if (this.cityResults && this.cityResults.data) {
  //      
  //      this.markers = [{
  //        //      position: { lat: 42.335960, lng: -83.049750 },
  //        position: {
  //          lat: this.cityResults.data.location.coordinates[1],
  //          lng: this.cityResults.data.location.coordinates[0]
  //        },
  //        label: {
  //        color: 'yellow',
  //        text: this.cityResults.data.city,
  //      },
  //      title: "",
  //      options: { animation: google.maps.Animation.BOUNCE },
  //		 icon: google.maps.SymbolPath.CIRCLE 
  //		 
  //    }]
  //		}






  ngOnChanges() {
    this.createMarkers();
    this.addMarker();

  }

  ngOnInit() {
//	  	const markers = new google.maps.Marker({
////  position:myCenter,
//  icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
//});


    // console.log(this.results);
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.center = {
    //     lat: this.results.data.location.coordinates[1],
    //     lng: this.results.data.location.coordinates[0]
    //   }
    // })
  }


  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  addMarker() {
    if (this.cityResults.length) {
      for (let i = 0; i < this.cityResults.length; i++) {
        this.cityResults[i];  
        this.markers.push({

          position: {
            lat: this.cityResults[i].data.location.coordinates[1],
            lng: this.cityResults[i].data.location.coordinates[0]
          },
//			color: 'blue',
          label: {
            color: 'white',
//            text: this.cityResults[i].data.city,
			 text: '' + this.cityResults[i].data.current.pollution.aqius,
          },
          title: this.cityResults[i].data.city,
          options: { animation: google.maps.Animation.DROP,
				   	 opacity: .8
				   },
			
//			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',


        })
		  
      }
    }
  }



}