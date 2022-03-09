do {
  valorUsuario = parseInt(
    prompt(
      "Digite 1 para repetir a pergunta ou  digite 2 para parar de perguntar"
    )
  );
  if (valorUsuario !== 2 && valorUsuario !== 1) {
    alert("Valor inválido!");
  }
} while (valorUsuario !== 2);
