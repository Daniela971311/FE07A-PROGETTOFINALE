import { Component, OnInit, Input } from '@angular/core';
import { FatturaService } from '../services/fattura.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  template: `
    <div class="container">
      <br>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Data</th>
            <th scope="col">Numero</th>
            <th scope="col">Ragione Sociale</th>
            <th scope="col">Anno</th>
            <th scope="col">Importo</th>
            <th scope="col">Stato</th>
            <th><button class="btn btn-dark">🆕Aggiungi Fattura</button></th>
          </tr>

        </thead>
        <tbody *ngFor="let fattura of fatture; let i = index">
          <tr>
            <th scope="row">{{ fattura.id }}</th>
            <td>{{ fattura.data | date }}</td>
            <td>{{ fattura.numero }}</td>
            <td>{{ fattura.cliente.ragioneSociale }}</td>
            <td>{{ fattura.anno }}</td>
            <td>{{ fattura.importo }}€</td>
            <td>{{ fattura.stato.nome }}</td>
            <td>
              <a
                [routerLink]="['/dettaglifattura/', fattura.id]"
                routerLinkActive="router-link-active"
                class="btn btn-primary btn-sm m-2"
                >Dettagli Fattura</a
              >
            </td>
          </tr>
        </tbody>
      </table>

    <ul class="pagination">
            <li class="page-item">
              <button class="page-link" (click)="caricaprevPag(this.p)">
                Previous
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" (click)="caricanextPag(this.p)">
                Next
              </button>
            </li>
          </ul>

  `,
  styles: [
    `
      .table {
        margin-top: 2rem !important;



      }
      .container{
        background-color:#00000070;
        padding:3rem;
      }
    `
  ],
})
export class FatturePage implements OnInit {
  constructor(
    private fatturaSrv: FatturaService,
  ) {}
  fatture: any;
  numPag!:any;
  p: number = 0;
  k!: number;

  ngOnInit(): void {
    this.caricaPag(0);
  }


caricaPag(k: number) {
  this.fatturaSrv.getByPage(k).subscribe((res) => {
    this.fatture = res.content;
    this.p = k;
    this.numPag = Array(res.pageable.totalPages);
  });
}

caricaprevPag(k: number) {
  if (this.p == 0) {
    this.caricaPag(k);
    return;
  } else {
    --k;
    this.caricaPag(k);
    return;
  }
}

caricanextPag(k: number) {
  if (this.p == 205) {
    this.caricaPag(k);
    return;
  } else {
    ++k;
    this.caricaPag(k);
    return;
  }
}
}
