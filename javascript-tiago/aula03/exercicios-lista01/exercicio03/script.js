/* 
 Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
   chamada caso algum dos números informados seja inválido.
   Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';

*/

let numero1 = 4;
let numero2 = 2;

function somarNumeros(n1, n2) {
  numero1 += parseInt(n1);
  numero2 += parseInt(n2);
  if (isNaN(n1) || isNaN(n2)) {
    return validacao();
  } else {
    return n1 + n2;
  }
}
function validacao() {
  return "Algum número digitado foi inválido";
}
console.log(somarNumeros(numero1, numero2));
