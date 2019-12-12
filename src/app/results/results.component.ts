    
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search/search.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  results: any;

  constructor(private route: ActivatedRoute, private search: SearchService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.search.fetchData(queryParams).subscribe(data => {
        this.results = data;
      console.log(this.results);
      this.compare();
      })
    })
  }

compare(){
  if (this.results.data.current.pollution.aqius <= 50) {
    document.getElementById("myImg").src = "assets/compman.gif";
    document.getElementById("rating").innerHTML = "Good";
    document.getElementById("conditions").innerHTML = "Air quality is satisfactory and poses little or no health risk. Ventilating your home is recommended.";
    document.getElementById("recommendations").innerHTML = "Enjoy your usual outdoor activities. We recommend opening your windows and ventilating your home to bring in fresh, oxygen-rich air.";
  }
  else if (this.results.data.current.pollution.aqius >=51 && this.results.data.current.pollution.aqius <=100) {
    document.getElementById("rating").innerHTML = "Moderate";
    document.getElementById("conditions").innerHTML = "Air quality is acceptable and poses little health risk. Sensitive individuals should avoid outdoor activity as they may experience respiratory symptoms.";
    document.getElementById("recommendations").innerHTML = "Sensitive groups should greatly reduce outdoor exercise. Ventilation is discouraged, and windows should be closed to avoid dirty outdoor air.";
  }
  else if (this.results.data.current.pollution.aqius >=101 && this.results.data.current.pollution.aqius <=150) {
    document.getElementById("rating").innerHTML = "Unhealthy for Sensitive Groups";
    document.getElementById("conditions").innerHTML = "A General public and sensitive individuals in particular are at risk to experience irritation and respiratory problems.";
    document.getElementById("recommendations").innerHTML = "The general public should greatly reduce outdoor exertion. Sensitive groups should avoid all outdoor activity and should take care to wear a pollution mask outdoors. Ventilation is discouraged. Air purifiers should be turned on if indoor air quality is unhealthy.";
  }
  else if (this.results.data.current.pollution.aqius >=151 && this.results.data.current.pollution.aqius <=200) {
    document.getElementById("rating").innerHTML = "Unhealthy";
    document.getElementById("conditions").innerHTML = "Increased likelihood of adverse effects and aggravation to the heart and lungs among general public - particularly for sensitive groups.";
    document.getElementById("recommendations").innerHTML = "Everyone should avoid outdoor exercise and take care to wear a pollution mask outdoors. Ventilation is discouraged. Air purifiers should be turned on.";
  }
  else if (this.results.data.current.pollution.aqius >=201 && this.results.data.current.pollution.aqius <=300) {
    document.getElementById("rating").innerHTML = "Very Unhealthy";
    document.getElementById("conditions").innerHTML = "General public will be noticeably affected. Sensitive groups will experience reduced endurance in activities. These individuals should remain indoors and restrict activities.";
    document.getElementById("recommendations").innerHTML = "Everyone should avoid outdoor exercise and take care to wear a pollution mask outdoors. Ventilation is discouraged. Air purifiers should be turned on.";
  }
  else if (this.results.data.current.pollution.aqius >=301 && this.results.data.current.pollution.aqius >=500) {
    document.getElementById("rating").innerHTML = "Hazardous";
    document.getElementById("conditions").innerHTML = "General public and sensitive groups are at high risk to experience strong irritations and adverse health effects that could trigger other illnesses. Everyone should avoid exercise and remain indoors.";
    document.getElementById("recommendations").innerHTML = "Everyone should avoid outdoor exercise and take care to wear a pollution mask outdoors. Ventilation is discouraged. Air purifiers should be turned on.";
  }
}
}