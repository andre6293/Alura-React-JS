# Notas
## Conteúdo
- [Módulo 1 - Programar com JavaScript Orientado a Objetos](#m-dulo-1---programar-com-javascript-orientado-a-objetos)
  * [Variáveis privadas](#vari-veis-privadas)
  * [Early return](#early-return)
  * [Primitivos](#primitivos)
  * [Getters e Setters](#getters-e-setters)
  * [Atributos estáticos](#atributos-est-ticos)
  * [Métodos abstratos](#m-todos-abstratos)
  * [Ducky type](#ducky-type)
  * [Notas adicionais](#notas-adicionais)
- [Módulo 2 - Lidar com class components](#m-dulo-2---lidar-com-class-components)
  * [JSX](#jsx)
  * [React e *react*](#react-e--react-)
  * [Index.js e Index.html (nomes padrão)](#indexjs-e-indexhtml--nomes-padr-o-)
  * [Tags](#tags)
  * [Componentização](#componentiza--o)
  * [Simple React Snippets](#simple-react-snippets)
  * [Notas adicionais](#notas-adicionais-1)
- [Módulo 3 - Utilizar uma abordagem moderna](#m-dulo-3---utilizar-uma-abordagem-moderna)
- [Módulo 4 - Conhecer o Ecossistema](#m-dulo-4---conhecer-o-ecossistema)

---

## Módulo 1 - Programar com JavaScript Orientado a Objetos
### Variáveis privadas
Não são possíveis oficialmente em Javascript devido a linguagem ser por padrão de escopo aberto. Existe somente uma convenção de nomeação para usar-se \_ (underscore) como prefixo para **simbolizar** uma variável que deveria ser privada

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
* Para importar classes, métodos e funções de outros arquivos é necessário criar um módulo. Para isso deve-se usar "npm init" no diretório do projeto
* É necessário chamar o construtor da classe-mãe dentro das classes que a herdem utilizando *super(args)* dentro do construtor da classe-filha
* É possível verificar como uma classe foi instanciada usando this.constructor dentro dela. Com esse pensamento é possível evitar que uma super-classe seja instanciada diretamente. Dessa forma ela se torna *praticamente* uma **classe abstrata**
* É possível verificar a presença de um método dentro de um objeto utilizando *"nomeDoMetodo/variavel in nomeDoObjeto"* e pra garantir tratar-se concretamente de um método: *"nomeDoObjeto.nomeDoMetodo instanceOf Function"*

---

## Módulo 2 - Lidar com class components
### JSX
É uma extensão da sintaxe do Javascript usada dentro do React. JSX produz *elementos* do React.

### React e *react*
React (com letra maiúscula) é a forma que tratamos o ecossistema, enquanto react é a nomenclatura da biblioteca

### Index.js e Index.html (nomes padrão)
O React utiliza o arquivo index.js para inserir todo o conteúdo JSX do App.js no index.html, tornando possível que esse template seja exibido no navegador. Ele faz isso através de um método interno do ReactDOM chamado render() (que também utiliza JSX ao passar < App /> como parâmetro).

### Tags
* <ul\> - unordered list
* <li\> - item de lista de tópicos

### Componentização
Permite separar a interface de usuário em peças independentes e reutilizáveis. O React permite a definição de componentes por classes ou funções.

### Simple React Snippets
Extensão de Burke Holland que acelera o processo de escrita de componentes do React usando snippets como os abaixo:
* imr - importar react
* imrc - importa react e component
* cc - cria um class component

### Método .bind()

### Atributos props dos componentes React

### State e Props
* State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser passado como props!
* Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.

### Virtual DOM

### Notas adicionais 
* A função App, por ser um elemento JSX, deve retornar apenas um elemento único. Erro relacionado: *Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag".*
* No css é possível selecionar as seções tanto por seu nome absoluto, quanto *.nomeTagMãe .nomeTagFilha*
* Os arquivos css são unificados em um único arquivo no React, portanto é mandatório ter nomes únicos (uniques) para cada componente e seção
---

## Módulo 3 - Utilizar uma abordagem moderna

---

## Módulo 4 - Conhecer o Ecossistema

---
Andre Pinto (mar 21 - )
