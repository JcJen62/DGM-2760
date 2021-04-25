document.querySelector("#companyName").innerText = "Pizza Palace";
document.querySelector("#companyMoto").innerText = "Literal Pizza Objects";

const question = {
    stem: "Who is in the Tomb?",
    option1: "Jerry",
    option2: "Grant",
    option3: "Tom",
    option4: "Bugs Bunny",
    display: () => {
        document.querySelector('#stem').textContent = question.stem

    },
    checkAnswer: (userInput) => {
        if (userInput === question.option2) {
            document.querySelector('.feedback').textContent = "You are correct!!"
        } else {
            document.querySelector('.feedback').textContent = "Oh try again..."
        }
    }
}

var buttons = document.querySelectorAll('.btnClass')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        question.checkAnswer(btn.textContent)
    })
}); 

document.querySelector('#answerOne').textContent = question.option1
document.querySelector('#answerTwo').textContent = question.option2
document.querySelector('#answerThree').textContent = question.option3
document.querySelector('#answerFour').textContent = question.option4

question.display()