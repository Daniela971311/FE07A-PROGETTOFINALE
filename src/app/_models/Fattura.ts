

  export class Fattura {
    id!: number;
    data!: string;
    numero!: number;
    anno!: any;
    importo!: number;
    stato!: {
        id: number,
        nome: string
    };
    cliente!: any
  }

