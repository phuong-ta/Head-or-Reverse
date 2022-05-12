/**
Orientation - JavaScript assignment 1
Solution by: [PhuongTa]
*/

// Example function for reading user's input values from html form
function checkUserChoice() {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  //console.log('user choice', userChoice);
  return userChoice;
}
const coinResult =[];
const gameResult = [];
var amountClick = 0;
function startGame() {

  // count how many time user click
  amountClick +=1;
  const numberClick = amountClick;
  //document.getElementById("result-history").innerHTML = numberClick;

  // Start game 
  if (amountClick >0) {
    //create computer choice
    const allResults = ["head", "reverse"];
    const valueResult = allResults[Math.floor(Math.random()*allResults.length)];
    // Push result of computer's choice to array 
    

    // Get reference to html element with id "coin-image"
    const coinImage = document.querySelector('#coin-image');
    // Change the value of the src attribute
    coinImage.src = `${valueResult}.png`;

    //get value of function userChoice and randomResult
    const choice = checkUserChoice();
    console.log("user's choice " + choice);
    console.log("computer's choice "+ valueResult);
    console.log(coinResult);
    
    const resultParagraph = document.querySelector('#result');
    
    // Set time of click 5
    if (amountClick < 6) {
      // Check user choice anf result 
        if (choice == valueResult) {
          // Change the text content of the paragraph element
          resultParagraph.textContent = 'You won! Click "Thow" to play more';
          gameResult.push("win");
          // Push result of computer's choice to array 
          coinResult.push(choice);
          console.log(gameResult);
          
        } else{
          resultParagraph.textContent = 'Try again!';
          gameResult.push("lose");
          console.log(gameResult);
        }
        
        // count how many time player has won 
        const winCount = gameResult.filter(word => word === "win");
        console.log( "win amount "+ winCount.length);
        document.getElementById("win-count").innerHTML = winCount.length;
        document.getElementById("result-history").innerHTML = winCount.length + "/"+ numberClick;

        // count head and reverse
        const headCount = coinResult.filter(word => word === "head");
        console.log("amount of head " + headCount.length);
        document.getElementById("head-count").innerHTML = headCount.length;

        const reverseCount = coinResult.filter(word => word === "reverse");
        console.log("amount of reverse " + reverseCount.length);
        document.getElementById("reverse-count").innerHTML = reverseCount.length;

    } else{
      alert('You used all changes. Click to OK to play again');
      window.location.reload(); 
    }
  }
}

// Add functionality to button by binding a button click event and a listener function
const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', checkUserChoice);
throwButton.addEventListener('click', startGame);
// Examples of changing html file content
