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

  aceptarClick(){

  }
  parar(){

  }
  
  //Actual
   isDarkMode: boolean = false;  // Estado del modo (oscuro o claro)

   toggleDarkMode(isDark: boolean) {
     this.isDarkMode = isDark;  // Cambiar el estado según el evento recibido
   }
   correo: string = '';  // Variable para almacenar el correo ingresado
   contrasena: string = '';  // Variable para almacenar la contraseña ingresada
   texto: string = '';  // Variable para almacenar el texto ingresado
   
   animateVisualizador = false;

   onButtonClicked() {
     this.animateVisualizador = true;
 
     // Después de un tiempo, desactivar la animación (1 segundo en este caso)
     setTimeout(() => {
       this.animateVisualizador = false;
     }, 1000);
   }

  













  //  // Método para manejar el evento de clic en el botón de Aceptar
  // onButtonClicked() {
  //   // Aquí llamamos al método del visualizador para activar la animación
  //   this.triggerAnimation();
  // }

  // // Puedes definir el método aquí o pasarlo directamente como Output al visualizador
  // triggerAnimation() {
  //   // Llamada para activar la animación
  //   console.log('Activando animación');
  // }














   
  



   //fin
  //  usuario: string = '';
  //  contrasena: string = '';
  //  texto: string = '';
 
  //  // Método para recibir el correo
  //  recibirCorreo(correo: string) {
  //    this.usuario = correo;
  //  }
 
  //  // Método para recibir la contraseña
  //  recibirContrasena(contrasena: string) {
  //    this.contrasena = contrasena;
  //  }
 
  //  // Método para recibir el texto
  //  recibirTexto(texto: string) {
  //    this.texto = texto;
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

  }

