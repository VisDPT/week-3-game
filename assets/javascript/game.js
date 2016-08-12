/*Guess what letter I'm thinking of

Wins: (# of times the user has guessed the letter correctly)

Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

Guesses Left: (# of guesses left. This will update)

Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.) */

// Sets the Psychic letter choices
var psychicChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', 'v',];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', 'v',];
var correctGuess = false; //player didn't guess correctly


// For tallies
var wins = 0;
var losses = 0;
var guessesLeft= 10;
var userGuessArray= [];





// sets psychic/computer choice equal to the random. Kept outside so that it doesnt change on every keyup
var psychicLetter = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
console.log(psychicLetter); //records psychic choice to console.log


// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) { //captures key click
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      /*document.getElementById("kp1").innerHTML = userGuess; */

    userGuessArray.push(userGuess); //adds changing userGuess to userGuessArray
    //console.log(userGuessArray);

    var userGuess9= userGuessArray.slice (0,9) //to show only 9 of user guesses on screen

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


         
          if (userGuess == psychicLetter){
            wins =+ 1;
            guessesLeft--;
          }

             //console.log (wins + "Wins: " + guessesLeft + "guesses left!");
          
          else if (userGuess !== psychicLetter){            
            guessesLeft--;  
          }
            //Keeps guessesLeft fro going negative
          
            if (guessesLeft < 0) 
              {guessesLeft = 9;
                losses++;
            }

              // Taking the tallies and displaying them in HTML
              var html = "<p>Press the letter I am thinking!</p>" +
              "<p>WINS:   " + 
              wins + 
              "</p>" +
              "<p>LOSSES:    " + 
              losses + 
              "</p>" +
              "<p>GUESSES LEFT:    " + 
              guessesLeft + 
              "</p>" + 
              "<p>LETTERS GUESSED:    " + 
              userGuess9 + 
              "</p>";

              // Placing the html into the game ID
              document.querySelector('#game').innerHTML = html;
        
      }
}

//PLAN is to add losses at reset; add a reset button   


