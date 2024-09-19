import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Router }  from '@angular/router'; // importamos router para que la clase extendido solo se aplique en el home

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  headerService = inject(HeaderService);
  claseAplicada = signal("");
  router = inject(Router); // Inyectamos el Router

    // Signal que definirá si estamos en la página de Home para que le aplique el extendido
    esHome = signal(false);

    constructor() {
      this.checkIfHome(); // Llama al método para verificar si es la página de inicio para poder aplicar el extendido
    }


  esconderTitulo = effect(()=> {
    if(this.headerService.titulo()){
      this.claseAplicada.set("fade-out");
    }
  },{allowSignalWrites: true});

    // Método para verificar si la ruta actual es el Home y que le aplique el extendido
    checkIfHome() {
      this.router.events.subscribe(() => {
        this.esHome.set(this.router.url === '/'); // Ajusta la ruta del home según tu configuración
      });
    }

  
}


