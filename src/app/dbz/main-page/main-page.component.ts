import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public nuevo: Personaje = {
    nombre: '',
    poder: 0,
};

  constructor() {
  }

  ngOnInit(): void {
  }
}
