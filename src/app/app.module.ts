import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SecretariaComponent } from './secretaria/secretaria.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    SecretariaComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
