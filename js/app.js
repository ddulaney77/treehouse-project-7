
//document.addEventListener("DOMContentLoaded", ()
//){
//closed curly brace at very bottom of all functions



const qwerty = document.getElementById('qwerty');        //Get the element with the ID of qwerty and save it to a variable.
let missed = 0;                                         //Count the missed guesses in the game.                             //create a variable, initialized to 0,

const overlay = document.getElementById('overlay');
const resetButton = document.querySelector('.btn__reset');

resetButton.addEventListener('click', (e) => {         //Attach a event listener to the “Start Game” button
  overlay.style.display = 'none';                     // hide the start screen overlay.
});

let phrases = ['Wheel of success is fun', 'Treehouse is awesome', 'Javascript hurts my head', 'I love cats', 'my super coding projects'];      //Create a phrases array that contains at least 5 different phrases as strings.

function getRandomPhraseAsArray(array){                                       //Create a getRandomPhraseAsArray function.//write the function so that it takes an array as an parameter:
  const randomPhrase = array[Math.floor(Math.random() * array.length)];       //This function should randomly choose a phrase from the phrases array
  return randomPhrase.toUpperCase().split('');                                //and split that phrase into a new array of characters.
}

const phraseArray = getRandomPhraseAsArray(phrases);                          //pass in the phrases array as an argument when you call the function:
 //write this function so that it is reusable--
//meaning that it can take any given array of strings (with no special characters) and return an array of characters.
//The function should then return the new character array.
const phrase = document.querySelector('#phrase ul');          //target ul element,

function addPhraseToDisplay(array){                        //Create an addPhraseToDisplay function//the function will need to take an array as a parameter:
  for (let i = 0; i < array.length; i += 1) {              //that loops through an array of characters.
    const li = document.createElement('li');               //Inside the loop create a list item,
    phrase.appendChild(li);                                //append that list item to the #phrase ul
    li.textContent = array[i];
    // If the character in the array is a letter and not a space,
   //the function should add the class “letter” to the list item.
    if (array[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
}

addPhraseToDisplay(phraseArray);                          //save it to a variable, and pass it to addPhraseToDisplay as an argument:
//****************************************************************************************


                                                          //This function should have one parameter:
                                                          //the button the player has clicked when guessing a letter.





qwerty.addEventListener('click', (e) => {                //Add an event listener to the keyboard.//Use event delegation to listen only to button events from the keyboard.
if (e.target.tagName = "BUTTON"){
  //When a player chooses a letter, add the "chosen" class to that button so the same letter can’t be chosen twice.
  //Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks.
  e.target.className = 'chosen';
  e.target.disabled = true;

  //Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound. At this point, you can open the index.html file, click any of the letters on the keyboard, and start to see the letters appear in the phrase.
  const letterFound = checkLetter(e.target);
}
});

const letter = document.querySelectorAll('.letter');
const keyButtons = qwerty.querySelectorAll('button');
function checkLetter(button) {
const buttonClicked = button.textContent.toUpperCase();
  let letterFound = null;      //The checkLetter function should get all of the elements with a class of “letter”
  for (let i = 0; i < letter.length; i += 1 ) {                     //The function should loop over the letters and check if they match the letter in the button the player has chosen.

    //If there’s a match,
    //the function should add the “show” class to the list item containing that letter,
    // store the matching letter inside of a variable,
    //and return that letter.

    //else ******
    //If a match wasn’t found,
    //the function should return null.
    if ( buttonClicked === letter[i].textContent ){
      letter[i].classList.add('show');
      return letterFound = true;
    }
  } return letterFound;
};
                                                        //Create a checkLetter function.//Pass the button to the checkLetter function,
                                                        //The checkLetter function will be used inside of the event listener
                                                        //In the keyboard event listener, after checkLetter is called,
                                                        //write a statement to check the value of the letterFound variable.





//const letterFound =  letter.value;               //store the letter returned inside of a variable called letterFound.

                                                  //Count the missed guesses in the game. (Have variable above)
//use if else statements*******************************************************************
//if (checkLetter == 'null'){                             //If the checkLetter function returns a null value,
                                                        //the player has guessed the wrong letter.
//.removeChild??
//alert("I'm sorry that is not the right letter");
//} else {

//}

                                                          //If the value is null,
                                                          //remove one of the tries from the scoreboard.
                                                          //When you remove a try from the scoreboard, make sure to increase the missed count by 1.
//*****************************************************************************************

       //function checkWin();                                 //Create a checkWin function.

                                                              //Each time the player guesses a letter,
                                                              //this function will check whether the game has been won or lost.
                                                              //At the very end of the keyboard event listener,
                                                             //run this function to check if the number of letters with class “show”
                                                             //is equal to the number of letters with class “letters”.

//use if else statements**************************************************************
//If they’re equal,
//show the overlay screen with the “win” class and appropriate text.
//else*******************
// Otherwise, if the number of misses is equal to or greater than 5,
//show the overlay screen with the “lose” class and appropriate text.
//***********************************************************************************


//exceeds steps
///Create CSS transitions for each letter in the phrase display as they are revealed.
//Add a button to the “success” and “failure” screens that reset the game.
//You’ll have to recreate the buttons in the keyboard,
//generate a new random phrase,
//and set the number of misses to zero.

//const successButton = document.createElement('successButton');
//const failureButton = document.createElement('failureButton');
// successButton.textContent = "success";
// li.appendChild(successButton);
// return li;


// failureButton.textContent = "failure";
// li.appendChild(failureButton);
// // return li;
// ul.addEventListener('click', (e)) =>{
//   if (e.target.tagName = "SUCCESS"){
//     if (e.target.textContent =="success"){
//       const li = e.target.parentNode;
//       const ul = li.parentNode;
//       ul.removeChild(li);
//     }
//   }
//
//
//
// });
