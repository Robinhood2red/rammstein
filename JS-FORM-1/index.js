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
// function clock() {
//    const clockSystem = new Date();
//    let h = clockSystem.getHours();
//    let m = clockSystem.getMinutes();
//    let s = clockSystem.getSeconds();

//    h = h<10 ? '0' + h : h;
//    m = m<10 ? '0' + m : m;
//    s = s<10 ? '0' + s : s;

//    const time = h + ' : ' + m + ' : ' + s;
//    document.getElementById('clockID').innerHTML = time;
// }
// setInterval(clock, 1000);
// clock();
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
let lights = document.querySelectorAll('.light');
let currentIndex = 0;

function fireOn() {
   lights.forEach((light, index) => {
      if (index === currentIndex) {
         light.classList.add('active');
         light.style.opacity = '1';
      } else {
            light.classList.remove('active');
            light.style.opacity = '0.3';
         };
      });
      currentIndex++;
      if (currentIndex >= lights.length) {
         currentIndex = 0;
      };  
   };
setInterval(fireOn, 1500);
console.log(fireOn);

// 2 variables avec boucle for ou forEach pour vérifier que rien est allumé sinon éteint 
// allumage lumière CSS 
// gestion sequence -> implément compteur pour passer d'une lumière à l'autre
// si dernière lumière repartir à 0 --> set intervale if dernière lumière --> 0