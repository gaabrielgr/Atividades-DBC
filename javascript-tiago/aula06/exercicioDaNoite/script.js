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

  validarNumero(numero) {
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 0) {
      alert("Número inválido");
      return false;
    }
    return true;
  }

  validarData(numero) {
    numero = parseInt(numero);
    if (isNaN(numero) || numero <= 0 || numero >= 32) {
      alert("Número inválido");
      return false;
    }
    return true;
  }

  validarHora(numero) {
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 0 || numero >= 24) {
      alert("Número inválido");
      return false;
    }
    return true;
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

//usuarios para auxiliar nas validações
totalColaboradores = [
  new Colaborador("Gabriel"),
  new Colaborador("João"),
  new Colaborador("Maria"),
];

// cadastrar ponto
const marcarPonto = () => {
  let validacao;
  let id;
  let colaboradorEncontrado = false;
  do {
    do {
      id = prompt("Insira o id do colaborador: ");
      if (id === null) {
        alert("Voltando ao menu;");
        return;
      }

      validacao = validar.validarNumero(id);
    } while (validacao === false);

    id = parseInt(id);
    totalColaboradores.forEach((colaborador) => {
      if (id === colaborador.id) {
        colaboradorEncontrado = true;
        let dia;
        let hora;
        do {
          dia = prompt("Insira dia trabalhado: ");
          if (dia === null) {
            alert("Voltando ao menu;");
            return;
          }
          validacao = validar.validarData(dia);
        } while (validacao === false);

        do {
          hora = prompt("Insira a hora trabalhada: ");
          if (hora === null) {
            alert("Voltando ao menu;");
            return;
          }
          validacao = validar.validarHora(hora);
        } while (validacao === false);

        colaborador.marcacoesPonto(dia, hora);
        alert("Ponto cadastrado com sucesso!");
        console.log(colaborador);
        return;
      }
    });
    if (colaboradorEncontrado === false) {
      alert("Id não encontrado");
    }
  } while (colaboradorEncontrado === false);
};
const mostrarColaboradores = () => {
  console.table(totalColaboradores);
};
const colaboradoresSemMarcacoes = () => {
  let colaboradoresSemMarcacoes = [];
  totalColaboradores.forEach((colaborador) => {
    if (colaborador.pontoEletronico.length === 0) {
      colaboradoresSemMarcacoes.push(colaborador);
    }
  });
  console.table(colaboradoresSemMarcacoes);
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
        mostrarColaboradores();
        break;
      case "4":
        colaboradoresSemMarcacoes();
        break;
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
