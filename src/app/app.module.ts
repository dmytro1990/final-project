import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { ResultsComponent } from './results/results.component';
import { AqComponent } from './aq/aq.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchService } from './search/search.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MapComponent,
    ResultsComponent,
    AqComponent,
    ForecastComponent,
    SearchCriteriaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    HttpClientModule,
      
  ],
  providers: [ ApiService, SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
