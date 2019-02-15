import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  public login = (email, password) => {
    console.log('Método de login');
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        alert('Login OK')
        console.log(response);
      })
      .catch(error => {
        alert(`error al logearse: ${error}`);
      })
  }

  public registro = (email, password) => {
    console.log('Método de registro');
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        alert('Regristo OK')
        console.log(response);
      })
      .catch(error => {
        alert(`error al registrarse: ${error}`);
      })
  }
}
