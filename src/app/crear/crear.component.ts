import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};
  id: any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id != 'new') {
      this._getDatosLugar(this.id);
    }
  }

  handleGuadarLugar() {
    let direction = `${this.lugar.direction}, ${this.lugar.city}, ${this.lugar.country}`;

    this.lugaresService.getLocation(direction)
      .subscribe(result => {
        let data = result.json()
        this.lugar.lat = data.results[0].geometry.location.lat;
        this.lugar.lng = data.results[0].geometry.location.lng;
        if (this.id != 'new') {
          this.lugaresService.editarLugar(this.lugar);
          alert('lugar editado correctamente!');
        } else {
          this.lugar.id = Date.now();
          this.lugar.active = true;
          alert('Lugar creado on éxito');
          this.lugar = {};
        }
      })
  }

  _getDatosLugar(id) {
    this.lugaresService.getLugar(id)
      .then(lugar => {
        this.lugar = lugar.val();
      })
  }
}
