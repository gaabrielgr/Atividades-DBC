/* 6) Pergunte ao usuário se ele quer:
	Inserir número / Finalizar
	Ao selecionar inserir número solicite para o usuário um valor numérico válido
	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
	Utilize o laço DO...WHILE; */

let numeroInserido = 0;
let somaNumeros = 0;

do {
  numeroInserido = prompt("Insira um número: ").toLowerCase();
  if (!isNaN(numeroInserido) && numeroInserido !== "") {
    numeroInserido = parseInt(numeroInserido);
    somaNumeros += numeroInserido;
  }

  if (typeof numeroInserido === "string" && numeroInserido !== "finalizar") {
    alert("Valor inválido");
  }
} while (numeroInserido !== "finalizar");
alert(somaNumeros);
