// Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie.
// Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés

//* Nombre d'essais

// Selentionner le elementguessNumber dans HTML que le jeu mets un nombre 
const number =  document.querySelector('.number');
const guessNumber = document.querySelector('#guessnumber');

// selectionner le bouton dans HTML
const bouton = document.querySelector('#bouton');
// selectionner le element result dans HTML
const result = document.querySelector('#result');
// selectionner le bouton dans HTML
const again = document.querySelector('#tryagain');

// selectionner l'element high dans HTML
const notice = document.querySelector('#notice');
// selectionner l'element chance dans HTML
const chance = document.querySelector('#chance');
// selectionner l'element lastResult dans HTML
const lastResult = document.querySelector('#lastResult');

// Créer devinette de nombre
    let randomNumber = Math.floor(Math.random() * 100);
// déclarer une variable et le stoker le value 0
    let i = 0;
// Créer une fonction jeu 
    function jeu() {
        // déclarer une variable pour stocker la value de input'guessNumber'
    let value = guessNumber.value; 
    // le value est adjouté sur l'element result
    result.insertAdjacentHTML ("beforeend", `${value}, `);
    // augmentatation de valeur i
    i++;
    // ajouter et changer la value de l'element chance, afficher le nombre de tentative restantes
    chance.innerHTML = 10 - i ;
    // si le nombre de tentative est supérieur à 10, afficher 'vous avez échoué'
    if (i>10){
        number.style.display = 'none';
        lastResult.innerHTML = 'Vous avez échoué'
    };

    // // if the number of the player is higher than the random player, show the message "your number is higher "
    if (randomNumber < value ){
         notice.innerHTML = 'Le nombre est supérieur au bon nombre'
     }
    // // 4 - if the number of the player is smaller than the random player, show the message "your number is smaller "
     else if (randomNumber > value ) {
        notice.innerHTML = 'Le nombre est inférieur au bon nombre'
     }
    // // if the number of the player is equal than the random player, 'you win';
    else{
        number.style.display = 'none';
        lastResult.innerHTML = 'Vous gagnez'
    }
}
// écouter l'évènement click sur le bouton pour lancer le fonction
    bouton.addEventListener('click', jeu)

// écouteur sur l'évènement click "again" pour effacer fonction 'addList'

    again.addEventListener('click', (event)=> {
        location.reload();
    });

