import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {
  Pokemon={
    "0": {
      "id": "1",
      "Nombre": "Bulbasaur",
      "Tipo": "Finalizado",
      "Puntos_salud": 100,
      "Puntos_Ataque": 20,
      "Puntos_Defensa": 25
    },
    "1": {
      "id": "2",
      "Nombre": "Squirtle",
      "Tipo": "Finalizado",
      "Puntos_salud": 100,
      "Puntos_Ataque": 20,
      "Puntos_Defensa": 25
    },
    "2": {
      "id": "3",
      "Nombre": "Charmander",
      "Tipo": "asdasdasd",
      "Puntos_salud": 100,
      "Puntos_Ataque": 20,
      "Puntos_Defensa": 25
    },
    "3": {
      "id": "4",
      "Nombre": "Pikachu",
      "Tipo": "asdasdasd",
      "Puntos_salud": 100,
      "Puntos_Ataque": 20,
      "Puntos_Defensa": 25
    },
    "4": {
      "id": "5",
      "Nombre": "Eevee",
      "Tipo": "asdasdasd",
      "Puntos_salud": 100,
      "Puntos_Ataque": 20,
      "Puntos_Defensa": 25
    }
  }
  result = Object.keys(this.Pokemon).map(e=>this.Pokemon[e]);
  ok:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
