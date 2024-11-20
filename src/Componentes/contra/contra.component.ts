import { Component,Output,EventEmitter } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contra',
  standalone: true,
  imports: [FormsModule,NgIf,],
  templateUrl: './contra.component.html',
  styleUrl: './contra.component.css'
})
export class ContraComponent {

  contrasena: string = '';  // Variable para almacenar la contraseña ingresada
  contrasenaValida: boolean = true;  // Flag para verificar si la contraseña es válida

  @Output() contrasenaEmitida = new EventEmitter<string>();  // Emitir la contraseña hacia el componente visualizador

  // Función para verificar si la contraseña es válida
  verificarContrasena() {
    if (this.contrasena === '12345') {
      this.contrasenaValida = true;  // Si la contraseña es correcta
    } else {
      this.contrasenaValida = false;  // Si la contraseña es incorrecta
    }

    // Emitir la contraseña hacia el componente visualizador
    this.contrasenaEmitida.emit(this.contrasena);
  }
 
  }










 // c=false;
  // contra:string="123";
  // contrasenaValida: boolean = true;
  // @Output() contrasenaEmitida = new EventEmitter<string>();
  // onContrasenaChange() {
  //   this.contrasenaValida = this.contrasena.length >= 4;  // Asegura que la contraseña tenga al menos 4 caracteres
  //   if (this.contrasenaValida) {
  //     this.contrasenaEmitida.emit(this.contrasena);  // Emite al padre si la contraseña es válida
  //   }
  // }


