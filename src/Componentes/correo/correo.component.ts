import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-correo',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './correo.component.html',
  styleUrl: './correo.component.css'
})
export class CorreoComponent {
//   correo:string="arianav981@gmail.com";
//  @Output() correoEmitido =new EventEmitter<string> ();
  // vCorreo(){
  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   this.correoValido = emailPattern.test(this.correo);
  //   if (this.correoValido) {
  //     this.correoEmitido.emit(this.correo);  
  // }
   
  // correo: string = '';
  // esCorreoValido: boolean = false;
  // correoCorrecto: string = 'arianav981@gmail.com';

  // @Output() correoValido: EventEmitter<string> = new EventEmitter<string>();

  // // Validación del correo: debe ser igual a 'arianav981@gmail.com' y tener formato de correo válido
  // validarCorreo() {
  //   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   this.esCorreoValido = regex.test(this.correo) && this.correo === this.correoCorrecto;

  //   // Emitimos el correo si es válido
  //   if (this.esCorreoValido) {
  //     this.correoValido.emit(this.correo);  // Emitimos el correo válido al visualizador
  //   }
  // }

  // email=false;
  correo: string = '';  // Variable para almacenar el correo ingresado
  correoValido: boolean = true;  // Flag para verificar si el correo es válido

  // Este evento emite el correo ingresado hacia el componente visualizador
  @Output() correoEmitido = new EventEmitter<string>();

  // Función para verificar si el correo es válido
  verificarCorreo() {
    if (this.correo === 'arianav981@gmail.com') {
      this.correoValido = true;  // Si es el correo correcto
    } else {
      this.correoValido = false;  // Si el correo es incorrecto
    }

    // Emitir el correo al componente visualizador
    this.correoEmitido.emit(this.correo);
  }
}
