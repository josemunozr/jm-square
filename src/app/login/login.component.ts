import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() {
  }

  public login(email, password) {
    this.autorizacionService.login(email, password);
  }

}
