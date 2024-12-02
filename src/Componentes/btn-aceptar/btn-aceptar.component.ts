import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  standalone: true,
  imports: [],
  templateUrl: './btn-aceptar.component.html',
  styleUrl: './btn-aceptar.component.css'
})
export class BtnAceptarComponent {
 
//   @Output() buttonClicked = new EventEmitter<void>();//va de hijo (este boton) al padre (app.component)
// //metodo para el funcionamiento del boton al hacer click
//   onClick() {
//     // Emitir un evento para notificar al componente padre
//     this.buttonClicked.emit();
//   }


//De hijo a padre, emite un evento string, considera el id de los botones para emitir su evento respectivo.
@Output() buttonClicked = new EventEmitter<string>();//de hijo a padre emite un evento
// Emitir el tipo de animación cuando el botón es presionado
//Cuando el usuario hace clic en el botón, el método onClick() emite el evento, indicando que se debe aplicar la animación de pedida.
onClick() {
  this.buttonClicked.emit('aceptar');//emite la accion aceptar
}
}








 //Animación cuando hago click en el mismo boton
  // @Output() aceptarClick = new EventEmitter<boolean>();
  // enProceso = false; // Controla el estado de la animación
  //  aceptar(){
  //   this.enProceso = true; // Inicia la animación
  //   setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
  //     this.enProceso = false; // Finaliza la animación después de 2 segundos
  //     this.aceptarClick.emit(true);
  //   }, 2000);
    
  //  }













   // @Output() onAceptarClick = new EventEmitter<void>();  // Evento que se emite al hacer clic

  // Método que emite el evento cuando se hace clic
  // onClick() {
  //   this.onAceptarClick.emit();
  // }