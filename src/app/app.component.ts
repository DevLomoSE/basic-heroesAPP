import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // *Nombre de la etiqueta para este componente
  templateUrl: './app.component.html',
  // template: 'app-root', // *<= renderiza todo el string de dicho componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
