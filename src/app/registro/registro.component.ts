import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() {
  }

  public registrarse(email, password) {
    this.autorizacionService.registro(email, password);
  }

}
