import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("David Lynch", 11000, 12312312312);
const gerente = new Gerente("Michael Scott", 4500, 12312312312);

diretor.cadastrarSenha("12345")

const estaLogado = SistemaAutenticacao.login(diretor, "12345");

console.log(estaLogado);
