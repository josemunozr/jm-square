import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;
  nameUser: string;

  constructor(private autorizacionServie: AutorizacionService, private router: Router) {
    this.autorizacionServie.isLogged()
      .subscribe(result => {
        if (result && result.uid) {
          this.loggedIn = true
          this.setDataUser()
        } else {
          this.loggedIn = false
        }
      }, error => {
        this.loggedIn = false
      })
  }

  logout() {
    this.autorizacionServie.logout();
    alert("Sesión cerrada correctamente");
    this.router.navigate(['lugares']);
  }

  setDataUser() {
    this.autorizacionServie.getDataUser()
      .subscribe(data => this.nameUser = data.displayName)
  }

}
