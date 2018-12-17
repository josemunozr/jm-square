import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jm-square';
  lugares: any = [
    { clicks: 0, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: "Florería la Gardenia" },
    { clicks: 0, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, name: "Donas la posadita" },
    { clicks: 0, plan: 'gratuito', cercania: 2, distancia: 5, active: true, name: "Veterinaria Huellitas felices" },
    { clicks: 0, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: "Sushi sushiroll" },
    { clicks: 0, plan: 'pagado', cercania: 3, distancia: 35, active: true, name: "Hotel la gracia" },
    { clicks: 0, plan: 'gratuito', cercania: 3, distancia: 120, active: true, name: "Zapateria el clavo" },
  ];

  lat: number = -33.4727092;
  lng: number = -70.7699141;

  constructor() {

  }

}
