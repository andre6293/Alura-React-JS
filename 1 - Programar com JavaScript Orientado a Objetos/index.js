class Cliente {
  constructor(nome, cpf, conta) {
    this.nome = nome;
    this.cpf = cpf; 
    this.conta = conta; 
  }

  toText() {
    return `Nome: ${this.nome}\nCPF: ${this.cpf}`;
  }
}

class ContaCorrente {

  constructor(agencia, numero, saldo=0) {
    this.agencia = agencia;
    this.numero = numero;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    } else {
      console.log("Valor inválido, deve ser maior do que zero.")
    }
  }

  sacar(valor) {
    if(this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

const cliente1 = new Cliente("Ricardo", 12312312312, new ContaCorrente(101, 123123));
const cliente2 = new Cliente("Alice", 11122233344, 1001, 0);

cliente1.conta.depositar(50);
cliente1.conta.sacar(100);

console.log(cliente1.conta.saldo)


// const - variável final