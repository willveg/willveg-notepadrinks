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
    ingredientes: ["gin 60 ml", "licor de curaçau blue 30ml", "espumante 240ml", "limão siciliano 30ml"],
    modoPreparo: "corta os limoens sisilianos meio ja ta bom o drink é montado entao joga o gin e o curaçau com o gelo e o suco do limão siciliano e finaliza com o espumante + curaçau"
  },
  {
    nome: "Dead Pool", categoria: "Autoral", preco: "R$28",
    ingredientes: ["vodka 75ml", "morango 4", "maracujá 50ml", "limão taiti 4 fatias", "grenadine 30ml", "xarope de açúcar 45ml"],
    modoPreparo: "joga os morango e o maracujá na cocteleira com a vodka, o limão taiti, o grenadine e o xarope de açúcar, macera tudo shake e serve finalizar com rodelas de limao"
  },

  // ---------- Da casa ----------
  {
    nome: "Vinho Fruits", categoria: "Da casa", preco: "R$25",
    ingredientes: ["vinho suave", "abacaxi 2 colheres", "maracujá 50ml", "4 morangos", "leite condensado 50ml"],
    modoPreparo: "macera as frutas na cocteleira, com o leite condensado e gelo sem seguida adiciona o vinho suave ate completar, só servir"
  },
  {
    nome: "Sangria", categoria: "Da casa", preco: "R$25",
    ingredientes: ["vinho suave 100ml", "schweppes 100ml", "domecq 30ml", "triple sec 30ml", "frutas picadas"],
    modoPreparo: "drink montado, joga as frutas em um copo grande, adiciona o vinho suave, o domecq, o triple sec e a schweppes, mexe tudo e serve"
  },
  {
    nome: "Tinto de Verano", categoria: "Da casa", preco: "R$20",
    ingredientes: ["vinho suave 100ml", "uma lata de sprite", "meia laranja"],
    modoPreparo: "corta e coloca a laranja no copo, adiciona o vinho suave e a sprite, mexe suavemente e serve"
  },
  {
    nome: "Mojito", categoria: "Da casa", preco: "R$20",
    ingredientes: ["rum 100ml", "hortelã 10 folhas", "limão taiti 50ml", "xarope de açúcar 50ml", "completa com água com gás"],
    modoPreparo: "Coloque a hortelã e o limão taiti no copo, adicione o rum e o xarope de açúcar, misture bem e adicione a água com gás suavemente. Sirva gelado."
  },
  {
    nome: "Negroni", categoria: "Da casa", preco: "R$20",
    ingredientes: ["gin 50ml", "campari 50ml", "vermute tinto 50ml"],
    modoPreparo: "Adicione todos os ingredientes em um copo com gelo e misture bem. Sirva gelado."
  },
  {
    nome: "Whisky Sour", categoria: "Da casa", preco: "R$25",
    ingredientes: ["whisky bourbon 100ml", "limão siciliano 50ml", "xarope de açúcar 50ml", "clara de ovo 1"],
    modoPreparo: "coloca o suco do limão siciliano, o xarope de açúcar e a clara de ovo na cocteleira, adiciona o whisky bourbon e bata sem gelo e depois com gelo, agita bem e dupla coagem para um copo com gelo. Sirva gelado."
  },

  // ---------- Clássicos ----------
  {
    nome: "Moscow Mule", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["vodka 100ml", "limão taiti 50ml", "xarope de açúcar 50ml", "raspas de gengibre"],
    modoPreparo: "Coloque a raspa de gengibre no copo, adicione o limão taiti e o xarope de açúcar, misture bem e adicione a vodka. Sirva gelado."
  },
  {
    nome: "Irish Mule", categoria: "Clássicos", preco: "R$28",
    ingredientes: ["whisky 100ml", "limão taiti 50ml", "espuma de gengibre", "xarope de açúcar 50ml"],
    modoPreparo: "Cloque o whisky, o limão taiti e o xarope de açúcar na cocteleira, misture bem e adicione a espuma de gengibre. Sirva gelado."
  },
  {
    nome: "London Mule", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["gin 100ml", "limão taiti 50ml", "espuma de gengibre", "xarope de açúcar 50ml"],
    modoPreparo: "Coloque o limão taiti e o xarope de açúcar na cocteleira, misture bem e adicione o gin e a espuma de gengibre. Sirva gelado."
  },
  {
    nome: "Aperol Spritz", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["aperol 100ml", "espumante 150ml", "água com gás 50ml", "meia laranja"],
    modoPreparo: "Drink montado: coloque a meia laranja no copo, adicione o aperol, o espumante e a água com gás. Misture suavemente e sirva gelado."
  },
  {
    nome: "Sex on the Beach", categoria: "Clássicos", preco: "R$20",
    ingredientes: ["vodka 100ml", "suco de laranja 150ml ou uma laranja", "licor de pêssego 25ml", "groselha 50ml"],
    modoPreparo: "Drink montado: coloque o suco de laranja no copo, adicione a vodka, o licor de pêssego e a groselha. Misture suavemente e sirva gelado e uma fatia de laranja para guarnição."
  },
  {
    nome: "Maracujack", categoria: "Clássicos", preco: "R$22",
    ingredientes: ["jack daniels 100ml", "maracujá 100ml", "xarope de açúcar 50ml", "hortelã guarnição"],
    modoPreparo: "Coloque o jack daniels no copo, adicione o maracujá e o xarope de açúcar, misture bem e adicione a hortelã para guarnição. Sirva gelado."
  },
  {
    nome: "New Yorky Sour", categoria: "Clássicos", preco: "R$25",
    ingredientes: ["whisky bourbon 50ml", "limão siciliano 50ml", "vinho tinto seco 50ml", "xarope de açúcar 50ml"],
    modoPreparo: "Coloque o whisky bourbon, o limão siciliano e o xarope de açúcar na cocteleira, shake e adicione o vinho tinto seco suavemente com a bailarina. Sirva gelado."
  },

  // ---------- Caipirinhas ----------
  // No cardápio: escolhe a base (cachaça, vodka ou saquê) e o sabor.
  {
    nome: "Caipirinha", categoria: "Caipirinhas", preco: "R$15",
    ingredientes: ["cachaça 100ml", "vodka 100ml", "saquê 100ml", "meia paçoca", "1 limão taiti", "maracujá 50ml", "6 a 7 morangos", "4 gomos de tangerina com cubos de pimenta", "xarope de açúcar 50ml em todas"],
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
