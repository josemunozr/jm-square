import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  public login = (email, password) => {
    console.log('Método de login');
  }

  public registro = (email, password) => {
    console.log('Método de registro');
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        alert('LOG OK')
        console.log(response);
      })
      .catch(error => {
        alert(`error al logearse: ${error}`);
      })
  }
}
