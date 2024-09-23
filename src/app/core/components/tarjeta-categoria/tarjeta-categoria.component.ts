import { Component, Input } from '@angular/core';
import { Categoria } from '../../interfaces/categorias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrl: './tarjeta-categoria.component.scss',
  standalone: true,
  imports: [CommonModule] //este CommonModule le importo para poder usar la directiva ngStyle en el template (html) de tarjeta-categoria
})
export class TarjetaCategoriaComponent {

  //va a ser requerido que exista este input para que haya una tarjeta
  //esto es para comunicar datos de padre (home) a hijo (tarjeta-categoria)

  //le ponemos la ! a categoria para decirle a typestript que categoria va a ser agregado y que ademas requerido es true
  @Input({required:true}) categoria!: Categoria;

}
