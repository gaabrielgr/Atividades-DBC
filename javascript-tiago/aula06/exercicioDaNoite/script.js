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
  marcacoesPonto = [];

  marcarPonto(dia, hora) {}

  marcacao() {
    dia: 22;
    hora: 9;
  }
}

class Validacoes {
  validarNome(palavra) {
    let validarPalavra = [...palavra].some(
      (caracter) => caracter.toLowerCase() !== caracter.toUpperCase()
    );
    if (!validarPalavra) {
      alert("Nome inválido!");
    }

    return validarPalavra;
  }
}

const cadastrarColaborador = () => {
  const validarNome = new Validacoes();
  let nome = prompt("Insira seu nome: ");

  if (nome === null) {
    alert("Voltando ao menu;");
    return;
  }

  validado = validarNome.validarNome(nome);

  while (!validado) {
    nome = prompt("Nome inválido, tente novamente: ");
    validado = validarNome.validarNome(nome);
  }

  const colaboradorInstanciado = new Colaborador(nome);
  totalColaboradores.push(colaboradorInstanciado);
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
    if (opcaoMenu === null) {
      alert("sistema finalizado");
      return;
    }
    switch (opcaoMenu) {
      case "1":
        cadastrarColaborador();
        break;
      case "2":
        console.log("chegou no 2");
        break;
      case "3":
        console.log("chegou no 3");
      case "9":
        alert("sistema finalizado");
        break;
      default:
        break;
    }
  } while (opcaoMenu !== "9");
}

app();
console.log(totalColaboradores);
