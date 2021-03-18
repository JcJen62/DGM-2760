document.querySelector("#companyName").innerText = "High-Low";
document.querySelector("#companyMoto").innerText = "A Guessing Game";
document.querySelector("#myInstructions").innerText =
  "In this game you try to guess a random number between 0 adn 16 in as few tries as possible. You will be awarded a ribbon for your skills. Good Luck, and if you want to play again simply refresh the page.";

let correctNumber = Math.floor(Math.random() * 15);

console.log(`The correct number is ${correctNumber}`);

let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;
correctNumber += 1;

function checkGuess() {
  totalGuesses += 1;
  gamerGuess = document.querySelector("#guess").value;
  let intGuess = parseInt(gamerGuess)

  const feedback = document.querySelector("#feedback");

  if (intGuess === correctNumber) {
    feedback.innerText = "You win!!";
    awardGiven();
  } else if (intGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = "Too high, try again";
  } else if (intGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = "Too low, try again";
  } else {
    feedback.innerText =
      "Please choose a number between 1 and 15 and try again";
    totalGuesses -= 1;
  }

  document.querySelector("#attempts").innerText = totalGuesses;
}

function awardGiven() {
  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
  }

  const awardImage = document.createElement("img");
  awardImage.setAttribute('src', '../Images/kisspng-computer-icons-medal-clip-art-5aed4b6e356353.9090463615255007822187.png')

  const ribbon = document.querySelector("#ribbon");

  ribbon.appendChild(awardImage);
}
