/* 2) Crie uma função que receba como parâmetro um array de números e retorne
 	um array ordenado (NÃO pode usar a função array.sort());
   // ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 
 */

let listaDesordenada = [4, 5, 7, 3, 0, 5, 2, 2];

function listaOrdenada(listaDesordenada) {
  for (let i = 0; i < listaDesordenada.length; i++) {
    for (let x = i + 1; x < listaDesordenada.length; x++) {
      if (listaDesordenada[i] > listaDesordenada[x]) {
        let listaOrdenada = listaDesordenada[i];
        listaDesordenada[i] = listaDesordenada[x];
        listaDesordenada[x] = listaOrdenada;
      }
    }
  }
  return listaDesordenada;
}

console.log(listaOrdenada(listaDesordenada));
