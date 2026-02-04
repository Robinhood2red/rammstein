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

function disappear() {
    let elements = document.getElementsByClassName('spoiler'); 
    for(let i = 0; i < elements.length; i++) {
        setTimeout(function() { //*--- setTimeoutQ pour quoi faire (masquer) puis quand le faire (à chaque index) 
           elements[i].classList.add('hidden');
        }, i * 300, i); //*--- pour un index toutes les 300ms
    }
}

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



   let seconds = 55;
   let minutes =  59;
   let hours = 0;

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

   const clock = setInterval(() => {
      seconds ++;

      if (seconds >= 60) {
         seconds = 0;
         minutes ++;
      }
      if (minutes >= 60) {
         minutes = 0;
         minutes++;
      }
      if (hours >= 24) {
         clearInterval(intervalId);
      }
      let clockSystem = document.querySelectorAll('.clock');
      clockSystem = hours + ' : ' + minutes + ' : ' + seconds;
      console.log(clockSystem)
   }, 1000); // 1000ms entre chaque affichage



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

