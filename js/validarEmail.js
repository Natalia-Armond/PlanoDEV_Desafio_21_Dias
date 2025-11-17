/*Tarefa de Código
Validação de Formulário em JavaScript
CONTEXTO: Criar um validador de email. Usado em formulários de cadastro. TEMPO: 35min PASSOS: 1. Crie um arquivo `validarEmail.js` 2. Cole: ```js function validarEmail(email) { return email.includes('@'); } ``` 3. Terminal: `node validarEmail.js` Esperado: `true` ✅ CONCLUÍDO: Código roda e retorna `true`.*/


function validarEmail(email) {
  return email.includes('@');
}

console.log(validarEmail('teste@gmail.com'));