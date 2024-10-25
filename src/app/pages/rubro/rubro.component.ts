import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { ProductosService } from '../../core/services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../core/interfaces/productos';
import { TarjetaProductoComponent } from '../../core/components/tarjeta-producto/tarjeta-producto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.scss',
  standalone: true,
  imports: [TarjetaProductoComponent, CommonModule]
})
export class RubroComponent implements OnInit{
  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  ac = inject(ActivatedRoute);
  productos: Producto[] = [] ; 


  //al iniciar este componente nos da el header y segun el parametro de la url que sabremos gracias a
  //la suscripcion ActivatedRoute nos devolverá los productos de una categoria u otra
  ngOnInit(): void {
    this.headerService.titulo.set("Rubro");
    this.ac.params.subscribe( params =>{
      if(params['id']){
        this.productosService.getByCategoria(parseInt(params['id']))
        .then(productos => this.productos = productos);
      }
    });
    
  }

}
