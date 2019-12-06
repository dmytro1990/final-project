import { Component } from '@angular/core';
//import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Router } from '@angular/router';
//import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  title = 'gc-final-project';
	airPosts: any[] = [];
	handleSearch(data) {
		this.airPosts = data;
	}
}
