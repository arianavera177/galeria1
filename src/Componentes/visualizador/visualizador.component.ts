import { Component,Input} from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [NgIf],
  templateUrl: './visualizador.component.html',
  styleUrl: './visualizador.component.css'
})
export class VisualizadorComponent {
//Recibe de padre a hijo, estas nuevas variables almacenan los datos.
  @Input() correo: string = '';  // Recibe el correo desde el componente correo, almacena el valor dado.
  @Input() contrasena: string = '';  // Recibe la contraseña desde el componente contra, almacena el valor dado.
  @Input() texto: string = '';  // Recibe el texto, almacena el valor dado.
     
//Recibe de padre a hijo el tipo de animacion a realizar, teniendo encuenta que cada una de ellas se diferencian por su nombre.
@Input() animateButton: string = ''; // Recibe el tipo de animación
 }












  // // Esta propiedad se activa cuando el botón "Aceptar" es presionado
// @Input() animateButton: boolean = false;
//   // Método para manejar la animación cuando el botón "Aceptar" se hace clic
//   triggerAnimation() {
//     this.animateButton = true;
//   }







  // @Input() correo: string = '';
  // @Input() contrasena: string = '';
  // @Input() texto: string = '';
  // isClicked: boolean = false;

  // toggleAnimation() {
  //   this.isClicked = !this.isClicked;
  // }

