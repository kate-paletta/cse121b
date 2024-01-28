/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Kate Paletta";
let currentYear = new Date;
// let profilePicture = 'images/me.jpg'


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('year');
const profilePicture = document.querySelector('picture img');


/* Step 4 - Adding Content */
profilePicture.src = 'images/me.jpg';
nameElement.innerHTML = `<strong>${fullName}</strong>`;




/* Step 5 - Array */
let favFood = ["Focaccia","Shepherds Pie","Cake","Cheese Burgers","Chicken & Waffles"];

function displayArray(array) 
{
    var favText = favFood.join(', ');
    foodElement.textContent += favText + "\n";
}
displayArray(favFood);

let addFood = "Cheesy Potatoes";
favFood.push(addFood);
foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;




