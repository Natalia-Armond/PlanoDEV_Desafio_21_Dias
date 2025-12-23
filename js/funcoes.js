/*
Tarefa de Código dia 1
Introdução às Funções em JavaScript

CONTEXTO:
Funções são blocos de código reutilizáveis. Cruciais para a organização do código.

TEMPO:
35min

PASSOS:
1. Crie um arquivo `funcoes.js`
2. Cole:
   function saudacao(nome) {
     return `Olá, ${nome}!`;
   }
   console.log(saudacao('Natalia'));
3. Terminal:
   node funcoes.js

Esperado:
  Olá, Natalia!

CONCLUÍDO:
O código roda e retorna `Olá, Natalia!`

Tarefa de Código dia 4
Funções em JavaScript
CONTEXTO: Aprender sobre funções. Elas são fundamentais para estruturar código reutilizável. TEMPO: 35min PASSOS: 1. Crie um arquivo `funcoes.js` 2. Cole: ```js function somar(a, b) { return a + b; } console.log(somar(5, 3)); ``` 3. Terminal: `node funcoes.js` Esperado: `8` ✅ CONCLUÍDO: Código roda e retorna `8`.

*/
//Tarefa de Código dia 1
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

//Tarefa de Código dia 4
function somar(a, b) {
  return (a + b);
}

console.log(somar(5, 3))

console.log(saudacao('Natalia'));