let totalColaboradores = [];

class Colaborador {
  id;
  nome;
  constructor(nome) {
    this.id = Colaborador.incrementoId();
    this.nome = nome;
  }
  static incrementoId() {
    if (!this.id) {
      this.id = 1;
    } else {
      this.id++;
    }
    return this.id;
  }

  pontoEletronico = [];

  marcacoesPonto(dia, hora) {
    let data = new Marcacao(dia, hora);
    this.pontoEletronico.push(data);
  }
}

class Marcacao {
  dia;
  hora;
  constructor(dia, hora) {
    this.dia = dia;
    this.hora = hora;
  }
}

//valida caracteres
class Validacoes {
  validarNome(palavra) {
    if (palavra === null) {
      return;
    }
    let validarPalavra = [...palavra].some(
      (caracter) => caracter.toLowerCase() !== caracter.toUpperCase()
    );
    if (!validarPalavra) {
      alert("Nome inválido!");
    }

    return validarPalavra;
  }
}
const validar = new Validacoes();

// cadastra o nome do colaborador

const cadastrarColaborador = () => {
  let nome = prompt("Insira seu nome: ");

  if (nome === null) {
    alert("Voltando ao menu;");
    return;
  }

  let validado = validar.validarNome(nome);

  while (!validado) {
    nome = prompt("Nome inválido, tente novamente: ");
    if (nome === null) {
      alert("Voltando ao menu!");
      return;
    }
    validado = validar.validarNome(nome);
  }

  const colaboradorInstanciado = new Colaborador(nome);
  totalColaboradores.push(colaboradorInstanciado);
};
totalColaboradores = [
  new Colaborador("Gabriel"),
  new Colaborador("João"),
  new Colaborador("Maria"),
];
// cadastrar ponto
const marcarPonto = () => {
  let id = parseInt(prompt("Insira o id do colaborador: "));
  totalColaboradores.forEach((colaborador) => {
    if (id === colaborador.id) {
      let dia = parseInt(prompt("Insira o dia: "));
      let hora = parseInt(prompt("Insira o hora: "));
      colaborador.marcacoesPonto(dia, hora);
      console.log(colaborador);
    }
  });
};
function app() {
  let opcaoMenu;

  do {
    opcaoMenu = prompt(
      "Digite (1) Cadastrar Colaborador\n" +
        "Digite (2) Marcar Ponto\n" +
        "Digite (3) Lista de Colaboradores\n" +
        "Digite (4) Lista de colaboradores se marcações de ponto\n" +
        "Digite (9) Para encerrar o sistema"
    );

    switch (opcaoMenu) {
      case "1":
        cadastrarColaborador();
        break;
      case "2":
        marcarPonto();
        break;
      case "3":
        console.log("chegou no 3");
      case "9":
      case null:
        alert("sistema finalizado");
        break;
      default:
        alert("Opção inválida!");
        break;
    }
  } while (opcaoMenu !== "9" && opcaoMenu !== null);
}

app();

console.log(totalColaboradores);
