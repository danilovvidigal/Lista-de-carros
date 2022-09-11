import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { NovoCarroComponent } from './novo-carro/novo-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCarrosComponent,
    NovoCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
