import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Array<Editora> = [];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: 'Prentice Hall PTR',
        autor: 'Robert C. Martin',
      },
      {
        codEditora: 2,
        nome: 'Addison-Wesley Professional',
        autor: 'Martin Fowler',
      },
      {
        codEditora: 3,
        nome: 'Alta Books',
        autor: 'Eric Evans',
      },
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
