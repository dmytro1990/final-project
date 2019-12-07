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

  constructor(private route: ActivatedRoute, private search: SearchService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.search.fetchData(queryParams).subscribe(data => {
        this.results = data;
      })
    })
  }
}
