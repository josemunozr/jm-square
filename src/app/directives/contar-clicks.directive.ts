import { Directive, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
	selector: 'li[contar-clicks]'
})


export class ContarClicksDirective {
	@Input('contar-clicks') lugar: any;
	clicksN = 0;
	@HostBinding('style.opacity') opacity: number = .1
	@HostListener('click', ['$event.target']) onclick(btn) {
		console.log('a', btn, "Número de clicks", this.clicksN++);
		this.opacity += .1
	}
}