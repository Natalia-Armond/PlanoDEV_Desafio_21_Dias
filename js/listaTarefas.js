// DIA 14 - Lista de Tarefas
const tarefas = [];

function adicionarTarefa(tarefa) { 
  tarefas.push(tarefa); 
  console.log(tarefas); 
}

// Teste da função
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");