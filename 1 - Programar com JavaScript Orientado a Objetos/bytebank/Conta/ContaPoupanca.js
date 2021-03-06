import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(agencia, numero, cliente, saldo) {
    super(agencia, numero, cliente, saldo);
  }

  sacar(valor) {
    let taxa = 1.02; //2 por cento
    return this._sacar(valor, taxa);
  }
}