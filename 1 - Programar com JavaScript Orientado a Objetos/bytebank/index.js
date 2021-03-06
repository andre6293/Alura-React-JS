import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente = new Cliente("Ricardo", 12312312312);

const contaCorrente = new ContaCorrente(123, 12345, cliente, 1000);
const contaPoupanca = new ContaPoupanca(150, cliente, 123, 1000);

// console.log(contaPoupanca);
// console.log(contaCorrente);


// contaCorrente.sacar(100);
// contaPoupanca.sacar(100);

const conta = new Conta(123, 12345, cliente, 200);


console.log(contaPoupanca);
console.log(contaCorrente);