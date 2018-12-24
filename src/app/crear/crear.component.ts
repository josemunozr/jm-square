import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
	selector: 'app-crear',
	templateUrl: './crear.component.html'
})
export class CrearComponent {
	lugar: any = {};

	constructor(private lugaresService: LugaresService) { }

	handleGuadarLugar() {
		this.lugar.id = Date.now();
		this.lugar.active = true;
		this.lugaresService.guardarLugar(this.lugar)
		alert('Lugar creado on éxito');
		this.lugar = {};
	}
}
