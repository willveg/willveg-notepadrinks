/* ============================================================
   DATA.JS
   Aqui mora só a "lista de drinks" (vinda do Cardápio Álibi).
   Nenhuma lógica de busca entra nesse arquivo — isso fica no script.js.

   ------------------------------------------------------------
   FORMATO DE CADA DRINK (pra você adicionar novos na mão):
   ------------------------------------------------------------
   {
     nome: "Nome do Drink",
     categoria: "Ex: Clássico, Da casa, Shots...",
     preco: "R$20",                       // opcional
     ingredientes: ["vodka", "limão taiti"],
     modoPreparo: ""                      // o cardápio não traz preparo,
                                          // preencha você mesmo depois
   }

   Dicas:
   - Escreva o mesmo ingrediente sempre do mesmo jeito (ex: sempre
     "limão taiti", nunca "limao tahiti"), senão a busca por ingrediente
     separa em grupos diferentes. Acento não importa na hora de buscar.
   - Quebra de linha no modoPreparo: use \n dentro do texto.
   - TODO (pra você): preencher o modoPreparo de cada drink.
   ============================================================ */

const DRINKS = [
  // ---------- Drinks dos azarados ----------
  {
    nome: "Maçã Podre", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["saquê 100ml", "morango 5/6", "licor de curaçau blue 30ml", "xarope de maçã verde 25ml", "xarope de açúcar", "laranja desidratada"],
    modoPreparo: "jogar os morangos na cocteleira junto do saque macera tudo shake e servir"
  },
  {
    nome: "Despedida", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["saquê 100ml", "maracujá 50ml", "rum 25ml", "xarope de melancia 50ml", "hibisco"],
    modoPreparo: "joga o maracujá na cocteleira com o saquê e o rum, xarope, macera tudo e serve finalizar com o hibisco"
  },
  {
    nome: "I'm So Happy", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["vodka 100ml", "aperol 50 ml", "maracujá 50ml", "rum 25ml", "xarope de pink lemonade 50ml", "hibisco"],
    modoPreparo: "joga o maracuja na cocteleira com a vodka e o aperol, rum, xarope, mistura tudo e serve finalizar com o hibisco"
  },
  {
    nome: "Sex in the Star", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["vodka 100ml", "licor de laranja 30ml", "abacaxi 50ml ou umas 3 fatias grandes", "rum 25ml", "xarope de amora 50ml", "anis estrelado"],
    modoPreparo: "joga o abacaxi na cocteleira com a vodka, o licor de laranja, o rum, o xarope de amora e o anis estrelado, macera tudo e serve, finalizando com o anis estrelado"
  },

  // ---------- Autorais ----------
  {
    nome: "Baba de Goblin", categoria: "Autoral", preco: "R$25",
    ingredientes: ["vodka 100ml", "xarope de maçã verde 50ml", "suco de tangerina 50ml ou 3 gomos ou meia", "espuma de gengibre"],
    modoPreparo: "joga a tengerina na cocteleira com a vodka e o xarope de maçã verde, mistura coagem unica com o strainer e serve com a espuma de gengibre"
  },
  {
    nome: "Caveira Vermelha", categoria: "Autoral", preco: "R$22",
    ingredientes: ["morango 6/7", "pimenta opcional macerar gera mais ardor", "vodka 100ml", "grenadine 50ml"],
    modoPreparo: "joga o morango na cocteleira com a vodka e a pimenta e o grenadine, macera tudo e serve"
  },
  {
    nome: "Mística", categoria: "Autoral", preco: "R$25",
    ingredientes: ["gin", "licor de curaçau blue", "espumante", "limão siciliano"],
    modoPreparo: ""
  },
  {
    nome: "Dead Pool", categoria: "Autoral", preco: "R$28",
    ingredientes: ["vodka", "morango", "maracujá", "limão taiti", "grenadine", "xarope de açúcar"],
    modoPreparo: ""
  },

  // ---------- Da casa ----------
  {
    nome: "Vinho Fruits", categoria: "Da casa", preco: "R$25",
    ingredientes: ["vinho suave", "abacaxi", "maracujá", "morango", "leite condensado"],
    modoPreparo: ""
  },
  {
    nome: "Sangria", categoria: "Da casa", preco: "R$25",
    ingredientes: ["vinho suave", "schweppes", "domecq", "triple sec", "frutas picadas"],
    modoPreparo: ""
  },
  {
    nome: "Tinto de Verano", categoria: "Da casa", preco: "R$20",
    ingredientes: ["vinho suave", "sprite", "laranja"],
    modoPreparo: ""
  },
  {
    nome: "Mojito", categoria: "Da casa", preco: "R$20",
    ingredientes: ["rum", "hortelã", "limão taiti", "xarope de açúcar", "água com gás"],
    modoPreparo: ""
  },
  {
    nome: "Negroni", categoria: "Da casa", preco: "R$20",
    ingredientes: ["gin", "campari", "vermute tinto"],
    modoPreparo: ""
  },
  {
    nome: "Whisky Sour", categoria: "Da casa", preco: "R$25",
    ingredientes: ["whisky bourbon", "limão siciliano", "xarope de açúcar", "clara de ovo"],
    modoPreparo: ""
  },

  // ---------- Clássicos ----------
  {
    nome: "Moscow Mule", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["vodka", "limão taiti", "xarope de açúcar", "gengibre"],
    modoPreparo: ""
  },
  {
    nome: "Irish Mule", categoria: "Clássicos", preco: "R$28",
    ingredientes: ["whisky", "limão taiti", "espuma de gengibre", "xarope de açúcar"],
    modoPreparo: ""
  },
  {
    nome: "London Mule", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["gin", "limão taiti", "espuma de gengibre", "xarope de açúcar"],
    modoPreparo: ""
  },
  {
    nome: "Aperol Spritz", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["aperol", "espumante", "água com gás", "laranja"],
    modoPreparo: ""
  },
  {
    nome: "Sex on the Beach", categoria: "Clássicos", preco: "R$20",
    ingredientes: ["vodka", "suco de laranja", "licor de pêssego", "groselha"],
    modoPreparo: ""
  },
  {
    nome: "Maracujack", categoria: "Clássicos", preco: "R$22",
    ingredientes: ["jack daniels", "maracujá", "xarope de açúcar", "hortelã"],
    modoPreparo: ""
  },
  {
    nome: "New Yorky Sour", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["whisky bourbon", "limão siciliano", "vinho tinto seco", "xarope de açúcar"],
    modoPreparo: ""
  },

  // ---------- Caipirinhas ----------
  // No cardápio: escolhe a base (cachaça, vodka ou saquê) e o sabor.
  {
    nome: "Caipirinha", categoria: "Caipirinhas", preco: "R$15",
    ingredientes: ["cachaça", "vodka", "saquê", "paçoca", "limão taiti", "maracujá", "morango", "tangerina com pimenta"],
    modoPreparo: "Base à escolha: cachaça, vodka ou saquê.\nSabores: paçoca, limão taiti, maracujá, morango ou tangerina com pimenta."
  },

  // ---------- Shots do infinito (R$12 cada, combo de 6 por R$50) ----------
  {
    nome: "Mente", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["saquê", "xarope de limão siciliano"], modoPreparo: ""
  },
  {
    nome: "Alma", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["aperol", "xarope de tangerina"], modoPreparo: ""
  },
  {
    nome: "Realidade", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["vodka", "tabasco", "grenadine"], modoPreparo: ""
  },
  {
    nome: "Tempo", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["gin", "xarope de maçã verde"], modoPreparo: ""
  },
  {
    nome: "Poder", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["licor de curaçau blue", "grenadine", "gin"], modoPreparo: ""
  },
  {
    nome: "Espaço", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["vodka", "licor de curaçau blue"], modoPreparo: ""
  },

  // ---------- Shots / doses ----------
  {
    nome: "Fire Ball", categoria: "Shots / doses", preco: "R$12",
    ingredientes: ["domecq", "grenadine", "licor de pêssego"], modoPreparo: ""
  }
];
