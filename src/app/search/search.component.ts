import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
	
 constructor(private searchService: SearchService, private router: Router) { }
// Router is imported above to use as a variable in this component, given a constructor, then called in the submit function to bring the user to a different page aka "results"
  handleSubmit(form){
    this.searchService.fetchData(form.value.subName).subscribe((response:any) => {
		this.onSearch.emit(response.data);
	});
    this.router.navigate(["results"]);
  
  }
	 search(subName: string): void {
	  console.log(this.searchService);
// step 9 - call the services's method that makes the request    
    console.log(subName);
    this.searchService
	.fetchData(subName)
// step 10 - subscribe to an observable to get the response (data from request)    
    .subscribe((response: any) => {
      console.log(response);
      this.onSearch.emit(response.data)
    }, error => {
      console.log(`oh  no. ${error}`);
    });
  }

  ngOnInit() {
  }

}
