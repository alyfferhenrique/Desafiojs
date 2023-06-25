class Fila {
    constructor() {
      this.dados = [];
    }
  
    adicionar(nome) {
      this.dados.push(nome);
    }
  
    remover() {
      if (this.dados.length === 0) {
        return "A fila está vazia.";
      }
  
      return this.dados.shift();
    }
  }
  
  // Exemplo de uso com entrada de dados e alert:
  const fila = new Fila();
  
  // Solicitar nomes ao usuário
  const numeroNomes = parseInt(prompt("Quantos nomes você deseja adicionar à fila?"));
  
  for (let i = 1; i <= numeroNomes; i++) {
    const nome = prompt("Digite o nome a ser adicionado:");
    fila.adicionar(nome);
  }
  
  // Remover nomes da fila e exibir com alert
  let mensagem = "";
  while (fila.dados.length > 0) {
    const nomeRemovido = fila.remover();
    mensagem += "Nome removido: " + nomeRemovido + "\n";
  }
  
  if (mensagem === "") {
    mensagem = "A fila está vazia.";
  }
  
  alert(mensagem);
  