function escreverPorExtenso() {
    const numero = parseInt(prompt("Digite um número inteiro entre 0 e 9999:"));
  
    const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const especiais = ['', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
  
    if (numero < 0 || numero > 9999) {
      alert("Número inválido. Digite um número entre 0 e 9999.");
      return;
    }
  
    if (numero === 0) {
      alert("zero");
      return;
    }
  
    let extenso = '';
    const unidade = numero % 10;
    const dezena = Math.floor((numero % 100) / 10);
    const centena = Math.floor((numero % 1000) / 100);
    const milhar = Math.floor(numero / 1000);
  
    if (milhar > 0) {
      extenso += unidades[milhar] + ' mil ';
    }
  
    if (centena > 0) {
      extenso += centenas[centena] + ' ';
    }
  
    if ((dezena === 1 && unidade > 0) || dezena > 1) {
      extenso += dezenas[dezena] + ' ';
    }
  
    if (dezena !== 1) {
      extenso += unidades[unidade];
    } else if (unidade > 0) {
      extenso += especiais[unidade];
    }
  
    alert(extenso.trim());
  
    while (true) {
      const resposta = prompt("Deseja fazer outra conversão? (s/n)").toLowerCase();
      if (resposta === 'n') {
        break;
      } else if (resposta === 's') {
        escreverPorExtenso();
        break;
      } else {
        alert("Resposta inválida. Por favor, digite 's' para sim ou 'n' para não.");
      }
    }
  }
  
  // Chamada da função
  escreverPorExtenso();
  