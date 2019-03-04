import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    console.log(this.isLogged());
  }

  public login = (email, password) => {
    console.log('Método de login');
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        alert('Login OK')
        this.router.navigate(['lugares']);
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
        this.router.navigate(['lugares']);
      })
      .catch(error => {
        alert(`error al registrarse: ${error}`);
      })
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    return this.angularFireAuth.auth.signOut();
  }
}
