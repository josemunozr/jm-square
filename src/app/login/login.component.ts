import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginParams: any = {};
  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() {
  }

  public login() {
    this.autorizacionService.login(this.loginParams.email, this.loginParams.password);
  }

  public facebookLogin() {
    this.autorizacionService.facebookLogin();
  }

}
