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

  @Input() correo: string = '';  // Recibe el correo desde el componente correo
  @Input() contrasena: string = '';  // Recibe la contraseña desde el componente contra
  @Input() texto: string = '';  // Recibe el texto
     
// Esta propiedad se activa cuando el botón "Aceptar" es presionado
@Input() animateButton: boolean = false;
 

  // Método para manejar la animación cuando el botón "Aceptar" se hace clic
  triggerAnimation() {
    this.animateButton = true;
  }
 
  // @Input() correo: string = '';
  // @Input() contrasena: string = '';
  // @Input() texto: string = '';
  // isClicked: boolean = false;

  // toggleAnimation() {
  //   this.isClicked = !this.isClicked;
  // }
}
