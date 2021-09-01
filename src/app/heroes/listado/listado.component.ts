import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes: string[];
  public deletedHero: string;

  constructor() {
    this.deletedHero = '';
    this.heroes  = ['espiderman', 'julk', 'tor'];
  }

  ngOnInit(): void {
  }

  borrarHeroe = (): void => {
    this.deletedHero = this.heroes.shift() || '';
  }

}
