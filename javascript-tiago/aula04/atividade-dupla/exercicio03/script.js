/* 
3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
   Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
   // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';
*/

let texto = "abençoado seja o cara que inventou o javascript";

function capitalize(texto) {
  let textoMinusculo = texto.toLowerCase();
  let separarLetras = textoMinusculo.split(" ");
  for (let i = 0; i < separarLetras.length; i++) {
    let x = separarLetras[i];
    let primeiraLetra = x[0];
    x = primeiraLetra.toUpperCase() + x.slice(1);

    separarLetras[i] = x;
  }
  return separarLetras.join(" ");
}

console.log(capitalize(texto));
