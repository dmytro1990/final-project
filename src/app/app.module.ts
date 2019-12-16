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
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeComponent } from './home/home.component';
import { ResolverService } from './resolver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule}  from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MapComponent,
    ResultsComponent,
    AqComponent,
    ForecastComponent,
    SearchCriteriaComponent,
    HomeComponent,

  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
	FormsModule,
  HttpClientModule,
	GoogleMapsModule,
  BrowserAnimationsModule,
  MatGridListModule,
  MatExpansionModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  FlexLayoutModule
      
  ],
  providers: [ ApiService, SearchService, ResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }