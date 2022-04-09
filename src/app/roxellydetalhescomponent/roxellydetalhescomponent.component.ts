import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roxellydetalhescomponent',
  templateUrl: './roxellydetalhescomponent.component.html',
  styleUrls: ['./roxellydetalhescomponent.component.css'],
})
export class RoxellydetalhescomponentComponent implements OnInit {
  Infos() {
    return [
      'Matéria sendo cursada por DP. Matéria do 5o semestre do Curso de SI. Universidade FATEC Rubens Lara',
    ];
  }
  constructor() {}

  ngOnInit() {}
}
