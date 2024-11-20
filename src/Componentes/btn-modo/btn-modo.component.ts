import { Component, Output,EventEmitter } from '@angular/core';

 @Component({
   selector: 'app-btn-modo',
  standalone: true,
  imports: [],
  templateUrl: './btn-modo.component.html',
 styleUrl: './btn-modo.component.css'
 })
export class BtnModoComponent {
@Output() modoclick =new EventEmitter<boolean>();
modoc=false;//empieza por falso
modo(){//creacion del método
  this.modoc = !this.modoc;
  this.modoclick.emit(this.modoc);
  
 }

 cambiarModo(event: any) {
  this.modoc = event.target.checked;
  this.modoclick.emit(this.modoc);  // Emitir el evento al padre con el nuevo estado
}
}




// this.enProceso = true; // Inicia la animación
// setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//   this.enProceso = false; // Finaliza la animación después de 2 segundos
//   this.aceptarClick.emit(true);
// }, 2000);





















// @Output() aceptarClick = new EventEmitter<boolean>();
//   enProceso = false; // Controla el estado de la animación
//    aceptar(){
//     this.enProceso = true; // Inicia la animación
//     setTimeout(() => {//Ejecuta el codigo despues de 2 segundos
//       this.enProceso = false; // Finaliza la animación después de 2 segundos
//       this.aceptarClick.emit(true);
//     }, 2000);
    
//    }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-btn-modo',
//   standalone: true,
//   template: `<button (click)="toggleDarkMode()">Modo {{ isDarkMode ? 'Claro' : 'Oscuro' }}</button>`,
//   styles: [`
//     button {
//       background-color: #4CAF50;
//       color: white;
//       padding: 10px 20px;
//       cursor: pointer;
//       border-radius: 4px;
//     }
//     button:hover {
//       background-color: #45a049;
//     }
//   `]
// })
// export class BtnModoComponent {
//   isDarkMode = false;

//   toggleDarkMode() {
//     this.isDarkMode = !this.isDarkMode;
//     document.body.classList.toggle('dark-mode', this.isDarkMode);
//   }
// }