/* 
3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
	e retorne uma concatenação destes 2 arrays;

*/

let listaMercado = ["arroz", "feijao", "batata"];
let listaFeira = ["banana", "alface", "tomate"];

function concatenarListas(lista01, lista02) {
  return lista01.concat(lista02);
}

console.log(concatenarListas(listaMercado, listaFeira));
