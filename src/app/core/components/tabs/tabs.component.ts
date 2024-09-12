import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  constructor(private router: Router){

  }

  navegar(direccion:string){
    //cambiar de pagina
    this.router.navigate([direccion]);
    console.log(direccion);
    
  }

}
