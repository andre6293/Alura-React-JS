export class Cliente {
  nome;
  _cpf;
  
  constructor(nome, cpf) {
    this._nome = nome;
    this._cpf = cpf; 
  }

  get cpf(){
    return this._cpf;
  }
}