import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roxellylistacomponent',
  templateUrl: './roxellylistacomponent.component.html',
  styleUrls: ['./roxellylistacomponent.component.css'],
})
export class RoxellylistacomponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public tarefa = '';
  public items = [];

  addTarefa() {
    this.items.push(this.tarefa);
    localStorage.setItem('item', this.tarefa);
  }
  remover(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

