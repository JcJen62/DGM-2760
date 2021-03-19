document.querySelector("#companyName").innerText = "High-Low";
document.querySelector("#companyMoto").innerText = "A Guessing Game";
document.querySelector("#myInstructions").innerText =
  "In this game you try to guess a random number between 0 adn 16 in as few tries as possible. You will be awarded a ribbon for your skills. Good Luck, and if you want to play again simply refresh the page.";

let correctNumber = Math.floor(Math.random() * 15);

let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;
correctNumber += 1;

console.log(`The correct number is ${correctNumber}`);

function checkGuess() {
  totalGuesses += 1;
  gamerGuess = document.querySelector("#guess").value;
  let intGuess = parseInt(gamerGuess);

  const feedback = document.querySelector("#feedback");

  if (intGuess === correctNumber) {
    feedback.innerText = "You win!!";
    awardGiven();
  } else if (intGuess > correctNumber && intGuess < 16) {
    feedback.innerText = "Too high, try again";
  } else if (intGuess < correctNumber && intGuess > 0) {
    feedback.innerText = "Too low, try again";
  } else {
    feedback.innerText =
      "Please choose a number between 1 and 15 and try again";
    totalGuesses -= 1;
  }

  document.querySelector("#attempts").innerText = totalGuesses;
}

let imagePath = " ";
function awardGiven() {
  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
      imagePath = "../Images/Gold.png";
      break;
    case 4:
    case 5:
    case 6:
      imagePath = "../Images/Silver.png";
      break;
    case 7:
      imagePath = "../Images/Bronze.png";
  }

  document.getElementById("checkGuess").disabled = true;

  const awardImage = document.createElement("img");
  awardImage.setAttribute("src", imagePath);

  const ribbon = document.querySelector("#ribbon");

  ribbon.appendChild(awardImage);
}
