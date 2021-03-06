export class Conta {
  constructor(agencia, numero, cliente, saldo=0){
    if(this.constructor == Conta) {
      throw new Error("A classe-mãe <<Conta>> não deve ser instanciada diretamente");
    }

    this.agencia = agencia;
    this.numero = numero;
    
    this._cliente = cliente;
    this._saldo = saldo;
  }

  depositar(valor) {
    if(valor <= 0) throw new Error("Valor inválido");
    this._saldo += valor;
  }

  sacar(valor) {
    let taxa = 1;
    this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    let valorSacado = valor * taxa;
    if(valor <= 0 || valorSacado > this._saldo) throw new Error("Saldo insuficiente.");
    this._saldo -= valorSacado;
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