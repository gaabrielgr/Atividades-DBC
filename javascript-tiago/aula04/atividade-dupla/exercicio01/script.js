/* 
1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
   Exemplo: minhaFuncao(370914) // retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);

*/
let numero = 987654;
let numeroInvertido = 0;

function inverter(numero) {
  let numeroString = numero.toString();
  let numeroArray = numeroString.split("");

  for (let i = 0; i < numeroArray.length; i++) {
    for (let x = i + 1; x < numeroArray.length; x++) {
      let arrayInvertido = numeroArray[i];
      numeroArray[i] = numeroArray[x];
      numeroArray[x] = arrayInvertido;
      return console.log(arrayInvertido);
      return console.log(array);
    }
  }
  return numeroArray;
}
inverter(numero);
