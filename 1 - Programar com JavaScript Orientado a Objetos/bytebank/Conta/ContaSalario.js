import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(agencia, numero, cliente, saldo) {
    super(agencia, numero, cliente, saldo);
  }

  sacar(valor) {
    let taxa = 1.01; //1 por cento
    return this._sacar(valor, taxa);
  }
}