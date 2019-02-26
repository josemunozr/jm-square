import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AutorizacionService } from "./autorizacion.service";

@Injectable()

export class Guard implements CanActivate {
	loggedIn: boolean = false;

	constructor(private autorizacionServie: AutorizacionService) {
		this.autorizacionServie.isLogged()
			.subscribe(result => {
				this.loggedIn = (result && result.uid) ? true : false;
			}, error => {
				this.loggedIn = false
			})
	}

	canActivate() {
		return this.loggedIn
	}

}