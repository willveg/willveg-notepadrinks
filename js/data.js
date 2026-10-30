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
  { nome: "Maçã Podre", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["saquê", "morango", "licor de curaçau blue", "xarope de maçã verde", "xarope de açúcar", "laranja desidratada"],
    modoPreparo: "" },
  { nome: "Despedida", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["saquê", "maracujá", "rum", "xarope de melancia", "hibisco"],
    modoPreparo: "" },
  { nome: "I'm So Happy", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["vodka", "aperol", "maracujá", "rum", "xarope de pink lemonade", "hibisco"],
    modoPreparo: "" },
  { nome: "Sex in the Star", categoria: "Drinks dos azarados", preco: "R$20",
    ingredientes: ["vodka", "licor de laranja", "abacaxi", "rum", "xarope de amora", "anis estrelado"],
    modoPreparo: "" },

  // ---------- Autorais ----------
  { nome: "Baba de Goblin", categoria: "Autoral", preco: "R$25",
    ingredientes: ["vodka", "xarope de maçã verde", "suco de tangerina", "espuma de gengibre"],
    modoPreparo: "" },
  { nome: "Caveira Vermelha", categoria: "Autoral", preco: "R$22",
    ingredientes: ["morango", "pimenta", "vodka", "grenadine"],
    modoPreparo: "" },
  { nome: "Mística", categoria: "Autoral", preco: "R$25",
    ingredientes: ["gin", "licor de curaçau blue", "espumante", "limão siciliano"],
    modoPreparo: "" },
  { nome: "Dead Pool", categoria: "Autoral", preco: "R$28",
    ingredientes: ["vodka", "morango", "maracujá", "limão taiti", "grenadine", "xarope de açúcar"],
    modoPreparo: "" },

  // ---------- Da casa ----------
  { nome: "Vinho Fruits", categoria: "Da casa", preco: "R$25",
    ingredientes: ["vinho suave", "abacaxi", "maracujá", "morango", "leite condensado"],
    modoPreparo: "" },
  { nome: "Sangria", categoria: "Da casa", preco: "R$25",
    ingredientes: ["vinho suave", "schweppes", "domecq", "triple sec", "frutas picadas"],
    modoPreparo: "" },
  { nome: "Tinto de Verano", categoria: "Da casa", preco: "R$20",
    ingredientes: ["vinho suave", "sprite", "laranja"],
    modoPreparo: "" },
  { nome: "Mojito", categoria: "Da casa", preco: "R$20",
    ingredientes: ["rum", "hortelã", "limão taiti", "xarope de açúcar", "água com gás"],
    modoPreparo: "" },
  { nome: "Negroni", categoria: "Da casa", preco: "R$20",
    ingredientes: ["gin", "campari", "vermute tinto"],
    modoPreparo: "" },
  { nome: "Whisky Sour", categoria: "Da casa", preco: "R$25",
    ingredientes: ["whisky bourbon", "limão siciliano", "xarope de açúcar", "clara de ovo"],
    modoPreparo: "" },

  // ---------- Clássicos ----------
  { nome: "Moscow Mule", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["vodka", "limão taiti", "xarope de açúcar", "gengibre"],
    modoPreparo: "" },
  { nome: "Irish Mule", categoria: "Clássicos", preco: "R$28",
    ingredientes: ["whisky", "limão taiti", "espuma de gengibre", "xarope de açúcar"],
    modoPreparo: "" },
  { nome: "London Mule", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["gin", "limão taiti", "espuma de gengibre", "xarope de açúcar"],
    modoPreparo: "" },
  { nome: "Aperol Spritz", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["aperol", "espumante", "água com gás", "laranja"],
    modoPreparo: "" },
  { nome: "Sex on the Beach", categoria: "Clássicos", preco: "R$20",
    ingredientes: ["vodka", "suco de laranja", "licor de pêssego", "groselha"],
    modoPreparo: "" },
  { nome: "Maracujack", categoria: "Clássicos", preco: "R$22",
    ingredientes: ["jack daniels", "maracujá", "xarope de açúcar", "hortelã"],
    modoPreparo: "" },
  { nome: "New Yorky Sour", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["whisky bourbon", "limão siciliano", "vinho tinto seco", "xarope de açúcar"],
    modoPreparo: "" },

  // ---------- Caipirinhas ----------
  // No cardápio: escolhe a base (cachaça, vodka ou saquê) e o sabor.
  { nome: "Caipirinha", categoria: "Caipirinhas", preco: "R$15",
    ingredientes: ["cachaça", "vodka", "saquê", "paçoca", "limão taiti", "maracujá", "morango", "tangerina com pimenta"],
    modoPreparo: "Base à escolha: cachaça, vodka ou saquê.\nSabores: paçoca, limão taiti, maracujá, morango ou tangerina com pimenta." },

  // ---------- Shots do infinito (R$12 cada, combo de 6 por R$50) ----------
  { nome: "Mente", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["saquê", "xarope de limão siciliano"], modoPreparo: "" },
  { nome: "Alma", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["aperol", "xarope de tangerina"], modoPreparo: "" },
  { nome: "Realidade", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["vodka", "tabasco", "grenadine"], modoPreparo: "" },
  { nome: "Tempo", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["gin", "xarope de maçã verde"], modoPreparo: "" },
  { nome: "Poder", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["licor de curaçau blue", "grenadine", "gin"], modoPreparo: "" },
  { nome: "Espaço", categoria: "Shots do infinito", preco: "R$12",
    ingredientes: ["vodka", "licor de curaçau blue"], modoPreparo: "" },

  // ---------- Shots / doses ----------
  { nome: "Fire Ball", categoria: "Shots / doses", preco: "R$12",
    ingredientes: ["domecq", "grenadine", "licor de pêssego"], modoPreparo: "" }
];
