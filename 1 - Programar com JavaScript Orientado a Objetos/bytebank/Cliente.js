export class Cliente {
  constructor(nome, cpf, senha="12345") {
    this._nome = nome;
    this._cpf = cpf; 
    this._senha = senha
  }

  get cpf(){
    return this._cpf;
  }

  autenticar(senha) {
    return this._senha == senha;
  }
}