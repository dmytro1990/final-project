import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const BASE_URL = "api.airvisual.com/v2/city?";
const apiKey = "fe6a7207-c834-4329-96e2-d9bda2e4fed5";
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

}

//	curl --location --request GET "api.airvisual.com/v2/city?city=Detroit&state=Michigan&country=USA&key={{YOUR_API_KEY}}"

