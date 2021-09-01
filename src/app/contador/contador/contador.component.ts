import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Contador</h1>

        <!-- <button (click)="sumar()">+1</button> -->
        <!-- <span>{{ contador+1 }}</span> -->
        <!-- <button (click)="restar()">-1</button> -->

        <button (click)="actionContador(1, 'sumar')">+1</button>
        <span>{{ contador }}</span>
        <button (click)="actionContador(2, 'restar')">-1</button>

        <hr>
        <br>
        <h2>BASE {{ base }}</h2>
        <button (click)="acumular('sumar')">+{{ base }}</button>
        <span>{{ contador2 }}</span>
        <button (click)="acumular('restar')">-{{ base }}</button>
    `,
})
export class ContadorComponent {
    public title: string = 'bases';
    public contador: number = 0;
    public contador2: number = 0;
    public base: number = 5;

    actionContador(valor: number, accion: string ): number{
      this.contador = (accion === 'sumar')
                      ? this.contador += valor
                      : this.contador -= valor;
      return this.contador;
    }

    acumular(accion: string): void{
      this.contador2 = (accion === 'sumar')
                      ? this.contador2 += this.base
                      : this.contador2 -= this.base;
    }

    sumar = () => { this.contador += 1; };
    restar = () => { this.contador -= 1; };
}