/* 
Convertam as seguintes funções para arrow function (usando concise body e abreviando parênteses quando possível):
*/

// function 01

/* function isPositive(number) {
  return number > 0;
} */
const isPositive = (number) => number > 0;

//function 02
/* function randomNumber() {
  return Math.round(Math.random() * 10);
} */
const randomNumber = () => Math.round(Math.random() * 10);

//function 03
/* setTimeout(function () {
  console.log("Apenas uma mensagem 5 segundos atrasada.");
}, 5000); */
setTimeout(() => {
  console.log("Apenas uma mensagem 5 segundos atrasada.");
}, 5000);

//function 04
/* function criarMensagemDeOla() {
  return "Olá, seja bem vindo!";
} */
const criarMensagemDeOla = () => console.log("Olá, seja bem vindo!");
