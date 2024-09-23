import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CategoriasService } from '../../core/services/categorias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 

//ngOnInit lo que hace es ejecutarse cada vez que se carga este componente en este caso

  headerService = inject(HeaderService);
  categoriasService  = inject(CategoriasService );

  
  ngOnInit(): void {
    this.headerService.titulo.set("Home");
    this.headerService.extendido.set(true); 
    this.categoriasService.getAll();
  }

  


}
