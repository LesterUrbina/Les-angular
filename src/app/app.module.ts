import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
