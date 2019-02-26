import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;

  constructor(private autorizacionServie: AutorizacionService) {
    this.autorizacionServie.isLogged()
      .subscribe(result => {
        this.loggedIn = (result && result.uid) ? true : false;
      }, error => {
        this.loggedIn = false
      })
  }

}
