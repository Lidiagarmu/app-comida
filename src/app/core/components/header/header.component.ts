import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  headerService = inject(HeaderService);
  claseAplicada = signal("");
 

  esconderTitulo = effect(()=> {
    if(this.headerService.titulo()){
      this.claseAplicada.set("fade-out");
    }
  },{allowSignalWrites: true});


  
}


