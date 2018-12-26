import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


@Component({
	selector: 'app-crear',
	templateUrl: './crear.component.html'
})
export class CrearComponent {
	lugar: any = {};

	constructor(private lugaresService: LugaresService) { }

	async handleGuadarLugar() {
		let direction = `${this.lugar.direction}, ${this.lugar.city}, ${this.lugar.country}`;

		this.lugaresService.getLocation(direction)
			.subscribe(result => {
				let data = result.json()
				this.lugar.lat = data.results[0].geometry.location.lat;
				this.lugar.lng = data.results[0].geometry.location.lng;
				this.lugar.id = Date.now();
				this.lugar.active = true;
				this.lugaresService.guardarLugar(this.lugar)
				alert('Lugar creado on éxito');
				this.lugar = {};
			})

	}
}
