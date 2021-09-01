import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent{

    public nombre: string = 'Espider man';
    public edad: number = 24;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    getNombre = (): string => {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre = (): string => {
        return this.nombre = 'Airon Man';
    }

    cambiarEdad = (): number => {
        return this.edad = 45;
    }

}
