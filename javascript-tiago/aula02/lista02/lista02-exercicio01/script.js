let salarioInicial = 1000;
let anoDeEntrada = 2016;
let aumentoAnual = 0.015;

do {
  console.log(`Em ${anoDeEntrada} ele recebia ${salarioInicial.toFixed(2)}`);
  anoDeEntrada++;
  if (anoDeEntrada < 2018) {
    salarioInicial += salarioInicial * aumentoAnual;
  } else {
    aumentoAnual += aumentoAnual;
    salarioInicial += salarioInicial * aumentoAnual;
  }
} while (anoDeEntrada <= 2022);
