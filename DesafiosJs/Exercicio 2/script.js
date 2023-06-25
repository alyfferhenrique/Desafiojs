function buscarNumero() {
    var numeros = prompt("Digite os números separados por vírgula:").split(",").map(Number);
    var numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"));
  
    if (numeros.includes(numeroProcurado)) {
      var posicao = numeros.indexOf(numeroProcurado);
      alert("O número " + numeroProcurado + " está presente no array na posição " + posicao + ".");
    } else {
      alert("O número " + numeroProcurado + " não está presente no array.");
    }
  }
  
  buscarNumero();
  