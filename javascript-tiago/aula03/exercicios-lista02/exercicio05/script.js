/*  Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
OBS: só podem ser adicionados a esta lista os seguintes números:
- números ímpares que estão entre 14 e 50;
- números múltiplos de 12;
*/

let listaAleatoria = [];
let listaSemNumeroRepetido = [];
function numeroAleatorioNovaVersao() {
  while (listaSemNumeroRepetido.length < 10) {
    let numeroRandomico = Math.floor(Math.random() * 100);
    if (
      numeroRandomico >= 14 &&
      numeroRandomico <= 50 &&
      (numeroRandomico % 2 !== 0 || numeroRandomico % 12 === 0)
    ) {
      let numeroNovo = numeroRandomico;
      listaAleatoria.push(numeroNovo);
      listaSemNumeroRepetido = [...new Set(listaAleatoria)];
    }
  }
}
numeroAleatorioNovaVersao();
console.log(listaSemNumeroRepetido);
