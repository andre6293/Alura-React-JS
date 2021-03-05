import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12312312312);
const conta1 = new ContaCorrente(123, 12345, cliente1);

const conta2 = new ContaCorrente(123, 32145, new Cliente("João", 32132132132));

conta1.depositar(1200);
conta1.sacar(200);
conta1.transferir(400, conta2);


console.log(conta1);
console.log(conta2.saldo);
console.log(conta1.cliente.cpf);

console.log(ContaCorrente._totalDeContas);