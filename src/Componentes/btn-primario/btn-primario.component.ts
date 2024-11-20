import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-btn-primario',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn-primario.component.html',
  styleUrl: './btn-primario.component.css'
})
export class BtnPrimarioComponent {
  @Input() activarAnimacion: boolean = false;  // Recibe la señal para activar la animación

  // Detecta cambios en la propiedad activarAnimacion
  ngOnChanges(changes: SimpleChanges) {
    if (changes['activarAnimacion'] && this.activarAnimacion) {
      this.iniciarAnimacion();
    }
  }

  // Método para iniciar la animación de rodar
  iniciarAnimacion() {
    const boton = document.getElementById('botonAnimado');
    if (boton) {
      boton.classList.add('rodar');  // Se añade la clase de animación
      setTimeout(() => {
        boton.classList.remove('rodar');  // Se elimina la clase después de la animación
      }, 1000);  // Duración de la animación (1 segundo)
    }
  }
















  // @Output() prime= new EventEmitter<boolean>();
// inicio = false; // Controla el estado de la animación
// primario(){
//   this.inicio = true; // Inicia la animación
//   setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//     this.inicio = false; // Finaliza la animación después de 2 segundos
//     this.prime.emit(true);
//   }, 2000);
// }
  
}

// @Output() aceptarClick = new EventEmitter<boolean>();
//   enProceso = false; // Controla el estado de la animación
//    aceptar(){
//     this.enProceso = true; // Inicia la animación
//     setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//       this.enProceso = false; // Finaliza la animación después de 2 segundos
//       this.aceptarClick.emit(true);
//     }, 2000);
    
//    }

