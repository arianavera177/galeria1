import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  imports: [],
  templateUrl: './btn-secundario.component.html',
  styleUrl: './btn-secundario.component.css'
})
export class BtnSecundarioComponent {
//Metodo cuando hago click en el boton y en el mismo pasa la acción
//   @Output() secu= new EventEmitter<boolean>();
//   ini = false; // Controla el estado de la animación
//   secundario(){
//     this.ini = true; // Inicia la animación
//     setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//       this.ini = false; // Finaliza la animación después de 2 segundos
//       this.secu.emit(true);
//     }, 2000);
// }

//ejercicio de la prueba

//De hijo a padre, emite un evento string, considera el id de los botones para emitir su evento respectivo.
@Output() buttonClicked = new EventEmitter<string>();

// Emitir el tipo de animación cuando el botón es presionado
//Cuando el usuario hace clic en el botón, el método onClick() emite el evento, indicando que se debe aplicar la animación pedida.
onClick() {
  this.buttonClicked.emit('secundario');
}





}