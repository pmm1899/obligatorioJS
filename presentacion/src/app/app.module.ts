import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
//import { TareaDetalleComponent } from "./tarea-detalle.component";
import { TiposComponent } from "./tipos/tipos.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, TiposComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
