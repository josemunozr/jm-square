import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
	selector: 'app-lugares',
	templateUrl: './lugares.component.html',
	styleUrls: ['./lugares.component.css']
})

export class LugaresComponent {
	title = 'jm-square';

	lat: number = -33.4727092;
	lng: number = -70.7699141;
	lugares = null

	constructor(private lugaresService: LugaresService) {
		this.lugares = lugaresService.getLugares();
	}
}
