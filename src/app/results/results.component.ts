
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search/search.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  results: any;
  cities: any;
  stateCities: any;

  constructor(private route: ActivatedRoute, private search: SearchService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.search.fetchData(queryParams).subscribe(data => {
        this.results = data;
        console.log(this.results);
		 
      })
    })

    this.route.queryParams.subscribe(queryParams => {
      this.search.fetchCityList(queryParams).subscribe(data => {
        this.cities = data.data;
        console.log(this.cities);
		   this.cityList();
      })
    })
	 
  }
	
	
	
//	for (let this.city of this.cities) {
//    console.log(this.city);
//}
	
	
cityList() {
for (let i = 0; i < this.cities.length; i++){
let stateCities = this.cities[i];
   console.log(stateCities);

	}
	
}
	
	
//	cityList() {
//		this.cities.data.forEach(function(item,i){
//  		this.stateCities[i]=item;
//});
//		console.log(this.stateCities);
//	}


		
//	  	for (let i = 0; i < this.cities.data && this.cities.data.length; i++){
//
//   console.log(this.cities[i]);
//
//		
//	}



//	  ngOnChanges() {
//		this.cityList();	
//	}



	  
//let stateCities = this.cities.data;
//
//for (var stateCity of stateCities) {
//  console.log(stateCity); 
//}
	  
	  
  
}