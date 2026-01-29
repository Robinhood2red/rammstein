// // 1. Select the '.menuBurger' element from the DOM.
let menuBurger = document.querySelector('.menu-burger'),
// // 2. Select the '.basculant' element from the DOM.
basculant =  document.querySelector('.basculant')

// // 3. Add a 'click' event listener to the '.basculant' element.
basculant.addEventListener('click', function () {
// // 4. Toggle the 'active' class on the '.menuBurger' element.
menuBurger.classList.toggle('active')
});

// // ANIMATION RETOUR HAUT DE PAGE !CLAUDE!
document.querySelector('.anchor').addEventListener('click', function(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - startPosition;
    const duration = 2000; // 5 secondes
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
});
// // FIN ANIMATION RETOUR HAUT DE PAGE !CLAUDE!

// function chatBot() {

// let userinput = prompt('Bienvenue');
//   if (userinput === 'Bonjour'){
//     alert('Bonjour, ça va ?')
//     let userInputmalpoli = prompt();
//       if (userInputmalpoli === 'oui') 
//         alert('Je suis content pour toi')
//       else if (userInputmalpoli === 'non') 
//         alert('Désolé, il faut que je file..')
//   }else if (userinput === 'Tu va bien ?'){
//     alert('Bien et toi ?');
//   }else {
//     alert("Désolé, je n'ai pas compris");
//   }
// }

// chatBot();

// function chatBot() {

//   let userPrint = prompt('Bonjour, avez-vous faim ?');
//   if (userPrint === 'non'){
//     alert('Personne suivante svp !')
//   }else if(userPrint === 'oui'){
//     let userInputMenu = prompt('Bien, que puis-je vous servir ? Menu végé ou Menu viandard');
//       if (userInputMenu === 'Menu végé'){
//         let userInputMenuVégé = prompt('Salade Greque ou Soupe aux carottes');
//           if (userInputMenuVégé === ('Salade Greque')){
//             alert('Compris, nous vous apporton cela dans 10mn')
//           }else if(userInputMenuVégé == ('Soupe aux carottes')){
//             alert('Trés bien, nous vous apportont tout cela dans 10mn')}
//       }else if(userInputMenu === 'Menu viandard'){
//         let userInputMenuViandard = prompt('Langue de boeuf ou Foie de veau');
//           if (userInputMenuViandard === ('Langue de boeuf')){
//             alert('Trés bon choix, nous vous apporton cela dans 10mn')
//           }else if(userInputMenuViandard === ('Foie de veau')){
//             alert('Entendu, nous vous ampprtont tout cela dans 10mn')
//           }
//   } 
//   }else {
//     alert("Désolé, je n'ai pas compris");
// }
// }
// chatBot();


//-------------------------------JEU DU PENDU--------------------------------------
      //  TABLEAU MAUVAUSES LETTRES
      var wrongLetter = [];

      //  TABLEAU LETTRES ATTENDUES
      //  Si le joueur trouve une lettre, la supprimer du tableau
      var secretWord = 'orthographe';
      var goodLetter = secretWord.split('');
      var goodLetterFound = '';

      while (wrongLetter.length < 10 && goodLetter.length > 0) {
        let message = 
        'Nombre de lettres attendues ' + goodLetter.length + '\n' +
        'Trouvées : '  + goodLetterFound + '\n' +
        'Erreurs : '  + wrongLetter.join(', ') + '\n' +
        'Tentatives restantes : '  + (10 - wrongLetter.length) + '\n';
      
        var playerChoice = prompt(message).toLowerCase();
      
        //choice = goodLetter.indexOf(playerChoice);
        
        if (goodLetter.indexOf(playerChoice) !== -1) {
          //  Quand DANSgoodLetter playerChoice choisit autre que -1
          let occurencesLetter = 0; //  Compteur de goodLetter POUR les occurences

          while (goodLetter.indexOf(playerChoice) !== -1) { //   Mon futur index
            
            //  variable = DANSgoodLetter playerChoice
            let index = goodLetter.indexOf(playerChoice);
            
            //  splice SUPPRIME de goodLetter la lettre choisie 
            //  PUIS la boucle while recommence car 
            //  indexOf(playerChoice PAR EXEMPLE 'o' renvois maintenant un 2eme 'o')
            //  PUIS splice recommence
            goodLetter.splice(index, 1); //  SUPPRIME une occurence
            occurencesLetter++; //  COMPTE les occurences
          }
          // OU goodLetterFound = goodLetterFound + playerChoice 
          // ajoute les bonnes lettres das le tableau
          goodLetterFound += playerChoice; 
          alert("Bien joué ! :-)");
          } else {
              wrongLetter.push(playerChoice);
              alert("Raté ! :'(");
          }
        console.log (goodLetterFound);
        console.log (wrongLetter);
      }
      if (wrongLetter.length === 10) {
        let feedback = document.getElementById('visual-feedback');
        feedback.innerHTML = '<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHEyMXNkcXZ4NHg5cTBzZW92Y3QxZHYzdXI3N2JvYWwzOHp3dW03MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Ep2aFnTfs6TC/giphy.gif" alt="Explosion">';
        setTimeout(function() {
          alert('PERDU : \nLe mot était : ' + secretWord)
        }, 100)
        
      } else {
        alert('GAGNE ! \nMot secret : ' + secretWord)
      }
//----------------------------------FIN JEU DU PENDU---------------------------------------