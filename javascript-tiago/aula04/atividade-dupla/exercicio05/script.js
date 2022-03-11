/* 
Crie uma função que imprima no console todas as possíveis combinações de uma string;
  // ex: imprimirCombinacoes('tri')
  => possiveis combinações da string "tri":  
  't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 'rit', 'rti', 'i', 'ir', 'it', 'irt', 'itr'

*/

let texto = "luis";
let lista = texto.split("");
let arrayFinal = [];
/* faz o controle da movimentação do indice */
for (let xx = 0; xx < lista.length; xx++) {
  /* vai mover os indices*/
  for (let x = 0; x < lista.length; x++) {
    /*para quebrar a palavra  de varias maneiras  */
    for (let i = 0; i < lista.length; i++) {
      for (let j = i + 1; j < lista.length + 1; j++) {
        arrayFinal = arrayFinal.concat(lista.join("").slice(i, j));
      }
    }

    if (x + 1 < lista.length) {
      let elemento = lista[x];
      lista.splice(x, 1);
      lista.splice(x + 1, 0, elemento);
    }
  }
}
console.log([...new Set(arrayFinal)]);
