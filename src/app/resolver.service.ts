import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SearchService } from './search/search.service';
//import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResolverService implements Resolve<any> {

  constructor(private searchService: SearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.searchService.fetchData(route.queryParams)
  }
}