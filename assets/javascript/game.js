/*Guess what letter I'm thinking of

Wins: (# of times the user has guessed the letter correctly)

Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

Guesses Left: (# of guesses left. This will update)

Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.) */

// Sets the Psychic letter choices
var psychicChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', 'v',];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', 'v',];
var correctGuess = false;
var userGuess;


// Declares the tallies to 0
var wins = 0;
var losses = 0;
var guessCount = 9;





// When the user presses the key it records the keypress and then sets it to userguess
  document.onkeyup = function(event) { //captures key click
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      document.getElementById("kp1").innerHTML = userGuess;

      // This sets the computer guess equal to the random.
      var psychicLetter = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
      console.log(psychicLetter); //records psychic choice to console.log

      // It tests to determine if the computer or the user won the round and then increments 
        if (userGuess == psychicLetter){
            wins++;
            document.write ("guesses:" + guessCount);
          } else {
            guessesLeft = guessCount -1;
          }



//HOW DO I LOGG MULTIPLE USER INPUT?
//WHAT TO LOOP?




/*  } 

for (i=0; i<10; i++) {
  document.write("You have"+ i + "guesses");
  console.log(i)''
}

//HOW DO I MAKE USER GUESS GLOBAL?
if (userGuess == psychicLetter) {
  alert ("YOU WIN!!");
}
*/




//

// Making sure the user chooses r, p, or s
    

        // It tests to determine if the computer or the user won the round and then increments 







/*while loop
while(guessCount<10){
  guessCount -=1;
  document.write("Guesses Left" + guessCount);
  if (userGuess === psychicLetter){
    correctGuess = true;
    break;
  }

}
*/

/*
for (var i = 0 ; i <= 9; i++) {
    var psychicLetter = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
    document.write(psychicLetter [i]); */
  //}

//    if (userGuess !== alphabet) {
//      document.write ("CHOOSE A LETTER!")
//    }
/*
// Making sure the user chooses r, p, or s
    if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){

//Determines whether choices are equal or not
if (psychicLetter == userGuess){
  alert("You Guessed it! You are the psychic now!!")
  } else if (psychicLetter != userGuess){
    alert("Guess again!")
  
}
*/
  /*

  // This sets the psychic guess equal to the random.
  var psychicChoice = psychicLetterChoice[Math.floor(Math.random() * psychicLetterChoice.length)];

  if (userGuess ==psychicChoice) {
    alert(wins++);
  }  */



/* 
//GUESSES LEFT
var guesses = 3;
  		var guessesLeft = '['+guesses + ' guesses left]';
  		questions -= 1; 
  		document.write("Guesses Left: " + guessesLeft);
  	
 		
// Taking the tallies and displaying them in HTML
        var html = <h1> The Psychic Game <h1>
        "<p>Press the letter on the keyboard that you suspect I am thinking of!</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
 // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;   */