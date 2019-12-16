import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const BASE_URL = "api.airvisual.com/v2/city?";
const apiKey = "939d7af6-4aa5-41fb-b9d6-ca03473503f1";
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
