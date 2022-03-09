let salarioInicial = 1000;
let anoDeEntrada = 2016;
let aumentoAnual = 0.015;
let aumentoDobro = 0.03;

do {
  console.log(`Em ${anoDeEntrada} ele recebia ${salarioInicial.toFixed(2)}`);
  salarioInicial += salarioInicial * aumentoAnual;
  anoDeEntrada++;
} while (anoDeEntrada < 2018);

do {
  salarioInicial += salarioInicial * (aumentoAnual *= 2);
  console.log(`Em ${anoDeEntrada} ele recebia ${salarioInicial.toFixed(2)}`);
  anoDeEntrada++;
} while (anoDeEntrada <= 2022);
