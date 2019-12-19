import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const BASE_URL = "api.airvisual.com/v2/city?";
const apiKey = "5812031c-2eec-4811-b1c6-bec812d5aa42";
const country = "USA";


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }



  fetchData(params) {
    // console.log(params);
    return this.http.get("http://api.airvisual.com/v2/city?", {
      params: {
        key: apiKey,
        country: country,
        city: params.city,
        state: params.state
      }


    });
  }


  fetchCityList(params) {
    // console.log(params);
    return this.http.get("http://api.airvisual.com/v2/cities?", {
      params: {
        key: apiKey,
        country: country,
        state: params.state
      }


    });
  }
	
fetchCityData(params) {
    return this.http.get("http://api.airvisual.com/v2/city?", {
      params: {
        key: apiKey,
        country: country,
        city: params.city,
        state: params.state
      }


    });
  }	
	
//	allCities: any[] = fetchCityList(params);
//	
//	
//	
//	fetchAllCities(params) {
//	// console.log(params);
//    return this.http.get("http://api.airvisual.com/v2/city?", {
//      params: {
//        key: apiKey,
//        country: country,
//        state: params.state,
//		city:   
//      }
//
//
//    });
//  }

}

//	curl --location --request GET "api.airvisual.com/v2/city?city=Detroit&state=Michigan&country=USA&key={{YOUR_API_KEY}}"
