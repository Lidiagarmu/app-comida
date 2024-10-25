import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos';
import { Categoria } from '../interfaces/categorias';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  //metodo para obtener productos segun categoria

   async  getByCategoria(id:number):Promise<Producto[]>{

    //lo henos cogido de la funcion getAll() de categorias.service porque esto trae todas las categorias
    const res = await fetch("./../../../assets/data/database.json"); //1. leemos el json 
    const resJson:Categoria[] = await res.json(); //2. leemos el json de la respuesta html que se genero en la linea anterior 
    //3.despues dentro de todas las categorias que tenemos en Categoria[], queremos la categoria cuyo id sea igual al 
    // al que recibimos por parametro en la funcion
    const productos = resJson.find(categoria => categoria.id === id)?.productos ; // ? --> esto quiere decir, si se encuentra algo (si es undefined se corta)
    if (productos) return productos; //4. si los prodcutos existen devuelve los productos 
    return []; //si noo, array vacio
  }
}
