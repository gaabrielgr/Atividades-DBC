/* 
4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
	 qualquer como parâmetro e que adiciona esse elemento à lista;
   4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;

  

*/
/* EXERCICIO 4A,4B */
let listaMercado = [];
let produto = ["batata", "arroz", "leite"];

function adicionarProdutos(item) {
  listaMercado.push(item);
}
adicionarProdutos(produto);

function apagarUltimo(lista) {
  listaMercado.forEach((item) => {
    item.pop();
  });
}

function apagarPrimeiro(lista) {
  listaMercado.forEach((item) => {
    item.shift();
  });
}

apagarUltimo(listaMercado);
apagarPrimeiro(listaMercado);

console.log(listaMercado);

/* EXERCICIO 4C */

/* Crie uma função para remover um elemento específico da lista;
	 // ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
	 // e chamamos a função  removeElemento('Tiago')
	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando. */

let lista = ["a", 4, "Tiago", 187];
let apagarItem = 4;

function apagarElemento(item) {
  let index = lista.indexOf(item);

  if (index !== -1) {
    lista.splice(index, 1);
  } else {
    console.log("Esse elemento não existe na lista");
  }
}
apagarElemento(apagarItem);

console.log(lista);
