let infoUser = prompt("Digite um texto: ");

if (infoUser === "SIM") {
  console.log("parabéns");
} else if (infoUser === "Não") {
  console.log("Você errou");
  infoUser = prompt("Digite novamente: ");
} else {
  confirm("Você tem noções dos seus atos? ");
}
