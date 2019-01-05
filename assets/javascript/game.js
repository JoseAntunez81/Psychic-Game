
        // Creates an array of letters that lists out all of the options 
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
    
        // Creating variables to hold the number of wins, losses, guesses left and guesses so far. They start at 0.
        var wins = 0;
        var losses = 0;
        var guessLeft = 11;
        var guessSoFar = [];
    
        // Create variables that hold references to the places in the HTML where we want to display things.
        var directionsText = document.getElementById("directions-text");
        var userChoiceText = document.getElementById("userchoice-text");
        var computerChoiceText = document.getElementById("computerchoice-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessLeftText = document.getElementById("guessesLeft-text");
        var guessSoFarText = document.getElementById("guessesSofar-text");
    
        // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {
    
        // Determines which key was pressed.
          var userGuess = event.key;
    
        // Randomly chooses a choice from the options array. This is the Computer's guess.
          var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        // This logic determines the outcome of the game win or lose, and increments the appropriate number
         if (userGuess === computerGuess) {
            wins++;    
            guessLeft = 10;
            guessSoFar = [];//I create an array to get the user input
            
         
         }else if (userGuess !== computerGuess) {
             guessLeft --;
             guessSoFar.push(userGuess);//This capture the letters the user guesses
         }
          if (guessLeft === 0){
            losses++;
            guessLeft = 10;
            guessSoFar = [];
         }
            
            // Hide the directions
            directionsText.textContent = "";
    
            // Display the user and computer guesses, and wins,losses chances left, and the letters already used.
            computerChoiceText.textContent = "Guess what letter I am thinking of ";
            userChoiceText.textContent = "You chose: " + userGuess;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            guessLeftText.textContent = "Guesses left: " + guessLeft;
            guessSoFarText.textContent = "You guesses so far: " + guessSoFar;
          
        };
      
