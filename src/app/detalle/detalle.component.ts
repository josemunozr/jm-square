import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html'
})
export class DetalleComponent {
	lugares: any = [
		{ id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: "Florería la Gardenia", description: "Descripción de éste negocio" },
		{ id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, name: "Donas la posadita", description: "Descripción de éste negocio" },
		{ id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, name: "Veterinaria Huellitas felices", description: "Descripción de éste negocio" },
		{ id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: "Sushi sushiroll", description: "Descripción de éste negocio" },
		{ id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, name: "Hotel la gracia", description: "Descripción de éste negocio" },
		{ id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, name: "Zapateria el clavo", description: "Descripción de éste negocio" },
	];
	id = null;
	lugar: any = {}
	constructor(private route: ActivatedRoute) {
		// console.log(this.route.snapshot.params['id']);
		// console.log(this.route.snapshot.queryParams);
		this.id = this.route.snapshot.params['id'];
		this.lugar = this.buscarLugar()
	}

	buscarLugar() {
		return this.lugares.filter(lugar => lugar.id == this.id)[0] || null;
	}
}
