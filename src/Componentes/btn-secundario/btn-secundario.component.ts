import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  imports: [],
  templateUrl: './btn-secundario.component.html',
  styleUrl: './btn-secundario.component.css'
})
export class BtnSecundarioComponent {
  @Output() secu= new EventEmitter<boolean>();
  ini = false; // Controla el estado de la animación
  secundario(){
    this.ini = true; // Inicia la animación
    setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
      this.ini = false; // Finaliza la animación después de 2 segundos
      this.secu.emit(true);
    }, 2000);
}
}