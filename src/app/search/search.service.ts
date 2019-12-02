import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  
  constructor(private http: HttpClient) { }



  fetchData(subName) {
    console.log(subName);
    
    return this.http.get(`https://api.waqi.info/search/?token=6093a570588d1a52e24bdde7f35550c7486d2fd8&keyword=${subName}`);
  }                      
  
}
// https://api.waqi.info/search/?token=demo&keyword=bangalore
// https://api.waqi.info/search/?keyword=:keyword&token=:6093a570588d1a52e24bdde7f35550c7486d2fd8=${subName}