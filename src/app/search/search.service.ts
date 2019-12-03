import { Injectable } from '@angular/core';
import { SearchInterface } from '../search-interface';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
	
	 constructor(private http: HttpClient) { }



  fetchData(subName) {
    console.log(subName);
    
    return this.http.get(`https://api.waqi.info/search/?token=6093a570588d1a52e24bdde7f35550c7486d2fd8&keyword=${subName}`);
  }                      
  
}
	
	
