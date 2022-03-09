/* Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100; */

let total = 0;
for (let x = 1; x <= 100; x++) {
  if (x % 2 == 0) {
    total += x;

    console.log(total ** 2);
  }
}
