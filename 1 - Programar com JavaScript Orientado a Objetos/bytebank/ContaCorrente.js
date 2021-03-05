import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  numero;

  _cliente;
  _saldo;

  static _totalDeContas = 0;
  
  constructor(agencia, numero, cliente, saldo=0) {
    this.agencia = agencia;
    this.numero = numero;
    
    this._cliente = cliente;
    this._saldo = saldo;
    ContaCorrente._totalDeContas += 1;
  }
  
  depositar(valor) {
    if(valor <= 0) throw new Error("Valor inválido");
    this._saldo += valor;
  }

  sacar(valor) {
    if(valor <= 0 || valor > this._saldo) throw new Error("Saldo insuficiente.");
    this._saldo -= valor;
  }

  transferir(valor, contaDestino) {
    this.sacar(valor);
    contaDestino.depositar(valor);
  }

  get cliente() {
    return this._cliente;
  }
  
  set cliente(novoCliente){
    if(novoCliente instanceof Cliente) {
      this._cliente = novoCliente;
    }
  }

  get saldo() {
    return this._saldo;
  }
}