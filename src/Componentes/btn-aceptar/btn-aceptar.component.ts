import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  standalone: true,
  imports: [],
  templateUrl: './btn-aceptar.component.html',
  styleUrl: './btn-aceptar.component.css'
})
export class BtnAceptarComponent {
  // @Output() aceptarClick = new EventEmitter<boolean>();
  // enProceso = false; // Controla el estado de la animación
  //  aceptar(){
  //   this.enProceso = true; // Inicia la animación
  //   setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
  //     this.enProceso = false; // Finaliza la animación después de 2 segundos
  //     this.aceptarClick.emit(true);
  //   }, 2000);
    
  //  }
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    // Emitir un evento para notificar al componente padre
    this.buttonClicked.emit();
  }










  // @Output() onAceptarClick = new EventEmitter<void>();  // Evento que se emite al hacer clic

  // Método que emite el evento cuando se hace clic
  // onClick() {
  //   this.onAceptarClick.emit();
  // }
}
