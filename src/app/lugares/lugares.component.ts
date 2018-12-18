import { Component } from '@angular/core';

@Component({
	selector: 'app-lugares',
	templateUrl: './lugares.component.html',
	styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
	title = 'jm-square';
	lugares: any = [
		{ id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: "Florería la Gardenia" },
		{ id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, name: "Donas la posadita" },
		{ id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, name: "Veterinaria Huellitas felices" },
		{ id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: "Sushi sushiroll" },
		{ id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, name: "Hotel la gracia" },
		{ id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, name: "Zapateria el clavo" },
	];

	lat: number = -33.4727092;
	lng: number = -70.7699141;
}
