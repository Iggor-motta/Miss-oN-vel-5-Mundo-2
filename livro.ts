export class Livro {
  codigo: string;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: string;

  constructor(codigo:string, titulo: string, resumo: string, autores: string[], codEditora: string) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
    this.codEditora = codEditora;
  }
}