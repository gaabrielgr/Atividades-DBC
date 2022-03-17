const listarColaboradores = () => {
  let estrutura = document.querySelector(".estrutura-colaborador");
  let firstFilho = estrutura.children;
  let secondFilho = [...firstFilho];
  let lista = [];
  let novoArray = [];
  let dividirArray = 3;

  secondFilho.forEach((elemento) => {
    for (let i = 0; i < secondFilho.length; i++) {
      lista.push(elemento.children[i].children[1].textContent);
    }
  });
  for (let i = 0; i < lista.length; i = i + dividirArray) {
    novoArray.push(lista.slice(i, i + dividirArray));
  }
  console.log(novoArray);
};

const validarEmail = () => {
  let validar = true;
  let erro = document.getElementById("email-erro");

  let campoEmail = document.getElementById("email-input").value;

  let primeiroCaracter = campoEmail[0];

  if (
    campoEmail.length > 0 &&
    primeiroCaracter.toLowerCase() === primeiroCaracter.toUpperCase()
  ) {
    validar = false;
  }

  let arroba = campoEmail.split("@");
  if (validar && arroba.length !== 2) {
    validar = false;
  }
  if (validar && arroba[1].indexOf(".") < 1) {
    validar = false;
  }

  let ponto = campoEmail.split(".");
  let flagUmaLetraPonto = false;
  ponto.forEach((elemento) => {
    if (elemento.length < 2) {
      flagUmaLetraPonto = true;
    }
  });
  if (validar && flagUmaLetraPonto) {
    validar = false;
  }

  if (validar && arroba[1].split(".")[0] !== "dbccompany") {
    validar = false;
  }

  if (validar) {
    erro = erro.classList.add("d-none");
  } else {
    erro = erro.classList.remove("d-none");
  }

  return validar;
};

const validarSenha = (event) => {
  const input = event ? event.target : document.getElementById("senha-input");
  const { value: senha } = input;
  let erro = document.getElementById("senha-erro");
  input.value = input.value.replaceAll(" ", "");

  let caracteresSenha = [...senha];

  let possuiLetraMinuscula = caracteresSenha.some((c) => c.toLowerCase() === c);
  let possuiLetraMaiuscula = caracteresSenha.some((c) => c.toUpperCase() === c);

  let possuiEspecial = caracteresSenha.some(
    (c) => c.toUpperCase() === c.toLowerCase() && isNaN(c)
  );
  let possuiNumero = caracteresSenha.some(
    (c) => c.toUpperCase() === c.toLowerCase() && !isNaN(c)
  );

  let peloMenosOito = senha.length >= 8;

  const ehValido =
    possuiLetraMinuscula &&
    possuiLetraMaiuscula &&
    possuiEspecial &&
    possuiNumero &&
    peloMenosOito;

  if (ehValido) {
    erro = erro.classList.add("d-none");
  } else {
    erro = erro.classList.remove("d-none");
  }

  return ehValido;
};

const adicionarMascaraData = () => {
  let inputData = document.getElementById("data-input").value;
  inputData = inputData.replaceAll("/", "");
  let dia = inputData.substring(0, 2);
  let mes = inputData.substring(2, 4);
  let ano = inputData.substring(4);

  let caracteres = [...inputData];

  switch (caracteres.length) {
    case 2:
      document.getElementById("data-input").value = `${dia}/`; // validar com variavel
      break;
    case 5:
      document.getElementById("data-input").value = `${dia}/${mes}/${ano}`; // validar com variavel
      break;
  }
};

const validarData = () => {
  let erro = document.getElementById("data-erro");
  let validar = true;
  let inputData = document.getElementById("data-input").value;

  let data = moment(inputData, "DD/MM/YYYY");
  let dataValida = data.isValid(); //retorna true para verdadeira

  if (!dataValida) {
    validar = false;
  }
  let minIdade = moment().subtract(18, "years");
  let maxIdade = moment().subtract(26, "years");

  let dataAprovada = data.isBetween(maxIdade, minIdade);
  if (!dataAprovada) {
    validar = false;
  }

  if (validar) {
    erro = erro.classList.add("d-none");
  } else {
    erro = erro.classList.remove("d-none");
  }

  return validar;
};

const validarNome = () => {
  let inputNome = document.getElementsByClassName("nome-input");
  return true;
  if (inputNome === null) {
    return;
  }
  let validarPalavra = [...inputNome].some((caracter) => 1 == 1);
  console.log(validarPalavra);
  if (!validarPalavra) {
    alert("Nome inválido!");
  }

  return validarPalavra;
};

const imprimir = (nome, data, senha, email) => {
  let estrutura = document.querySelector(".estrutura-colaborador");

  let novoColaborador = document.createElement("li");
  novoColaborador.classList.add(
    "w-100",
    "mt-2",
    "p-3",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );
  //div dos LI
  let ContainerNomeColaborador = document.createElement("div");
  let ContainerDataColaborador = document.createElement("div");
  let ContainerEmailColaborador = document.createElement("div");

  let infoNome = document.createElement("p");
  let nomeColaborador = document.createElement("p");

  let infoNascimento = document.createElement("p");
  let nascimentoColaborador = document.createElement("p");

  let infoEmail = document.createElement("p");
  let emailColaborador = document.createElement("p");

  //nome
  ContainerNomeColaborador.appendChild(infoNome);
  ContainerNomeColaborador.appendChild(nomeColaborador);
  infoNome.textContent = "Nome";
  nomeColaborador.textContent = nome;

  //nascimento
  ContainerDataColaborador.appendChild(infoNascimento);
  ContainerDataColaborador.appendChild(nascimentoColaborador);
  infoNascimento.textContent = "Nascimento:";
  nascimentoColaborador.textContent = data;

  //email
  ContainerEmailColaborador.appendChild(infoEmail);
  ContainerEmailColaborador.appendChild(emailColaborador);
  infoEmail.textContent = "Email:";
  emailColaborador.textContent = email;

  novoColaborador.appendChild(ContainerNomeColaborador);
  novoColaborador.appendChild(ContainerDataColaborador);
  novoColaborador.appendChild(ContainerEmailColaborador);

  estrutura.appendChild(novoColaborador);
};

let totalColaboradores = [];
const cadastrar = (event) => {
  event.preventDefault();
  if (validarData() && validarEmail() && validarSenha() && validarNome()) {
    let dataValida = document.getElementById("data-input").value;
    let emailValido = document.getElementById("email-input").value;
    let senhaValida = document.getElementById("senha-input").value;
    let nomeValido = document.getElementById("nome-input").value;

    const colaboradorInstanciado = new Colaborador(
      nomeValido,
      dataValida,
      senhaValida,
      emailValido
    );
    imprimir(nomeValido, dataValida, senhaValida, emailValido);
    totalColaboradores.push(colaboradorInstanciado);

    document.getElementById("titulo-colab").textContent =
      "Colaboradores Cadastrados no sistema!";

    //limpar form
    document.getElementById("nome-input").value = "";
    document.getElementById("nome-input").focus();
    document.getElementById("data-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("senha-input").value = "";
  }
};

class Colaborador {
  id;
  nome;
  dataNascimento;
  senha;
  email;
  constructor(nome, dataNascimento, senha, email) {
    this.id = Colaborador.incrementoId();
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.senha = senha;
    this.email = email;
  }
  static incrementoId() {
    if (!this.id) {
      this.id = 1;
    } else {
      this.id++;
    }
    return this.id;
  }
}
