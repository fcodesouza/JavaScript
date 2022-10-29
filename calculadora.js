// Variáveis:
let n1 = 0;
let n2 = 0;

// Calculos:

// Corpo:

let opcao = parseInt(
  prompt(
    "C A L C U L A D O R A \nPor favor, informe que operação deseja realizar: \n1 - SOMAR \n2 - DIVIDIR \n3 - MULTIPLICAR \n4 -DIVIDIR \n5 - SAIR"
  )
);

switch (opcao < 5) {
  case opção == 1:
    let soma = n1 + n2;
    alert(soma);

  case opcao == 2:
    let subtracao = n1 - n2;
    alert(subtracao);

  case opcao == 3:
    let multiplicacao = n1 * n2;
    alert(multiplicacao);

  case opcao == 4:
    let divisao = n1 / n2;
    alert(divisao);

  case opcao == 5:
    alert("Você saiu.");
    break;

  default:
    "Opção invalida.";
}
