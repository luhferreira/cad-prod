export class Produto{
  codigo: Number;
  nome: String;
  quantidade: Number;
  valor: String;

  constructor(codigo: Number, nome:String,quantidade:Number,valor:String){
    this.codigo = codigo;
    this.nome = nome;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}