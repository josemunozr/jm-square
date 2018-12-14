import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jm-square';
  lugares: any = [
    { cercania: 1, distancia: 1, active: true, name: "Florería la Gardenia" },
    { cercania: 1, distancia: 1.8, active: false, name: "Donas la posadita" },
    { cercania: 2, distancia: 5, active: true, name: "Veterinaria Huellitas felices" },
    { cercania: 3, distancia: 10, active: true, name: "Sushi sushiroll" },
    { cercania: 3, distancia: 35, active: true, name: "Hotel la gracia" },
    { cercania: 3, distancia: 120, active: true, name: "Zapateria el clavo" },
  ];

  lat: number = -33.4727092;
  lng: number = -70.7699141;

  constructor() {

  }

}
