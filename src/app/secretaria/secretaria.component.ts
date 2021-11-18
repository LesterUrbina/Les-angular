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
  


  llamaEmpresa(value:String){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
