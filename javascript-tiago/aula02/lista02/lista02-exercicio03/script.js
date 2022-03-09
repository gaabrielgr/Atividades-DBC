/* 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10; */

let tabuada = parseInt(prompt("Insira um número inteiro para tabuada"));
for (let i = 0; i <= 10; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}
