// alert(nom.value);
// alert(prenom.value);

// document.getElementById("buttonTheFirst").onclick = function direBonjour() {
//     alert('Bonjour !');
// };
// function direBonjour() {
//      alert('Bonjour !');
//  };

// *-------------------Calculette additions------------------
// function addition() {

// let nombre1 = document.getElementById("nombreUn");
// let nombre2 = document.getElementById("nombreDeux");

// let theResultat = document.getElementById("resultat");

// let nombre1Number = parseInt(nombre1.value);
// let nombre2Number = parseInt(nombre2.value);

// theResultat.value = nombre1Number + nombre2Number;
// };
// *-------------------FIN Calculette additions------------------

// let element = document.getElementById('invisible');
// element.classList.remove('hidden'); 

// function disappear() {
//     let elements = document.getElementsByClassName('spoiler'); 
//     for(let i = 0; i < elements.length; i++) {
//         setTimeout(function() { //*--- setTimeoutQ pour quoi faire (masquer) puis quand le faire (à chaque index) 
//            elements[i].classList.add('hidden');
//         }, i * 300, i); //*--- pour un index toutes les 300ms
//     }
// }

// function colorChanges() {
// // Pour récuperer tout les paragraphes avec querySelectorAll, donc 'p'
// let paragraphes = document.getElementsByTagName('p');

// // Boucle pour chaque paragraphe pour lui ajouter l'événement
// for(let i = 0; i < paragraphes.length; i++) {
//         // 'event.target' est le paragraphe sur lequel on clique
//         paragraphes[i].style.backgroundColor = 'yellow';
//     };
// };

// * Sans parametres
// let paragraphes = document.getElementsByTagName('p');
// for(let i = 0; i < paragraphes.length; i++) {
//     paragraphes[i].addEventListener('click', function () {
//         if (this.style.backgroundColor === 'yellow') {
//         this.style.backgroundColor = ''
//         } else {
//             this.style.backgroundColor = 'yellow'
//         };
//     });
// };

// * Avec parametres
// function colorSwipe(paragraphe) {
//     if (paragraphe.style.backgroundColor === 'yellow') {
//             paragraphe.style.backgroundColor = ''
//          } else {
//             paragraphe.style.backgroundColor = 'yellow'
//          };
// };



   // let seconds = 57;
   // let minutes =  59;
   // let hours = 0;

   // seconds ++;

   // if (seconds >= 60) {
   //    seconds = 0;
   //    minutes ++;
   // }
   // if (minutes >= 60) {
   //    minutes = 0;
   //    minutes++;
   // }
   // if (hours >= 24) {
   //    hours = 0;
   // }

   // const clock = setInterval(() => {
   //    seconds ++;

   //    if (seconds >= 60) {
   //       seconds = 0;
   //       minutes ++;
   //    }
   //    if (minutes >= 60) {
   //       minutes = 0;
   //       hours++;
   //    }
   //    if (hours >= 24) {
   //       hours = 0;
   //       clearInterval(clock);
   //    }
   //    let clockSystem = document.querySelectorAll('.clock');
   //    clockSystem = hours + ' : ' + minutes + ' : ' + seconds;

   //    console.log(clockSystem)
   // }, 1000); // 1000ms entre chaque affichage


   // let compteur = 0;
   // const intervalId = setInterval(() => {
   //    console.log(compteur);
   //    compteur++;
   //    if (compteur > 60) {
   //       clearInterval(intervalId);
   //    }
   // }, 1000); // 1000ms entre chaque affichage



//    for (let i = 0; i<=60; i++) {
//     console.log(i)
// }
   // let clockSystem = document.querySelectorAll('.clock');
   // clockSystem = hours + ' : ' + minutes + ' : ' + seconds;
   
   //    for (let i = 0; i < clockSystem.length; i++) {
   //       setTimeout(function() {
   //          clockSystem = hours + ' : ' + minutes + ' : ' + seconds;
   //       }, i * 1000, i);
   //    }


   //* ------------------------------HORLOGE FONCTIONNELLE--------------------------------------
function clock() {
   const clockSystem = new Date();
   let h = clockSystem.getHours();
   let m = clockSystem.getMinutes();
   let s = clockSystem.getSeconds();

   h = h<10 ? '0' + h : h;
   m = m<10 ? '0' + m : m;
   s = s<10 ? '0' + s : s;

   const time = h + ' : ' + m + ' : ' + s;
   document.getElementById('clockID').innerHTML = time;
}
setInterval(clock, 1000);
clock();
   //* ----------------------------------FIN HORLOGE--------------------------------------------
   //* ---------------------------------NBR PAIR IMPAIR-----------------------------------------
// function pairImpair(nbr) {
//    return nbr % 2 === 0;
// }
// console.log(pairImpair(15));
// console.log(pairImpair(34));
// console.log(pairImpair(40));
//* ----------------------------------FIN NBR PAIR IMPAIR---------------------------------------

// function palindrome(mot) {
//    return mot === mot.split('').reverse().join('');
// }
//     let userWord = prompt('Ecrivez votre mot ici');

//    if (palindrome(userWord)) {
//       alert(`"${userWord}" est un palindrome`)
//    } else {
//        alert(`"${userWord}" n'est pas un palindrome`)
//    };

//* ----------------------------------------FEU TRICOLORE-------------------------------------------------
// setinterval
//getelementbyID
// let lights = document.querySelectorAll('.light');
// let currentIndex = 0;

// function fireOn() {
//    lights.forEach((light, index) => {
//       if (index === currentIndex) {
//          light.classList.add('active');
//          light.style.opacity = '1';
//       } else {
//             light.classList.remove('active');
//             light.style.opacity = '0.3';
//          };
//       });
//       currentIndex++;
//       if (currentIndex >= lights.length) {
//          currentIndex = 0;
//       };  
//    };
// setInterval(fireOn, 1500);
// console.log(fireOn);

// 2 variables avec boucle for ou forEach pour vérifier que rien est allumé sinon éteint 
// allumage lumière CSS 
// gestion sequence -> implément compteur pour passer d'une lumière à l'autre
// si dernière lumière repartir à 0 --> set intervale if dernière lumière --> 0
//* ----------------------------------------FIN FEU TRICOLORE-------------------------------------------------

//* ----------------------------------------MODAL-------------------------------------------------

// Crée modale html --> titre, croix, 
// addeventlistener('click') --> window
// Pouvoir fermer l'add en cliquand sur la croix ou nimporte où + l'arrière plan est grisé
// addclasslist / removelist

// let button = document.querySelector('.button');
// let modal = document.getElementById('modalID');
// let closedBtn = document.querySelector('.close');

// // Pour ouvrir la modale en cliquant sur le bouton
// button.addEventListener('click', () => {
//    modal.showModal();
// });

// // Fermer la modale
// closedBtn.addEventListener('click', () => {
//    modal.close();
// });

// // Fermer la modale en cliquant autour
// window.addEventListener('click', (event) => {
//    if(event.target === modal) { // event = évènement --> .target donc cible === modal --> 
//    //  modal.close() .close = fonction close
//       modal.close();
//    }
// });
//* ----------------------------------------FIN MODAL-------------------------------------------------
//* ---------------------------------------CALCULATOR----------------------------------------------
// class Calculator {
//    constructor(myList) { // constructor toujours dans une class 
//       this.list = myList;
//    };

//    calcul() {
//       let total = 0;
//       for (let number of this.list) {
//          total += number;
//       }
//       return total; // Pour additionner dans total
//    };
//    result() {
//       let finalSum = this.calcul();
//       console.log(`Le total est : ${finalSum}`);
//    };
//  };

// const listNumbers = [20, 30, 10, 80];
// const resultatNombre = new Calculator(listNumbers);
// resultatNombre.result();
// // 2eme calcul
// const listNumbers2 = [45, 8, 12];
// const resultatNombre2 = new Calculator(listNumbers2);
// resultatNombre2.result();
//* --------------------------------------FIN CALCULATOR--------------------------------------------

// *----------------------------------------BARBARIANS-----------------------------------------------
// class Barbarian {
//    constructor(gun, slap, knife) { // constructor toujours dans une class 
//       this.gun = gun;
//       this.slap = slap;
//       this.knife = knife;
//    };
//  afficher() {
//    return `You can use the big ${this.gun} ,and a amazing ${this.slap} or a small swiss ${this.knife}`;
//  }
//  result() {
//    let weapons = this.afficher();
//    console.log(`Weapons available : ${weapons}`);
//    };
// };

// const myBarbarian = new Barbarian('gun', 'slap', 'knife');
// myBarbarian.result();
// // *----------------------------------------WIZARDS-----------------------------------------------
// class Wizards {
//    constructor(avada, psw, testicularTorsion) {
//       this.avada = avada;
//       this.psw = psw;
//       this.testicularTorsion = testicularTorsion;
//    };
//  afficher() {
//    return `You can cast ${this.avada} ,an amazing ${this.psw} (only for smartphone) or a ${this.testicularTorsion} (don't work on old school women)`;
//  }
//  result() {
//    let weapons = this.afficher();
//    console.log(`Magic spells available : ${weapons}`);
//    };
// };

// const myWisard = new Wizards('avadakedavra', 'incorrect password', 'testicular torsion');
// myWisard.result();

// *----------------------------------------4 PERSONNAGES-----------------------------------------------
// class Character {
//     constructor(name, title, strength, PV) {
//         this.name = name;
//         this.title = title;
//         this.PV = PV;
//         this.strength = strength;
//     };

//     // Méthode commune à tous les personnages
//     decrire() {
//         return `${this.name}, The ${this.title} | PV: ${this.PV} | Strength: ${this.strength}`;
//     };

//     afficherConsole() {
//         console.log(' ');
//         console.log('--- Fiche Personnage ---');
//         console.log(this.decrire());
//     };
// };
// // * --------------------------------------GANDALF---------------------------------------------
// class Mage extends Character {
//     constructor(name, title, strength, PV, mana) {
//         super(name, title, strength, PV);
//         this.mana = mana;
//     };
//     decrire() { // super.decrire pour aller chercher ma description dans le constructor parent et ajouter mana
//         return `${super.decrire()} | Mana: ${this.mana}`;
//     };
// };

// const gandalf = new Mage('Gandalf', 'Grey Magicien', 40, 150, 300);
// gandalf.afficherConsole();
// // * --------------------------------------CONAN---------------------------------------------
// class Barbarian extends Character {
//     constructor(name, title, strength, PV, shield) {
//         super(name, title, strength, PV);
//         this.shield = shield;
//     };
//     decrire() { // super.decrire pour aller chercher ma description dans le constructor parent et ajouter mana
//         return `${super.decrire()} | Shield: ${this.shield}`;
//     };
// };

// const conan = new Barbarian('Conan', 'Barbarian', 300, 300, -100);
// conan.afficherConsole();
// // * --------------------------------------OPTIMUS PRIME--------------------------------------------
// class Autobots extends Character {
//     constructor(name, title, strength, PV, diesel) {
//         super(name, title, strength, PV);
//         this.diesel = diesel;
//     };
//     decrire() { // super.decrire pour aller chercher ma description dans le constructor parent et ajouter mana
//         return `${super.decrire()} | Diesel: ${this.diesel}`;
//     };
// };

// const optimus = new Autobots('Optimus Prime', 'Autobot', 300, 300, '1,63€/l');
// optimus.afficherConsole();
// // * ------------------------------------CAPTAIN JACK SPARROW-----------------------------------------
// class Pirate extends Character {
//     constructor(name, title, strength, PV, situation) {
//         super(name, title, strength, PV);
//         this.situation = situation;
//     };
//     decrire() { // super.decrire pour aller chercher ma description dans le constructor parent et ajouter mana
//         return `${super.decrire()} | Situation : ${this.situation}`;
//     };
// };

// const jack = new Pirate('Captain Jack Sparrow', 'Pirate', 100, 150, 'lost his ship');
// jack.afficherConsole();
// // * ------------------------------------ASTERIX ET OBELIX-----------------------------------------
// class Gaulois extends Character {
//     constructor(name, title, strength, PV, condition) {
//         super(name, title, strength, PV);
//         this.condition = condition;
//     };
//     decrire() { // super.decrire pour aller chercher ma description dans le constructor parent et ajouter mana
//         return `${super.decrire()} | Condition: ${this.condition}`;
//     };
// };

// const asterixEtObelix = new Gaulois('Astérix et Obélix', 'Gauls', 300, 300, 'Potion adict');
// asterixEtObelix.afficherConsole();


// * -------------------------------------------Les ternaires-----------------------------------------------
// * --1--
// let old = 18;
// let message = old >=18 ? 'Tu es majeur' : 'Tu es mineur';
// console.log(message);
// * --2--
// let question = prompt('Quelle age avez vous ?');
// question ? alert(`Bonjour ${question}`) : alert('Aucun prénom saisis');
// * --3--
// let pairImpair = prompt('Saisisez un nombre :')
// pairImpair % 2 === 0 ? alert('Nombre pair') : alert('Nombre impair');
// * --4--
// let note = prompt('Indiquez une note entre 0 et 20 :');
// note >= 16 ? alert('Exellent') : note >= 12 ? alert('Bien') : note >= 10 ? alert('Moyen') : alert('Insuffisant');
// * --5--
// let tableau = [-5, 12, 0, -3, 8, 0, -1];
// const signes = tableau.map(n => 
//     n > 0 ? '+' : n < 0 ? '-' : '0');
// console.log(signes);
// * --6--
// let tableau = [5, 12, 8, 31, 13, 7, 70];

// const pairImpair = tableau.filter((tableau) => tableau % 2 === 0);
// console.log(pairImpair);
// * --7--
let tableau = ['constantinople', 'canard', 'lion', 'eau', 'ornithorynque'];

const five = tableau.filter(function(tableau) => tableau mot.lenght === 6);
console.log(five);