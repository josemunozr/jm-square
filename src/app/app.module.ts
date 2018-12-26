import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { ResaltarDirective } from './directives/resaltar.directive';
import { DetalleComponent } from "./detalle/detalle.component";
import { LugaresComponent } from "./lugares/lugares.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { CrearComponent } from "./crear/crear.component";

import { LugaresService } from "./services/lugares.service";

import { Routes, RouterModule } from "@angular/router";
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear', component: CrearComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcl4gkDV4Rs2SrAxhZyfx-b3AepnUSC_Y'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
