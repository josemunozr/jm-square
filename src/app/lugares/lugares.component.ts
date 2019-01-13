import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animation, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500)),
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
      }, error => {
        alert(`Tenemos dificultades, disculpe las molestias. Error : ${error.statusText}`);
      });
  }

  animar() {
    this.state = this.state == 'final' ? 'inicial' : 'final'
  }
}
