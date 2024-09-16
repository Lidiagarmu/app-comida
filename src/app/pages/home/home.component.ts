import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

//ngOnInit lo que hace es ejecutarse cada vez que se carga este componente en este caso

  headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.titulo.set("Home")
  }



}
