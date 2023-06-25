class Pilha {
    constructor() {
      this.dados = [];
    }
  
    adicionar(nome) {
      this.dados.push(nome);
    }
  
    adicionarNomes(nomes) {
      if (Array.isArray(nomes)) {
        nomes.forEach((nome) => this.adicionar(nome));
      }
    }
  
    remover() {
      if (this.dados.length === 0) {
        return "A pilha está vazia.";
      }
  
      return this.dados.pop();
    }
  }
  
  // Exemplo de uso com entrada de dados e alert:
  const pilha = new Pilha();
  
  // Solicitar nomes ao usuário
  const numeroNomes = parseInt(prompt("Quantos nomes você deseja adicionar à pilha?"));
  
  for (let i = 1; i <= numeroNomes; i++) {
    const nome = prompt("Digite o nome a ser adicionado:");
    pilha.adicionar(nome);
  }
  
  // Remover nomes da pilha e exibir com alert
  let mensagem = "";
  while (pilha.dados.length > 0) {
    const nomeRemovido = pilha.remover();
    mensagem += "Nome removido: " + nomeRemovido + "\n";
  }
  
  if (mensagem === "") {
    mensagem = "A pilha está vazia.";
  }
  
  alert(mensagem);