import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './btn-cancelar.component.html',
  styleUrl: './btn-cancelar.component.css'
})
export class BtnCancelarComponent {
// @Output() parar= new EventEmitter<boolean>();
// Cancelar(){
//   this.parar.emit(true);
// }
//Para el boton cancealar

//De hijo a padre, emite un evento string, considera el id de los botones para emitir su evento respectivo.
@Output() buttonClicked = new EventEmitter<string>();
// Emitir el tipo de animación cuando el botón es presionado
//Cuando el usuario hace clic en el botón, el método onClick() emite el evento, indicando que se debe aplicar la animación de pedida.
  onClick() {
    this.buttonClicked.emit('cancelar');
  }

























//Cuando hace click en si mismo
// @Output() parar = new EventEmitter<boolean>();
//   cancel = false; // Controla el estado de la animación
//    Cancelar(){
//     this.cancel = true; // Inicia la animación
//     setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//     this.cancel = false; // Finaliza la animación después de 2 segundos
//       this.parar.emit(true);
//     }, 2000);
     
//    }
}
