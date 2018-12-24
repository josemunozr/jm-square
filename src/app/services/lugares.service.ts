import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()

export class LugaresService {
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: "Florería la Gardenia" },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, name: "Donas la posadita" },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, name: "Veterinaria Huellitas felices" },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: "Sushi sushiroll" },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, name: "Hotel la gracia" },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, name: "Zapateria el clavo" },
  ];

  constructor(private afDB: AngularFireDatabase) { }

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter(lugar => lugar.id == id)[0] || null;
  }

  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/1').set(lugar);
  }
}
