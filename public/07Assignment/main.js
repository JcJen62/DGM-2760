document.querySelector("#companyName").innerText = "Pizza Palace";
document.querySelector("#companyMoto").innerText = "Literal Pizza Objects";

let message

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} as a topping and cheese!`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: function () {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        message = `You will need to purchase ${flour} cup(s) of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message

        if (pizza.size === 'large') flour *= 3
        message = `You will need to purchase ${flour} cup(s) of flour and 2 lbs of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.getElementById('build').addEventListener('click', () => pizza.buildPizza())
document.getElementById('shopping').addEventListener('click', pizza.shoppingList)