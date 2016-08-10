/*Guess what letter I'm thinking of

Wins: (# of times the user has guessed the letter correctly)

Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

Guesses Left: (# of guesses left. This will update)

Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.) */

// Sets the Psychic letter choices
var psychicChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', 'v',];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', 'v',];
var correctGuess = false; //player didn't guess correctly



// Declares the tallies to 0
var wins = 0;
var losses = 0;
var guessesLeft =9;




// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) { //captures key click
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      document.getElementById("kp1").innerHTML = userGuess;

      // This sets the computer guess equal to the random.
      var psychicLetter = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
      console.log(psychicLetter); //records psychic choice to console.log
      


    // Making sure the user chooses a letter   
    //if (userGuess == alphabet){
    if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') ||
        (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') ||
        (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') ||
        (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
        (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') ||
        (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') ||
        (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') ||
        (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
        (userGuess == 'y') || (userGuess == 'z'))  {

      
      //DO I PUT THE BELOW IN A FOR LOOP to loop 9 times?
        if (userGuess == psychicLetter){
          wins =+ 1;
          guessesLeft --;
          console.log (wins + "Wins: " + guessesLeft + "guesses left!");
        }
          else if (userGuess !== psychicLetter){
            guessesLeft --;
            console.log ("You have " +guessesLeft + "guesses left!")
          }
    }
}
      // It tests to determine if the computer or the user won the round and then increments 
      //NOT REGISTERING A WIN & new psychic letter with eahc click!!!!
      //for (var guessesLeft = 9; guessesLeft>0; guessesLeft--) {
      /*
      for (var guessesLeft=9; guessesLeft<10; guessesLeft-=1) { //counter to dec guesses
        if (userGuess == psychicLetter){ //if user guesses letter 1st try
            console.log("you win");
            correctGuess = true; //correctGuess becomes true
            wins++; //adds a win to the wins tally
            {break;} //stops the loop
        } else if (){ //if user doesn't guess
            console.log("you lose. try again");
            document.onkeyup = function(event) { //captures key click
            var userGuess2 = String.fromCharCode(event.keyCode).toLowerCase(); //assigns var for 2nd click
            document.getElementById("kp2").innerHTML = userGuess;//second click to the webpage
            } 
        }
      }  */    

      


//console.log ("wins " + wins);
//console.log ("losses " + losses);
//console.log ("guesses left " + guessesLeft);

//Do i do a for loop inside a for loop to reset game at 9??
//HOW DO I LOGG MULTIPLE keypress?
//WHAT TO LOOP?

/*
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==13) {
  alert("You hit the enter key.");
  } else {
  alert("Oh no you didn't.");
  }
}*/


/*
  if ( correctGuess ) {
    document.write('<p>You guessed thee number!</p>');
} else {
    document.write('<p>Sorry. The letter was ' + psychicLetter + '.</p>');
}
*/

      ///do i return the function 9x?





/*  } 


  document.write("You have"+ i + "guesses");
  console.log(i)''
}






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
for (var i = 0 ; i <= 9; i-=) {
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
  		document.write("Guesses Left: " + guessesLeft); */
  	
 		
/*Taking the tallies and displaying them in HTML
        var html = <h1> The Psychic Game <h1>
        "<p>Press the letter on the keyboard that you suspect I am thinking of!</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p> you guessed: " userGuess + "</p>" 
        "<p>guesses left:" +guessCount+ "</p>"
 // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;   */