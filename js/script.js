/* ============================================================
   SCRIPT.JS
   Lógica do "Caderno de Drinks": pega o que a pessoa digita,
   procura entre os DRINKS (definidos em data.js) e desenha o
   resultado na tela.

   Não usa nenhuma biblioteca — só JS puro (DOM + eventos).
   ============================================================ */

// Pega os elementos da tela uma única vez, no início.
const campoBusca = document.getElementById("campo-busca");
const areaResultados = document.getElementById("resultados");
const dicaBusca = document.getElementById("dica-busca");
const contadorDrinks = document.getElementById("contador-drinks");

// Quantas letras precisa digitar antes de começar a buscar.
// (evita mostrar resultado gigante com 1 letra só)
const TAMANHO_MINIMO_BUSCA = 2;

/* ------------------------------------------------------------
   UTILITÁRIO: normalizar texto
   Remove acentos e deixa tudo minúsculo, pra "café" bater com
   "cafe" e "GIN" bater com "gin".
   ------------------------------------------------------------ */
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")               // separa letra de acento (é -> e + ́)
    .replace(/[\u0300-\u036f]/g, ""); // remove os acentos separados
}

/* ------------------------------------------------------------
   BUSCA POR NOME DE DRINK
   Retorna os drinks cujo nome contém o termo digitado.
   ------------------------------------------------------------ */
function buscarPorNomeDoDrink(termo) {
  return DRINKS.filter((drink) => normalizar(drink.nome).includes(termo));
}

/* ------------------------------------------------------------
   BUSCA POR INGREDIENTE
   Retorna uma lista de "grupos": cada grupo é um ingrediente que
   bateu com o termo + todos os drinks que usam esse ingrediente.
   Ex: buscar "limão" -> [{ ingrediente: "limão", drinks: [...] }]
   ------------------------------------------------------------ */
function buscarPorIngrediente(termo) {
  // 1) Descobre quais ingredientes (nomes únicos) batem com o termo
  const ingredientesEncontrados = new Set();

  DRINKS.forEach((drink) => {
    drink.ingredientes.forEach((ingrediente) => {
      if (normalizar(ingrediente).includes(termo)) {
        ingredientesEncontrados.add(ingrediente);
      }
    });
  });

  // 2) Para cada ingrediente encontrado, junta os drinks que o usam
  return Array.from(ingredientesEncontrados).map((ingrediente) => {
    const drinksComEsseIngrediente = DRINKS.filter((drink) =>
      drink.ingredientes.some((i) => i.toLowerCase() === ingrediente.toLowerCase())
    );

    return {
      ingrediente,
      drinks: drinksComEsseIngrediente
    };
  });
}

/* ------------------------------------------------------------
   RENDERIZAÇÃO: ficha completa de um drink (quando a busca
   bateu com o NOME do drink)
   ------------------------------------------------------------ */
function criarCartaDeDrink(drink, termoBuscado) {
  const carta = document.createElement("article");
  carta.className = "carta";

  const listaIngredientesHTML = drink.ingredientes
    .map((ingrediente) => {
      // destaca o ingrediente na pílula se ele também bater com a busca
      const combina = normalizar(ingrediente).includes(termoBuscado);
      return `<li class="${combina ? "combina" : ""}">${ingrediente}</li>`;
    })
    .join("");

  carta.innerHTML = `
    <p class="carta-tipo">Drink encontrado</p>
    <h2 class="carta-titulo">${drink.nome}</h2>
    <p class="carta-categoria">${drink.categoria}</p>

    <p class="carta-secao-titulo">Ingredientes</p>
    <ul class="lista-ingredientes">${listaIngredientesHTML}</ul>

    <p class="carta-secao-titulo">Modo de preparo</p>
    <p class="carta-modo-preparo">${drink.modoPreparo}</p>
  `;

  return carta;
}

/* ------------------------------------------------------------
   RENDERIZAÇÃO: cartão "onde esse ingrediente é usado"
   (quando a busca bateu com um INGREDIENTE)
   ------------------------------------------------------------ */
function criarCartaDeIngrediente(grupo) {
  const carta = document.createElement("article");
  carta.className = "carta";

  const listaDrinksHTML = grupo.drinks
    .map((drink) => `<li><strong>${drink.nome}</strong> — ${drink.categoria}</li>`)
    .join("");

  carta.innerHTML = `
    <p class="carta-tipo">Ingrediente encontrado</p>
    <h2 class="carta-titulo">${grupo.ingrediente}</h2>

    <p class="carta-secao-titulo">Usado em</p>
    <ul class="lista-onde-usa">${listaDrinksHTML}</ul>
  `;

  return carta;
}

/* ------------------------------------------------------------
   FUNÇÃO PRINCIPAL: roda toda vez que a pessoa digita
   ------------------------------------------------------------ */
function renderizarResultados() {
  const valorDigitado = campoBusca.value.trim();
  const termo = normalizar(valorDigitado);

  // Limpa a tela antes de desenhar de novo
  areaResultados.innerHTML = "";

  // Caso 1: campo vazio ou muito curto -> mostra dica, não busca
  if (termo.length < TAMANHO_MINIMO_BUSCA) {
    dicaBusca.textContent =
      valorDigitado.length === 0
        ? "Digite pelo menos 2 letras para começar a pesquisar"
        : `Faltam ${TAMANHO_MINIMO_BUSCA - termo.length} letra(s)...`;
    dicaBusca.classList.remove("aviso");
    return;
  }

  dicaBusca.textContent = "";

  const drinksPorNome = buscarPorNomeDoDrink(termo);
  const gruposPorIngrediente = buscarPorIngrediente(termo);

  // Caso 2: não achou nada em lugar nenhum
  if (drinksPorNome.length === 0 && gruposPorIngrediente.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.className = "mensagem-vazia";
    mensagem.textContent = `Nada encontrado para "${valorDigitado}". Tente outro nome de drink ou ingrediente.`;
    areaResultados.appendChild(mensagem);
    return;
  }

  // Caso 3: desenha os drinks que bateram pelo NOME
  drinksPorNome.forEach((drink) => {
    areaResultados.appendChild(criarCartaDeDrink(drink, termo));
  });

  // Caso 4: desenha os ingredientes que bateram, com "usado em"
  gruposPorIngrediente.forEach((grupo) => {
    areaResultados.appendChild(criarCartaDeIngrediente(grupo));
  });
}

/* ------------------------------------------------------------
   CANTINHO DE ANOTAÇÕES (fila de drinks pra fazer)
   ------------------------------------------------------------
   localStorage é uma "gaveta" que o próprio navegador guarda,
   ligada a este arquivo/site. O que salvar aqui continua lá
   mesmo se você fechar a aba ou desligar o computador — só some
   se você limpar os dados do navegador.

   Ela guarda só texto, em pares chave -> valor, por isso a
   CHAVE_ANOTACOES abaixo: é o "nome da gaveta" onde a nossa
   anotação fica guardada.
   ------------------------------------------------------------ */
const caixaAnotacoes = document.getElementById("caixa-anotacoes");
const CHAVE_ANOTACOES = "caderno-de-drinks:anotacoes";

// Roda toda vez que a pessoa digita algo na caixa.
function salvarAnotacoes() {
  localStorage.setItem(CHAVE_ANOTACOES, caixaAnotacoes.value);
}

// Roda uma vez, quando a página abre: busca o que tinha salvo antes.
function carregarAnotacoes() {
  const textoSalvo = localStorage.getItem(CHAVE_ANOTACOES);

  // getItem devolve null se nunca foi salvo nada ainda —
  // por isso o "if", pra não jogar a palavra "null" dentro da caixa.
  if (textoSalvo !== null) {
    caixaAnotacoes.value = textoSalvo;
  }
}

/* ------------------------------------------------------------
   INICIALIZAÇÃO
   ------------------------------------------------------------ */
function inicializar() {
  contadorDrinks.textContent = DRINKS.length;

  // "input" dispara a cada tecla digitada — busca em tempo real
  campoBusca.addEventListener("input", renderizarResultados);

  // mesma lógica pra caixa de anotações: salva a cada tecla
  caixaAnotacoes.addEventListener("input", salvarAnotacoes);
  carregarAnotacoes();
}

inicializar();

/* ============================================================
   IDEIAS PRA VOCÊ EXPANDIR (nada disso está feito de propósito,
   é um guia rápido de "próximos passos" caso queira mexer):

   1) Busca por múltiplas palavras
      Hoje a busca é por um pedaço de texto só. Se quiser buscar
      "gin limão" e achar drinks que tenham os dois, dá pra
      dividir o termo em `termo.split(" ")` e checar se TODOS os
      pedaços aparecem no drink.

   2) Filtro por categoria
      Adicionar um <select> no HTML com as categorias (extraídas
      de DRINKS) e filtrar a lista antes de renderizar.

   3) Carregar os drinks de um arquivo separado (JSON)
      Em vez de um array fixo em data.js, dá pra usar fetch()
      pra carregar um drinks.json — útil se a lista crescer muito.

   4) Guardar buscas recentes
      Usar localStorage pra lembrar as últimas buscas e mostrar
      como sugestão quando o campo estiver vazio.
   ============================================================ */
