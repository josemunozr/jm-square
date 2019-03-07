import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};
  id: any = null;
  result$ : Observable<any>;
  private searchField: FormControl;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: Http) {
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'new') {
      this._getDatosLugar(this.id);
    }

    const URL = 'https://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.result$ = this.searchField.valueChanges.pipe(
      switchMap(query => this.http.get(`${URL}?addres=${query}`)),
      map(response => response.json()),
      map(response => response.results);
    )
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
          debugger;
          this.lugaresService.guardarLugar(this.lugar)
            .subscribe(() => {
              alert('Lugar creado on éxito');
              this.lugar = {};
            })

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
