import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { Categoria } from '../../core/interfaces/categorias';
import { TarjetaCategoriaComponent } from '../../core/components/tarjeta-categoria/tarjeta-categoria.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TarjetaCategoriaComponent, CommonModule, RouterModule] //importo el CommonModule para poder user la directiva ngFor en home compomnent html

})
export class HomeComponent implements OnInit {
 

//ngOnInit lo que hace es ejecutarse cada vez que se carga este componente en este caso

  headerService = inject(HeaderService);
  categoriasService  = inject(CategoriasService );
  categorias: Categoria[] = [];
  
  ngOnInit(): void {
    this.headerService.titulo.set("Home");
    this.headerService.extendido.set(true); 
    this.categoriasService.getAll().then(res => this.categorias = res);
  }

  /* ESTO LO TIENE EL PROFESOR
  en el export tiene --> ,On Destroy {

  ngOnDestroy(): void {
  this.headerService.extendido.set(false);
  }
   */


}
