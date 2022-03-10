/* 1) Crie uma função que recebe como parâmetros um caracter e um array de 
	caracteres e que remova todas as ocorrências daquele caracter no array; 
   // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
   => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a'); */

let lista = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d"];
let caracter = "c";
let index = lista.indexOf(caracter);
function funcaoRemoveCaracterDoArray(caracter, lista) {
  while (index >= 0) {
    lista.splice(index, 1);
    index = lista.indexOf(caracter);
  }
}

funcaoRemoveCaracterDoArray(caracter, lista);
console.log(lista);
