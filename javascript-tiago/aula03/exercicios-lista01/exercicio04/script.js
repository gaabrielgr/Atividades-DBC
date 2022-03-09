/* 
Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
   existe no array e também qual a posição dele (índice)
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'
*/

let receita = ["farinha", "ovo", "leite"];
let ingrediente = "";

function buscarIngrediente(receita, ingrediente) {
  if (receita.includes(ingrediente)) {
    for (item of receita) {
      if (item === ingrediente) {
        let indexArray = receita.indexOf(item);
        console.log(
          `Existe o item "${item}" no array solicitado e o seu index é ${indexArray}`
        );
      }
    }
  } else {
    console.log("o item não existe em nossa lista");
  }
}

buscarIngrediente(receita, ingrediente);
