import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categorias';



//este servicio va a tener todos los métodos para obtener, agregar, modificar categorias
//por el momento, solo va a tener el método obtener todos

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  async getAll() : Promise<Categoria[]>{
    const res = await fetch("./../../../assets/data/database.json");
    const resJson = await res.json();
    return resJson;
    
  
  }

}
