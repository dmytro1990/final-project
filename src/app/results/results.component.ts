
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
  cityResults: any;

  constructor(private route: ActivatedRoute, private search: SearchService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.search.fetchData(queryParams).subscribe(data => {
        this.results = data;
        console.log(this.results);
		 
      })
    })

    this.route.queryParams.subscribe(queryParams => {
      this.search.fetchCityList(queryParams).subscribe((data: any) => {
        this.cities = data.data;
        console.log(this.cities);
		   this.cityList();
      })
    })
	 
  }
	

cityList() {
for (let i = 0; i < this.cities.length; i++){
let stateCities = this.cities[i];
	console.log(stateCities);
	this.route.queryParams.subscribe(queryParams => {
      this.search.fetchData({
		  state: queryParams.state,
		  city: stateCities.city
	  }).subscribe(data => {
        console.log(data);
		 this.cityResults = data;
		  
      })
    })
	

	}
	
}
	
  
  
}