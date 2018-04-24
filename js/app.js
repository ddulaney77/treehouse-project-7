const qwerty = document.getElementById('qwerty');                       //Get the element with the ID of qwerty and save it to a variable.
let missed = 0;                                                        //Count the missed guesses in the game.//create a variable, initialized to 0,
const overlay = document.getElementById('overlay');
const resetButton = document.querySelector('.btn__reset');
const hearts = document.querySelectorAll('.tries img');
const title = document.querySelector('.title');
const listItems = document.getElementsByClassName('letter');
resetButton.addEventListener('click', (e) => {                          //Attach a event listener to the “Start Game” button
  overlay.style.display = 'none';                                       // hide the start screen overlay.
  overlay.className = 'start';
  missed = 0;
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('show');
  }
  for (let i = 0; i < keyButtons.length; i++) {
    keyButtons[i].removeAttribute('class');
    keyButtons[i].removeAttribute('disabled');
  }
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].src = 'images/liveHeart.png';
  }
});

let phrases = ['Wheel of success is fun', 'Treehouse is awesome', 'Javascript hurts my head', 'I love cats',  'coding projects rock'];      //Create a phrases array that contains at least 5 different phrases as strings.

function getRandomPhraseAsArray(array){                                       //Create a getRandomPhraseAsArray function.//write the function so that it takes an array as an parameter:
  const randomPhrase = array[Math.floor(Math.random() * array.length)];       //This function should randomly choose a phrase from the phrases array
  return randomPhrase.toUpperCase().split('');                                //and split that phrase into a new array of characters.
}
const phraseArray = getRandomPhraseAsArray(phrases);                          //pass in the phrases array as an argument when you call the function:
                                                                            //write this function so that it is reusable--
                                                                            //meaning that it can take any given array of strings (with no special characters) and return an array of characters.
                                                                            //The function should then return the new character array.
const phrase = document.querySelector('#phrase ul');                        //target ul element,
function addPhraseToDisplay(array){                                         //Create an addPhraseToDisplay function//the function will need to take an array as a parameter:
  for (let i = 0; i < array.length; i += 1) {                               //that loops through an array of characters.
    const li = document.createElement('li');                                //Inside the loop create a list item,
    phrase.appendChild(li);                                                 //append that list item to the #phrase ul
    li.textContent = array[i];
if (array[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }                                                                       // If the character in the array is a letter and not a space,
                                                                            //the function should add the class “letter” to the list item.
  }
}
addPhraseToDisplay(phraseArray);                                              //save it to a variable, and pass it to addPhraseToDisplay as an argument:
qwerty.addEventListener('click', (e) => {                                   //Add an event listener to the keyboard.//Use event delegation to listen only to button events from the keyboard.
if (e.target.tagName === "BUTTON"){
                                                                            //When a player chooses a letter, add the "chosen" class to that button so the same letter can’t be chosen twice.
                                                                            //Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks.
  e.target.className = 'chosen';
  e.target.disabled = true;
const match = checkLetter(e.target);                                      //Pass the button to the checkLetter function,
  if (!match) {
    missed++;
  hearts[hearts.length - missed].src = '../images/lostHeart.png';
  }
  checkWin();                                                              //and store the letter returned inside of a variable called letterFound.
}
});
const letter = document.querySelectorAll('.letter');
const keyButtons = qwerty.querySelectorAll('button');
function checkLetter(button) {
const buttonClicked = button.textContent.toUpperCase();
  let letterFound = null;                                                 //The checkLetter function should get all of the elements with a class of “letter”
  for (let i = 0; i < letter.length; i += 1 ) {                          //The function should loop over the letters and check if they match the letter in the button the player has chosen.
        if ( buttonClicked === letter[i].textContent ){                 //If there’s a match, the function should add the “show” class to the list item containing that letter,
          letter[i].classList.add('show');
              letterFound = true;                                       // store the matching letter inside of a variable,
            }
          }
          return letterFound ? buttonClicked : null;
        };                                                                //and return that letter.
                                                                          //If a match wasn’t found,  //the function should return null.
                                                                          //If the checkLetter function returns a null value,
                                                                          //If the value is null,    //remove one of the tries from the scoreboard.
                                                                          //When you remove a try from the scoreboard, make sure to increase the missed count by 1.
function checkWin() {                                                   //Create a checkWin function.
  const guesses = document.querySelectorAll('.show');                    //Each time the player guesses a letter,
   if (letter.length === guesses.length) {                               //this function will check whether the game has been won or lost.
      overlay.classList.replace('start','win');                          //If number of letters with class "show" and number of letters with class "letters" are equal,
      title.textContent = 'You WON!';
      overlay.style.display = 'block';
      resetButton.textContent = 'Reset';                                 //show the overlay screen with the “win” class and appropriate text.
    } else if (missed >= 5) {
      overlay.classList.replace('start','lose');
      title.textContent = 'Sorry, you lost';
      overlay.style.display = 'block';
      resetButton.textContent = 'Reset';                                //At the very end of the keyboard event listener,
    }                                                                  //is equal to the number of letters with class “letters”.
}
                                                                      // Otherwise, if the number of misses is equal to or greater than 5,
                                                                      //show the overlay screen with the “lose” class and appropriate text.
