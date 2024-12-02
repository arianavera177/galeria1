import { Component, Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-btn-primario',
  standalone: true,
  imports: [],
  templateUrl: './btn-primario.component.html',
  styleUrl: './btn-primario.component.css'
})
export class BtnPrimarioComponent {
//   @Output() primar = new EventEmitter<void>();//va de hijo (este boton) al padre (app.component)
// //metodo para el funcionamiento del boton al hacer click
//   prima() {
//     // Emitir un evento para notificar al componente padre
//     this.primar.emit();
//   }

//De hijo a padre, emite un evento string, considera el id de los botones para emitir su evento respectivo.
@Output() buttonClicked = new EventEmitter<string>();//de hijo a padre emite un evento

// Emitir el tipo de animación cuando el botón es presionado
//Cuando el usuario hace clic en el botón, el método onClick() emite el evento, indicando que se debe aplicar la animación de pedida.
onClick() {
  this.buttonClicked.emit('primario');
}
 


  }















//Animacion en el mismo boton
  // @Output() prime= new EventEmitter<boolean>();
// inicio = false; // Controla el estado de la animación
// primario(){
//   this.inicio = true; // Inicia la animación
//   setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//     this.inicio = false; // Finaliza la animación después de 2 segundos
//     this.prime.emit(true);
//   }, 2000);
// }
  


