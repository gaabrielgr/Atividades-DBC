alert(
  "Digite 1 para fazer chekin ou digite 2 para fazer checkout ou 3 para estender hospedagem"
);

let opcoesMenu = parseInt(prompt("Digite a opção desejada"));
if (!isNaN(opcoesMenu) && opcoesMenu > 0 && opcoesMenu <= 3) {
  if (opcoesMenu === 1) {
    alert("Seja bem-vindo!");
  }
  if (opcoesMenu === 2) {
    let confirmacao = confirm("Tem certeza que deseja efetuar o checkout? ");
    if (confirmacao) {
      alert("Até a próxima");
    }
  }
  if (opcoesMenu === 3) {
    let maisDias = prompt("Quantos dias a mais vocÊ gostaria de ficar? ");
    if (!isNaN(maisDias) && maisDias >= 1) {
      alert(`Parabéns, sua estadia foi estendida por ${maisDias} dias `);
    }
  }
} else {
  console.log("digite um número válido entre 1 e 3");
}
