/* ============================================================
   DATA.JS
   Aqui mora só a "lista de drinks". Nenhuma lógica de busca
   entra nesse arquivo — isso fica no script.js.

   ------------------------------------------------------------
   COMO ADICIONAR SEUS PRÓPRIOS DRINKS (isso é o "TODO" pra você):
   ------------------------------------------------------------
   Cada drink é um objeto com essa forma:

   {
     nome: "Nome do Drink",
     categoria: "Alguma categoria livre, ex: Clássico, Autoral, Tiki...",
     ingredientes: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
     modoPreparo: "Texto livre explicando o preparo."
   }

   Regras simples:
   - "ingredientes" é sempre uma lista (array) de strings, em minúsculo
     de preferência (o código já ignora maiúscula/minúscula na busca,
     mas manter em minúsculo deixa mais consistente).
   - "modoPreparo" pode ter quebras de linha usando \n dentro da string.
   - Não precisa se preocupar com acento na busca (ex: "cafe" acha
     "café") — isso é tratado no script.js, função removerAcentos().

   Quando você me mandar sua lista de verdade, é só substituir (ou
   completar) o array DRINKS abaixo por ela.
   ============================================================ */

const DRINKS = [
  {
    nome: "Caipirinha",
    categoria: "Clássico brasileiro",
    ingredientes: ["cachaça", "limão", "açúcar", "gelo"],
    modoPreparo:
      "Corte o limão em pedaços, macere com o açúcar no copo.\nAdicione gelo e complete com cachaça. Mexa bem."
  },
  {
    nome: "Negroni",
    categoria: "Clássico / aperitivo",
    ingredientes: ["gin", "vermute rosso", "campari", "gelo"],
    modoPreparo:
      "Misture partes iguais de gin, vermute rosso e Campari em um\ncopo baixo com gelo. Mexa e decore com casca de laranja."
  },
  {
    nome: "Moscow Mule",
    categoria: "Clássico / refrescante",
    ingredientes: ["vodka", "gengibre", "limão", "água com gás"],
    modoPreparo:
      "Sirva a vodka e o suco de limão em uma caneca de cobre com gelo.\nComplete com cerveja de gengibre (ginger beer) e mexa levemente."
  },
  {
    nome: "Old Fashioned",
    categoria: "Clássico / encorpado",
    ingredientes: ["bourbon", "açúcar", "angostura", "laranja"],
    modoPreparo:
      "Macere o açúcar com angostura e um pouco de água.\nAdicione o bourbon e gelo em pedra única. Finalize com casca de laranja."
  },
  {
    nome: "Gin Tônica",
    categoria: "Clássico / refrescante",
    ingredientes: ["gin", "água tônica", "limão", "gelo"],
    modoPreparo:
      "Em uma taça com bastante gelo, adicione o gin e complete\ncom água tônica. Finalize com uma rodela de limão."
  }
];
