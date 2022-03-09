/* 
2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
   e todos caracteres em maiúsculo;
   // ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'

 Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
	(porém mantenha ao menos um para continuar com as palavras separadas)
	// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'

*/
let frase = '      Oi, essa é uma   string   qualquer   '

function removerEspacos(frase){
return frase.toUpperCase().trim();
}

function ajustarEspacos(frase){
   let espacos = frase.split(" ");
   let novoArray = [];

   for (espacosDuplos of espacos) {
      if(espacosDuplos !== ""){
         novoArray.push(espacosDuplos);
      }
   }
   return novoArray.join(" ");
}
console.log(ajustarEspacos(removerEspacos(frase)));
