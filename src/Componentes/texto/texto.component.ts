import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {
  // texto: string = '';  // Variable para almacenar el texto ingresado
  // textoValido: boolean = true;  // Validación del texto (si es necesario)

  // @Output() textoEmitido = new EventEmitter<string>();  // Emitir el texto al componente principal

  // // Función para verificar si el texto es válido
  // verificarTexto() {
  //   // Por ejemplo, validamos que el texto no esté vacío
  //   this.textoValido = (this.texto.trim().length > 0); // Valida si el texto no está vacío

  //   // Emitir el texto al componente principal
  //   this.textoEmitido.emit(this.texto);
  // }

  texto: string = '';  // Variable para almacenar el texto
  textoValido: boolean = true;  // Validación del texto (si es válido o no)

  // Expresión regular para validar el texto
  textoValidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  @Output() textoEmitido = new EventEmitter<string>();  // Emitir el texto al componente principal

  verificarTexto() {
    // Validar el texto utilizando la expresión regular
    this.textoValido = this.textoValidoRegex.test(this.texto);

    // Emitir el texto si es válido, si no es válido no se emite nada
    if (this.textoValido) {
      this.textoEmitido.emit(this.texto);
    }
  }


  // texto: string = '';

  // @Output() textoEmitido = new EventEmitter<string>();

  // onTextoChange() {
  //   this.textoEmitido.emit(this.texto);
  // }
}
