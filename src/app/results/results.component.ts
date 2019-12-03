import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

 airPosts: any[] = [];
  


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
    
  }
}
