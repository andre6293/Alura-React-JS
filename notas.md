# Notas
## Conteúdo
(to-do)

---

## Módulo 1 - Programar com JavaScript Orientado a Objetos
### Variáveis privadas
Não são possíveis oficialmente em Javascript devido a linguagem ser por padrão de escopo aberto. Existe somente uma convenção de nomeação para usar-se \_ (underscore) como prefixo para **Simbolizar** uma variável que deveria ser privada

### Early return
Resume-se a inserir as condições negativas antes da implementação de um código. Dessa forma são evitados cálculos desnecessários aumentando o desempenho do código.

### Primitivos
Dependendo dos valores que uma variável guarda o JS trata ela de forma diferente. Passando ela como uma cópia de seu valor ou como uma referência ao espaço de memória onde ela está guardada. Ele faz isso baseado justamente nos valores que a variável guarda. Tipos primitivos são sempre passados como um valor, enquanto que tipos não primitivos sempre são passados por referência.

### Getters e Setters
São considerados *assessores* e não são funções normais. Usam as palavras-chave **get** e **set**. Para chamá-los posteriormente não se usam parênteses.

### Atributos estáticos
Para acessá-los deve-se utilizar o nome da classe-mãe em vez da palavra-chave *super*.

### Métodos abstratos
Ao criar métodos que devem ser abstratos em uma *classe abstrata* (não é de fato uma classe abstrata, mas funciona de forma parecida) é interessante lançar uma mensagem de erro dentro do método para o caso de um usuário não sobrescreverem tais métodos nas classes-filhas. Dessa forma evita-se possíveis desvios nas regras de negócio e erros futuros.

### Ducky type
É um estilo de tipagem em que os métodos e propriedades de um objeto determinam a semântica válida, em vez de sua herança de uma classe particular ou implementação de uma interface explicita. *Quando eu vejo um pássaro que caminha como um pato, nada como um pato e grasna como um pato, eu chamo aquele pássaro de pato.*

### Notas adicionais
* const - variável final, não alterável
* Encapsulamentos são bem fracos em JS
* Para importar classes, métodos e funções de outros arquivos é necessário criar um método. Para isso deve-se usar "npm init" no diretório do projeto
* É necessário chamar o construtor da classe-mãe dentro das classes que a herdem utilizando *super(args)* dentro do construtor da classe-filha
* É possível verificar como uma classe foi instanciada usando this.constructor dentro dela. Com esse pensamento é possível evitar que uma super-classe seja instanciada diretamente. Dessa forma ela se torna *praticamente* uma **classe abstrata**
* É possível verificar a presença de um método dentro de um objeto utilizando *"nomeDoMetodo/variavel in nomeDoObjeto"* e pra garantir tratar-se concretamente de um método: *"nomeDoObjeto.nomeDoMetodo instanceOf Function"*

---

## Módulo 2 - Lidar com class components

---

## Módulo 3 - Utilizar uma abordagem moderna

---

## Módulo 4 - Conhecer o Ecossistema

---
Andre Pinto (mar 21 - )
