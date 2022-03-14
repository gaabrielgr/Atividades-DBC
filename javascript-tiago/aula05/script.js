//INFO DO SISTEMA
/* 
clicar em cancelar após acessar a opção 1, cadastrar descrição, ao clicar em cancelar na opção preço - bug
clicar em cancelar após acessar opção 2 do menu, necessário inserir um ID já cadastrado, do contrário não vai sair do menu - bug
clicar em cancelar após acessar opção 3 do menu, só vai sair se digitar o número 0.
clicar em cancelar na opção 3 do submenu 4, - bug.

*/

//Array com os produtos
let todosProdutos = [];
//variáveis auxiliares
let confirmar = true;
let idIncrementado = 1;
let caracteresEspeciais = [
  ",",
  "(",
  ")",
  ";",
  ":",
  "|",
  "!",
  ",",
  "#",
  "$",
  "%",
  "&",
  "/",
  "=",
  "?",
  "~",
  "^",
  ">",
  "<",
  "ª",
  "º",
  "[",
  "]",
  "}",
  "{",
  "@",
  "^",
  "~",
  "=",
  "+",
  "-",
  "*",
  ".",
  "",
];

function Produto(descricao, preco) {
  this.id = idIncrementado;
  this.descricao = descricao;
  this.preco = parseFloat(preco);
  idIncrementado++;
}
const novoProduto = (descricao, preco) => {
  let produto = new Produto(descricao, preco);
  return produto;
};

/* funções do sistema */

const criarProduto = () => {
  while (confirmar) {
    let descricaoDoProduto = prompt("Digite a descricao do produto: ");
    if (descricaoDoProduto === null) {
      break;
    }
    let descricaoValida;

    do {
      console.log(descricaoDoProduto);
      descricaoValida = validarDescricao(descricaoDoProduto.trim());
      if (!descricaoValida) {
        descricaoDoProduto = prompt("Digite uma descrição de produto válida: ");
        if (descricaoDoProduto === null) {
          break;
        }
      }
    } while (!descricaoValida);
    let precoDoProduto = parseFloat(
      prompt("Digite o preço do produto: ").replace(",", ".")
    );
    let precoValido;
    do {
      precoValido = validarPreco(precoDoProduto);
      if (!precoValido) {
        precoDoProduto = prompt(
          "Digite um preço válido para o produto: "
        ).trim();
      }
    } while (!precoValido);
    todosProdutos.push(novoProduto(descricaoDoProduto, precoDoProduto));
    confirmar = confirm("Deseja continuar cadastrando produtos? ");
  }
};
const validarDescricao = (desc) => {
  let arrayLetrasDescricao;
  let retorno = true;
  if (desc === "") {
    retorno = false;
  } else {
    arrayLetrasDescricao = desc.split("");
    arrayLetrasDescricao.forEach((elemento) => {
      caracteresEspeciais.forEach((caracter) => {
        if (elemento === caracter) {
          retorno = false;
        }
      }); //segundo forEach
    }); // primeiro forEach
  } // else
  if (!retorno) {
    alert("Descrição inválida!");
  }
  return retorno;
};

const selecionarDescricao = () => {
  let buscarDescricao = prompt("Insira a descrição que deseja procurar: ");
  let descricaoEncontrada = [];

  do {
    todosProdutos.forEach((elemento) => {
      if (elemento.descricao.toLowerCase() === buscarDescricao.toLowerCase()) {
        alert("Descrição Encontrada");
        descricaoEncontrada.push(elemento.descricao, elemento.preco);
      }
    });

    if (descricaoEncontrada.length === 0) {
      alert("Descrição inválida");
      buscarDescricao = prompt(
        "Digite a descrição que seja procurar ou digite 'sair' para sair: "
      );
    }
  } while (descricaoEncontrada.length === 0 && buscarDescricao !== "sair");
  console.table(descricaoEncontrada);
};

const imprimirDescricao = () => {
  let imprimirDescricao = [];
  todosProdutos.forEach((elemento) => {
    imprimirDescricao.push(elemento.descricao);
  });
  console.table(imprimirDescricao);
};

const totalDePatrimonio = () => {
  let imprimirPatrimonio = 0;
  todosProdutos.forEach((elemento) => {
    imprimirPatrimonio += elemento.preco;
  });

  alert(`O total do patrimônio é: R$ ${imprimirPatrimonio}`);
};

const selecionarId = () => {
  let idEncontrado = [];
  let buscarId = [];
  buscarId = parseInt(prompt("Digite o ID que seja procurar: "));
  do {
    todosProdutos.forEach((elemento) => {
      if (elemento.id === buscarId) {
        alert("ID Encontrado");
        idEncontrado.push(elemento.descricao, elemento.preco, elemento.id);
      }
    });
    if (idEncontrado.length === 0) {
      alert("ID inválido");
      buscarId = parseInt(
        prompt("Digite o ID que seja procurar ou digite '0' para sair: ")
      );
    }
  } while (idEncontrado.length === 0 && buscarId !== 0);

  return console.log(idEncontrado);
};

const apagar = () => {
  let idValido = false;
  let id = prompt("Insira o ID do produto que deseja apagar: ");
  do {
    if (Array.isArray(idValido)) {
      alert("ID Inválido!");
      id = prompt("Digite um ID válido para exclusão: ");
    }
    idValido = todosProdutos.filter((item) => {
      return item.id == id;
    });
  } while (idValido.length === 0);

  arraySuporte = todosProdutos.filter((item) => {
    return item.id != id;
  });
  todosProdutos = arraySuporte;

  alert("Produto excluído com sucesso!");
  console.log(`Lista atualizada`, todosProdutos);
};

const validarPreco = (preco) => {
  let retorno = true;
  if (isNaN(preco)) {
    retorno = false;
  }
  if (preco < 0) {
    retorno = false;
  }
  if (preco === "") {
    retorno = false;
  }
  if (!retorno) {
    alert("Preço inválido!");
  }
  return retorno;
};

/* Arrays auxiliares para validações */
todosProdutos.push(novoProduto("Produto01", 287.23));
todosProdutos.push(novoProduto("produto02", 8754.24));
todosProdutos.push(novoProduto("produto02", 123.45));
console.clear();

let inicializar = true;
while (inicializar) {
  let opcoesMenu = prompt(
    "Digite 1 para cadastrar produto\n" +
      "Digite 2 para  excluir produto pelo codigo\n" +
      "Digite 3 para encontrar produto pelo codigo\n" +
      "Digite 4 para abrir submenu de impressão de produto\n" +
      "Digite 5 para verificar o total de patrimônio\n" +
      "Digite 6 para sair do sistema"
  );
  switch (opcoesMenu) {
    case "1":
      criarProduto();
      break;
    case "2":
      apagar();
      break;
    case "3":
      selecionarId();
      break;
    case "4":
      let subMenu = prompt(
        "Digite '1' para imprimir lista de todos produtos cadastrados\n" +
          "Digite '2' para imprimir a lista com o nome de todos produtos\n" +
          "Digite '3' para verificar um produto especifico"
      );
      switch (subMenu) {
        case "1":
          console.table(todosProdutos);
          break;
        case "2":
          imprimirDescricao();
          break;
        case "3":
          selecionarDescricao();
          break;
      } // final do submenu
      break; // final da opção 4
    case "5":
      totalDePatrimonio();
      break;
    case "6":
    case null:
      alert("Sistema finalizado");
      console.log(
        `Todos produtos cadastrados na base do sistema`,
        todosProdutos
      );
      inicializar = false;
      break;
    default:
      alert("Opção inválida, menu sera finalizado");
  }
  confirmar = true;
}
