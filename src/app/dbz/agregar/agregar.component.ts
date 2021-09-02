import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input()
  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  /*
  @Output()
  onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  */

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  agregar(): void{
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.onNewPersonaje.emit( this.nuevo );
    this.dbzService.addNewPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }

}
