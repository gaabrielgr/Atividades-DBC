/* 
1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
   e essa função imprima no console o valor de cada elemento da lista;

*/

let produtos = [1, 'Olá', undefined, 99999, 'Texto qualquer'];
function itens(listaDeProdutos) {
    for (const produto of listaDeProdutos) {
        console.log(produto)
       }
}

console.log(itens(produtos))