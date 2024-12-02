import { Component,Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnAceptarComponent } from '../Componentes/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from '../Componentes/btn-cancelar/btn-cancelar.component';
import { ContraComponent } from "../Componentes/contra/contra.component";
import { TextoComponent } from "../Componentes/texto/texto.component";
import { CorreoComponent } from "../Componentes/correo/correo.component";

import { BtnModoComponent } from '../Componentes/btn-modo/btn-modo.component';
import { BtnPrimarioComponent } from '../Componentes/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from '../Componentes/btn-secundario/btn-secundario.component';
import { VisualizadorComponent } from '../Componentes/visualizador/visualizador.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnAceptarComponent, BtnCancelarComponent, ContraComponent, TextoComponent, CorreoComponent, BtnModoComponent, VisualizadorComponent, BtnPrimarioComponent, BtnSecundarioComponent,NgClass,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje: string = ''; // Variable para mostrar un mensaje
  //Actual
   isDarkMode: boolean = false;  // Estado del modo (oscuro o claro)
   toggleDarkMode(isDark: boolean) {
     this.isDarkMode = isDark;  // Cambiar el estado según el evento recibido
   }
   correo: string = '';  // Variable para almacenar el correo ingresado
   contrasena: string = '';  // Variable para almacenar la contraseña ingresada
   texto: string = '';  // Variable para almacenar el texto ingresado
   
  // //Animación del boton aceptar
  //  animateVisualizador = false;
  //   onButtonClicked() {
  //    this.animateVisualizador = true;
 
  //    // Después de un tiempo, desactivar la animación (1 segundo en este caso)
  //   setTimeout(() => {
  //      this.animateVisualizador = false;
  //    }, 1000);
  //  }
// Variable para almacenar el tipo de animación para el visualizador, empieza con ningún valor, por eso esta sin nada en las comillas.
animateVisualizador: string = '';

// Método para cambiar la animación basada en el botón presionado
onButtonClicked(tipo: string) {//Se define como tipo string debido a que usan el mismo metodo pero cambia su nombre, primario, secundario, aceptar.
  this.animateVisualizador = tipo;//asigna el nombre de la animación, a la variable animateVisualizador

  // Temporizador: Después de 1 segundo, quitar la animación (para permitir que se repita)
  setTimeout(() => {//Función que establece la ejecución de la animación durante 1 segundo, luego de este tiempo, desaparece.
    this.animateVisualizador = '';
  }, 1000);
}

  }
   


 //  animateVisualizador = false;
  //  onButtonClicked() {
  //    this.animateVisualizador = true;
 
  //    // Después de un tiempo, desactivar la animación (1 segundo en este caso)
  //    setTimeout(() => {
  //      this.animateVisualizador = false;
  //    }, 1000);
  //  }



















   
  



 
   
 



















//   modos(modoc: boolean) {
//     this.isDarkMode = modoc;
//   }

// isDarkMode: boolean = false;
  






// Estado del modo oscuro
  // isDarkMode: boolean = false;

  // // Método que maneja el evento del hijo (toggle)
  // toggleDarkMode(modoc: boolean) {
  //   this.isDarkMode = modoc; // Cambia el estado de isDarkMode según el valor del evento
  //   console.log('Modo oscuro activado:', this.isDarkMode);
  // }


