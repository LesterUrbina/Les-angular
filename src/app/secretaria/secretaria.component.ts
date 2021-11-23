import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  nombre="Marilin";
  apellido="Monroe";
  edad=18;
  
  pais="putito";


  

  llamaEmpresa(value:String){

  }


  //CREANDO LOS PROPERTY BINDING

  habilitarCuadroTexto=false;

  usuarioRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){

    this.usuarioRegistrado=false;
  }


  //CREANDO EVENT BINDING...mostrará una ventana emergente

  setusuarioRegistrado(event:Event){
   // alert("El usuario ya esta registrado")

   //this.textoDeRegistro="El usuaro ya esta registrado"

   if((<HTMLInputElement>event.target).value=="si"){

    this.textoDeRegistro="El usuario ya esta registrado";
   }else{
     this.textoDeRegistro="No hay nadieregistrado";
   }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
