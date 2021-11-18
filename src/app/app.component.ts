import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//definicion de una clase
  title = 'A-miPrimerAplicativo';
  //variable title que tiene un valor definido, a esto se le llama propiedad

  //creamos una nueva propiedad
  saludo="Hola mis chamas"
}
