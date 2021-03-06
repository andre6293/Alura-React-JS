export class Funcionario {
  constructor(nome, salario, cpf) {
    if(this.constructor == Funcionario) {
      throw new Error("A classe abstrata <<Funcionario>> não deve ser instanciada diretamente");
    }

    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._senha;
  }

  cadastrarSenha(novaSenha) {
    this._senha = novaSenha;
  }

  autenticar(senha) {
    if(this._senha != senha) {
      throw new Error("Senha inválida.");
    }
    return "Sucesso";
  }

  get senha() {
    return this._senha;
  }
}