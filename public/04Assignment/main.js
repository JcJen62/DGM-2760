document.querySelector("#companyName").innerText = "Fortune Teller";
document.querySelector("#companyMoto").innerText =
  "Your Fortune is within reach";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let month = getRandomInt(1, 12);
let fate = getRandomInt(1, 5)
let day = getRandomInt(1, 30)

function getMonth(month) {
  let name;
  switch (month) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;
    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      name = "Not a month";
      break;
  }
  return name;
}

function getFortune(fate) {
  let message
  switch (fate) {
    case 1:
      message = "be the strongest person in the world!"
      break;
    case 2:
      message = "win $1,000,000 and never have to work again in your life!"
      break;
    case 3:
      message = "meet your favorite singer and get backstage passes to their next concert!"
      break;
    case 4:
      message = "Win a noble prize, and be honored for your greatness!"
      break;
    case 5:
      message = "Get a genies lamp and earn 3 wishes with no rules attached."
      break;
    default:
      message = "An error in you fortune has occured..."
      break;
  }
  return message
}

const monthName = getMonth(month)
const getFate = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, you will ${getFate}`

document.querySelector('#myFortune').innerText = fortuneRevealed