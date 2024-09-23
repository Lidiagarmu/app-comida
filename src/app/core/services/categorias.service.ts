import { Injectable } from '@angular/core';


//este servicio va a tener todos los métodos para obtener, agregar, modificar categorias
//por el momento, solo va a tener el método obtener todos

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  getAll(){
    fetch("./../../assets/data/database.json")
  }
}
