import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Krillin',
          poder: 7000,
        },
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 4500,
        }
    ];

    constructor() {}

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    public addNewPersonaje( newPersonaje: Personaje ): void{
        this._personajes.push( newPersonaje );
    }

}