import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(agencia, numero, cliente, saldo) {
    super(agencia, numero, cliente, saldo);
  }
}