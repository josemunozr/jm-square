import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jm-square';
  lugares: any = [
    { active: true, name: "ítem 1" },
    { active: false, name: "ítem 2" },
    { active: true, name: "ítem 3" },
  ];

  lat: number = -33.4727092;
  lng: number = -70.7699141;

  constructor() {

  }

}
