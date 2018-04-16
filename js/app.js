
//document.addEventListener("DOMContentLoaded", ()
//){
//closed curly brace at very bottom of all functions



const qwerty = document.getElementById('qwerty');        //Get the element with the ID of qwerty and save it to a variable.

const phrase = document.getElementById('phrase');        //Get the element with the ID of phrase and save it to a variable.

let missed = 0;                                          //create a variable, initialized to 0,

const overlay = document.getElementById('overlay');

const resetButton = document.querySelector('.btn__reset');


resetButton.addEventListener('click', (e) => {         //Attach a event listener to the “Start Game” button
  overlay.style.display = 'none';                     // hide the start screen overlay.
});


let phrases = ['Wheel of success is fun', 'Treehouse is awesome', 'Javascript hurts my head', '', 'my super coding projects'];      //Create a phrases array that contains at least 5 different phrases as strings.



function getRandomPhraseAsArray(array){                                       //Create a getRandomPhraseAsArray function.//write the function so that it takes an array as an parameter:
  const randomPhrase = array[Math.floor(Math.random() * array.length)];       //This function should randomly choose a phrase from the phrases array
  return randomPhrase.toUpperCase().split('');                                //and split that phrase into a new array of characters.
}

console.log(getRandomPhraseAsArray(phrases));
 //pass in the phrases array as an argument when you call the function:
 //write this function so that it is reusable--
//meaning that it can take any given array of strings (with no special characters) and return an array of characters.
//The function should then return the new character array.



//Set the game display.

const text = input.value;
const label = document.createElement('label');
label.textContent = ""
//for each character in the array,
const li = document.createElement('li');     //create a list item,
                                            // put the character inside of the list item,
ol.appendChild('li');                         //append that list item to the #phrase ul
li.textContent = text;
input.value ="";
const ol = document.getElementById('scoreboard');



//You’ll need to write the addPhraseToDisplay function so that it can take any array of letters and add it to the display.
//To do that,

function addPhraseToDisplay(array){                        //Create an addPhraseToDisplay function//the function will need to take an array as a parameter:
  for (let i = 0; i < array.length; i += 1) {              //that loops through an array of characters. Inside the loop,


          // if (character === 'letter'){

        }
          //else statements                                  // If the character in the array is a letter and not a space,
                                                          //the function should add the class “letter” to the list item.

}
                                                          // If the character in the array is a letter and not a space,
                                                          //the function should add the class “letter” to the list item.



const randomPhrase = getRandomPhraseAsArray.value;          //To use the function, you’ll get the value returned by the getRandomPhrasesArray,

const phraseArray = getRandomPhraseAsArray(phrases);      //save it to a variable, and pass it to addPhraseToDisplay as an argument:
addPhrasetoDisplay(phraseArray);


//This function should have one parameter: the button the player has clicked when guessing a letter.
//The checkLetter function should get all of the elements with a class of “letter”
//(remember that we added the letter class to all of the letters and none of the spaces when we made the game display).
//The function should loop over the letters and check if they match the letter in the button the player has chosen.



//use and if else statement
//If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.
//If a match wasn’t found, the function should return null.


//if (typeof array === "undefined" || typeof array === "string" || typeof array === "number" )





qwerty.addEventListener('click', (e) =>{               //Add an event listener to the keyboard.//Use event delegation to listen only to button events from the keyboard.
  function checkLetter('button')                       //Create a checkLetter function.//Pass the button to the checkLetter function,
                                                      //The checkLetter function will be used inside of the event listener

});


//When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice.
//Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks. See the MDN documentation for more details.

const letterFound =  //store the letter returned inside of a variable called letterFound.



//Count the missed guesses in the game.


//use if else statements
//If the checkLetter function returns a null value, the player has guessed the wrong letter.
//In the keyboard event listener, after checkLetter is called, write a statement to check the value of the letterFound variable.
//If the value is null, remove one of the tries from the scoreboard.
//If you haven't created it yet, make sure you have a missed variable to store the state of the scoreboard (initialized to 0). When you remove a try from the scoreboard, make sure to increase the missed count by 1.




function checkWin();        //Create a checkWin function.

//Each time the player guesses a letter,this function will check whether the game has been won or lost.
//At the very end of the keyboard event listener, run this function to check if the number of letters with class “show” is equal to the number of letters with class “letters”.

//use if else statements
//If they’re equal, show the overlay screen with the “win” class and appropriate text.
// Otherwise, if the number of misses is equal to or greater than 5,
//show the overlay screen with the “lose” class and appropriate text.
