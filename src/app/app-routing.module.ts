import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { AqComponent } from './aq/aq.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

// routes or /URL paths are declared here and exported for use in other components
const routes: Routes = [
  {path: "", redirectTo: "/", pathMatch: "full"},
  {path: "search", component: SearchCriteriaComponent},
  {path: "results", component: ResultsComponent},
  {path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




