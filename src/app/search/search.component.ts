import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
 constructor(private search: SearchService, private router: Router) { }

  handleSubmit(form){
    this.onSearch.emit(form.value.subName);
    this.router.navigate(["results"]);
  
  }

  ngOnInit() {
  }

}
