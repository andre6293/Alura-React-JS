import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static _totalDeContas = 0;
  
  constructor(agencia, numero, cliente, saldo=0) {
    super(agencia, numero, cliente, saldo);
    ContaCorrente._totalDeContas += 1;
  }

  sacar(valor) {
    let taxa = 1.1; //10 por cento
    this._sacar(valor, taxa);
  }
}