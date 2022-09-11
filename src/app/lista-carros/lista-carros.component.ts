import {Component, OnInit} from '@angular/core';
import {CarroService} from "../../service/carro.service";

export interface Carro {
  _id: string,
  placa: string,
  chassi: string,
  renavam: string,
  modelo: string,
  marca: string,
  ano: string,
}
@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.scss']
})
export class ListaCarrosComponent implements OnInit {

  carros: Carro[] = [];

  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.buscarTodosOsCarros();
  }

  buscarTodosOsCarros() {
    this.carroService.buscarTodos().subscribe((response: Carro[]) => {
      this.carros = response;
    })
  }

  deletar(id: any) {
    this.carroService.deletar(id).subscribe(() => {
      this.buscarTodosOsCarros();
    }, (err) => {
      console.error("não foi possivel deletar o carro.")
    })
  }
}
