// alert(nom.value);
// alert(prenom.value);

// document.getElementById("buttonTheFirst").onclick = function direBonjour() {
//     alert('Bonjour !');
// };
// function direBonjour() {
//      alert('Bonjour !');
//  };

let nombre1 = document.getElementById("nombreUn");

let nombre2 = document.getElementById("nombreDeux");

let theResultat = document.getElementById("resultat");

let nombre1Number = parseInt(nombre1.value);
let nombre2Number = parseInt(nombre2.value);

theResultat.value = nombre1Number + nombre2Number;