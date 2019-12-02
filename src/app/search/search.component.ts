import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  constructor() { }

  handleSubmit(form){
    this.onSearch.emit(form.value.subName);
  }

  ngOnInit() {
  }

}
