import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial=>final', animate(2000)),
      transition('final=>inicial', animate(1000)),
    ])
  ]
})

export class LugaresComponent {
  title = 'jm-square';
  state = 'inicial';

  lat: number = -33.4727092;
  lng: number = -70.7699141;
  lugares = null

  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe(response => {
        let data = response;
        this.lugares = Object.keys(data).map(key => data[key])
        this.state = 'final'
      }, error => {
        alert(`Tenemos dificultades, disculpe las molestias. Error : ${error.statusText}`);
      });
  }
}
