import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
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

  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(result => {
        alert("Logeado correctamente con facebook!")
        this.router.navigate(['lugares']);
      })
      .catch(error => console.log(error));
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

  public getDataUser() {
    return this.angularFireAuth.user
  }
}
