//variaveis auxiliares
let incremento = 1;
//funções auxiliares
buscarId = (id) => {
  return document.getElementById(id);
};
classes = (classe) => {
  return document.classList(classe);
};
addClasse = (classe) => {
  return document.classList.add(classe);
};

//seleções auxiliares de adicionar
let botaoAdicionar = buscarId("btn-adicionar");
let textoTarefa = buscarId("desc-tarefa");

//seleçoes auxiliares da tarefa
let conteudoLista = buscarId("conteudo-lista");
let container = buscarId("container");

//funções do programa
let excluirTarefa = () => {
  listaBotoes = [];
  let botaoExcluir = document.querySelectorAll(".excluir__item");
  listaBotoes = [...botaoExcluir];
  listaBotoes.forEach((botao) => {
    botao.addEventListener("click", (event) => {
      let elementoPai = event.target.parentNode;
      elementoPai.remove();
    });
  });
};
let colorir = () => {
  let idString = incremento - 1;
  let selecionar = buscarId(idString);
  let botaoExcluir = selecionar.lastChild;
  let botaoMarcar = selecionar.firstChild;
  botaoMarcar.addEventListener("click", () => {
    botaoExcluir.toggleAttribute("disabled");
    selecionar.classList.toggle("selecionar");
  });
};

let limparDescricao = (valor) => {
  valor.value = valor.innerHTML = "";
  textoTarefa.focus();
  return;
};

let adicionarTarefa = () => {
  botaoAdicionar.addEventListener("click", () => {
    if (textoTarefa.value === "") {
      return;
    }
    let conteudoDescricao = textoTarefa.value;

    //cria o corpo da tarefa
    let novaTarefa = document.createElement("div");
    novaTarefa.setAttribute("id", incremento++);
    novaTarefa.classList.add("container__lista-tarefa__item");

    //cria o confirmar
    let inputTarefa = document.createElement("input");
    inputTarefa.classList.add("confirmar__item");
    inputTarefa.setAttribute("type", "checkbox");

    //cria a descricao da tarefa
    let descricaoTarefa = document.createElement("p");
    descricaoTarefa.classList.add("container__lista-tarefa__item__texto");
    descricaoTarefa.innerText = conteudoDescricao;
    limparDescricao(textoTarefa);

    //cria o input de excluir
    let inputExcluirTarefa = document.createElement("input");
    inputExcluirTarefa.classList.add("excluir__item");
    inputExcluirTarefa.setAttribute("type", "button");
    inputExcluirTarefa.setAttribute("disabled", "off");
    inputExcluirTarefa.setAttribute("value", "X");

    //adiciona o conteudo da nova tarefa
    novaTarefa.appendChild(inputTarefa);
    novaTarefa.appendChild(descricaoTarefa);
    novaTarefa.appendChild(inputExcluirTarefa);

    //adicionando a tarefa
    container.appendChild(novaTarefa);
    colorir();
    excluirTarefa();
  });
};
adicionarTarefa();
