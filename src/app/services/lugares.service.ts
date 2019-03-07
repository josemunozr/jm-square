import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../../environments/environment'
import { Http, Headers } from "@angular/http";
import { map } from 'rxjs/operators'
@Injectable()

export class LugaresService {
  API_ENDPOINT = 'https://jm-square-1544016241774.firebaseio.com'

  constructor(private afDB: AngularFireDatabase, private http: Http) { }

  public getLugares() {
    // return this.afDB.list('lugares/').valueChanges();
    return this.http.get(`${this.API_ENDPOINT}/.json`)
      .pipe(map(response => {
        return response.json().lugares;
      })
      )
  }

  public buscarLugar(id) {
    return this.afDB.database.ref(`lugares/${id}`).once('value')
  }

  public guardarLugar(lugar) {
    // this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.API_ENDPOINT}/lugares.json`, lugar, { headers });
  }

  public editarLugar(lugar) {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public getLocation(direction) {
    let apiKey = environment.firebase.apiKey
    return this.http.get(`https://maps.google.com/maps/api/geocode/json?address=${direction}&key=${apiKey}`)
  }

  public getLugar(id) {
    return this.afDB.database.ref(`lugares/${id}`).once('value')
  }
}
