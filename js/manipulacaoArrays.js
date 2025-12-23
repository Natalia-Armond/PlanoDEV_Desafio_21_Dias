// DIA 16/18 - Manipulação de Arrays
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log(frutas);

// Outros métodos de array
console.log('Primeira fruta:', frutas[0]);
console.log('Tamanho do array:', frutas.length);

// Removendo último elemento
let ultimaFruta = frutas.pop();
console.log('Fruta removida:', ultimaFruta);
console.log('Array após remoção:', frutas);