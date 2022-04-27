var comparaisons = [
  "ACEN",
  "ACEN",
  "ACEO",
  "ACEO",
  "ACNO",
  "ACNO",
  "AENO",
  "AENO",
  "CENO",
  "CENO",
  "AACE",
  "AACE",
  "AACN",
  "AACN",
  "AACO",
  "AACO",
  "AAEN",
  "AAEN",
  "AAEO",
  "AAEO",
  "AANO",
  "AANO",
  "CCAE",
  "CCAE",
  "CCAN",
  "CCAN",
  "CCAO",
  "CCAO",
  "CCEN",
  "CCEN",
  "CCEO",
  "CCEO",
  "CCNO",
  "CCNO",
  "EEAC",
  "EEAC",
  "EEAN",
  "EEAN",
  "EEAO",
  "EEAO",
  "EECN",
  "EECN",
  "EECO",
  "EECO",
  "EENO",
  "EENO",
  "NNAC",
  "NNAC",
  "NNAE",
  "NNAE",
  "NNAO",
  "NNAO",
  "NNCE",
  "NNCE",
  "NNCO",
  "NNCO",
  "NNEO",
  "NNEO",
  "OOAC",
  "OOAC",
  "OOAE",
  "OOAE",
  "OOAN",
  "OOAN",
  "OOCE",
  "OOCE",
  "OOCN",
  "OOCN",
  "OOEN",
  "OOEN",
  "AAA",
  "CCC",
  "EEE",
  "NNN",
  "OOO",
];

var tirageDomaine = [];
var tirageFacette = [];
var comparaisonsFacettes = [[], [], [], [], []]; //utiliser un dictionnaire serait surement mieux
var res = [];
var resultat = [];
function RandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (const domaines of comparaisons) {
  for (const domaine of domaines) {
    if (tirageDomaine.indexOf(domaine) !== -1) {
      let i;
      if (domaine === "A") {
        i = 0;
      }
      if (domaine === "C") {
        i = 1;
      }
      if (domaine === "E") {
        i = 2;
      }
      if (domaine === "N") {
        i = 3;
      }
      if (domaine === "O") {
        i = 4;
      }
      if (comparaisonsFacettes[i].length === 6) {
        do {
          var facette = RandomInt(6);
        } while (tirageFacette.includes(facette));
      } else {
        do {
          var facette = RandomInt(6);
        } while (comparaisonsFacettes[i].includes(facette));
        comparaisonsFacettes[i].push(facette);
      }
    } else {
      do {
        var facette = RandomInt(6);
      } while (tirageFacette.includes(facette));
    }

    res.push(domaine + "." + facette);
  }
  resultat.push(res);

  tirageFacette = [];
  tirageDomaine = [];
  res = [];
}

console.log(resultat);
