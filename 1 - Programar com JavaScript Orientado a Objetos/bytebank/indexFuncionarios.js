import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("David Lynch", 11000, 12312312312);
const gerente = new Gerente("Michael Scott", 4500, 12312312312);
const cliente = new Cliente("Joana", 12345678912)

diretor.cadastrarSenha("12345")
gerente.cadastrarSenha("54321")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "54321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);