/* 
Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
  da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
  

*/
let texto = "a A d D @";

function contarVogaisConsoantes(texto) {
  let textoFormatado = texto.toLowerCase().split(" ");
  let vogais = ["a", "e", "i", "o", "u"];
  let consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let totalVogal = 0;
  let totalConsoantes = 0;
  for (let i = 0; i < textoFormatado.length; i++) {
    if (vogais.indexOf(textoFormatado[i]) != -1) {
      totalVogal++;
    }
    if (consoantes.indexOf(textoFormatado[i]) != -1) {
      totalConsoantes++;
    }
  }
  return `o total de vogais é ${totalVogal} e o total de consoantes é ${totalConsoantes}`;
}
console.log(contarVogaisConsoantes(texto));
