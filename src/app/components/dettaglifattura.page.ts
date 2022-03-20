import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fattura } from '../_models/Fattura';
import { FatturaService } from '../services/fattura.service';
import { StatoFattura } from '../_models/statoFattura';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <div class="container p-5 mt-5 sfondo text-center">
      <div class="card" style="width:38rem;">
        <div class="card-body">
          <h5 class="card-title">{{ fattura.cliente.ragioneSociale }}</h5>
          <h5 class="card-subtitle mb-2 text-muted">
            {{ fattura.cliente.nomeContatto }}
            {{ fattura.cliente.cognomeContatto }}
          </h5>
          <p class="card-text">Importo: {{ fattura.importo }} €</p>
          <p class="card-text">
            Stato Fattura :
            <select name="stato" id="stato" (change)="onModifica($event)">
              <option value="{{ fattura.stato.id }}" selected>
                {{ fattura.stato.nome }}
              </option>
              <option *ngIf="fattura.stato.id == 1" value="2">PAGATA</option>
              <option *ngIf="fattura.stato.id == 2" value="1">
                NON PAGATA
              </option>
            </select>
          </p>
          <p class="card-text">ID unico: {{ fattura.id }}</p>
          <p class="card-text">
            Data : {{ fattura.data | date: 'dd/MM/yyyy, hh:mm a' }}
          </p>
          <span *ngIf="modificato" class="btn btn-secondary " (click)="inviadati()"
            >📝MODIFICA</span
          >
          <span class="btn btn-danger  ms-4" (click)="openVerticallyCentered(content)"
            >🗑 ELIMINA</span
          >
        </div>
      </div>
    </div>

    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Elimina fattura</h4>
        <button
          type="button"
          class="btn-close "
          aria-label="Close"
          (click)="modal.dismiss('Cross click')"
        ></button>
      </div>
      <div class="modal-body">
        <p>Sei sicuro di voler eliminare definitivamente questa fattura?</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          (click)="modal.close('Close click')"
        >
          Annulla
        </button>
        <button type="button" class="btn btn-danger" (click)="elimina()">
          ELIMINA FATTURA
        </button>
      </div>
    </ng-template>
  `,
  styles: [ `
  .card{
    left: 20vw;
    background-color:#00012af2;
    color:white;
    border-radius: 10px;
  }
  .sfondo{
    background-color:#00000070;

  }
  `],
})
export class DettaglifatturaPage implements OnInit {
  fattura!: Fattura;
  modificato!: boolean;
  nuovoStato!: StatoFattura;
  k!: number;
  x!: number;
  constructor(
    private fatturaSrv: FatturaService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.carica(id);
    });
  }

  async carica(id: number) {
    await this.fatturaSrv.clickdettagli(id).subscribe((res) => {
      this.fattura = res;
      console.log(this.fattura);
    });
  }

  onModifica(e: any) {
    this.modificato = true;
    this.k = e.target.value;

    if (this.k == 2) {
      this.nuovoStato = {
        id: 2,
        nome: 'PAGATA',
      };
    } else {
      this.nuovoStato = {
        id: 1,
        nome: 'NON PAGATA',
      };
    }
    this.fattura.stato = this.nuovoStato;
  }

  inviadati() {
    this.fatturaSrv.modifica(this.fattura).subscribe((res) => {
      this.modificato = false;
      alert('Modifica effetuata')
    });
  }

  elimina() {
    this.fatturaSrv.onElimina(this.fattura.id).subscribe((res) => {
      this.modalService.dismissAll();
      this.router.navigate(['/fatture']);
    });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
