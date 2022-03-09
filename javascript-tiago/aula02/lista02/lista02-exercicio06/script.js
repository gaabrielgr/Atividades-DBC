/* 6) Pergunte ao usuário se ele quer:
	Inserir número / Finalizar
	Ao selecionar inserir número solicite para o usuário um valor numérico válido
	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
	Utilize o laço DO...WHILE; */

let somaNumeros = 0;
let opcaoMenu = 0;
let numeroInformado = 0;

do{
opcaoMenu = parseInt(prompt('Digite 1 para inserir um número ou digite 2 para finalizar'))
if(opcaoMenu === 1) {
  numeroInformado = parseInt(prompt('Digite um numero: '));    
    if (!isNaN(numeroInformado)) {
      somaNumeros += numeroInformado;
    } else {
      alert('Digite numeros valido');
    }
} 


}while(opcaoMenu !== 2)
alert(somaNumeros)
