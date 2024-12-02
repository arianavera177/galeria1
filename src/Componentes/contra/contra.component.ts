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
  //Nuevas variables donde se almacena la contraseña y la misma validada.
  contrasena: string = '';  // Variable para almacenar la contraseña ingresada
  contrasenaValida: boolean = true;  //Variable que almacena la contraseña ya verificada.
  //De hijo a padre, se establece comunicación,con ella la creación de un evento tipo texto.
  @Output() contrasenaEmitida = new EventEmitter<string>();  // Emitir la contraseña hacia el componente visualizador

  // Método para verificar si la contraseña es válida
  verificarContrasena() {
    if (this.contrasena === '12345') {//Si la contraseña es 12345, se manda un mensaje de contraseña correcta.
      this.contrasenaValida = true;  // Si la contraseña es correcta, se emite.
    } else {
      this.contrasenaValida = false;  // Si la contraseña es incorrecta no se emite
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


