//------ Excercicio 2------
let nums = [1, 3, 5];
let maior = Math.max(...nums);
let menor = Math.min(...nums);
let segMaior = null;
let segMenor = null;

for (num of nums) {
  if (num > menor) if (segMenor === null || num < segMenor) segMenor = num;
  if (num < maior) if (segMaior === null || num > segMaior) segMaior = num;
}
if (segMaior == segMenor) {
  console.log(`O segundo menor e o segundo maior são: ${segMenor}`);
} else {
  console.log(`O o segundo maior é : ${segMaior}`);
  console.log(`O o segundo menor é : ${segMenor}`);
}
