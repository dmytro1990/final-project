
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
        this.cities = data;
        console.log(this.cities);
      })
    })

  }
}