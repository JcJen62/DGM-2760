document.querySelector('#companyName').innerText = "Joe's Bed and Breakfast"
document.querySelector('#companyMoto').innerText = "Stay Awhile and Relax!"


let todaysDate = new Date();
document.getElementById('date').innerHTML = `Today is ${todaysDate.toLocaleDateString()} keep this in mind when booking!`;

document.getElementById('nameVisitor').innerHTML = `Hello ${prompt("Please enter your name")} thanks for visiting`
