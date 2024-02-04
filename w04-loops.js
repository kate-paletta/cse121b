myInfo = {
    name: "Kate Paletta",
    photo: "images/photo.jpg",
    favoriteFoods: ["Focaccia", "Venison Burgers", "Chicken & Waffles", "Cupcakes", "Fries"],
    hobbies: ["Crochet", "Drawing", "Hiking", "Baking", "Journaling"],
    placesLived: [
      {
        place: "East Lansing, MI",
        length: "11 years",
      },
      {
        place: "Phoenix, AZ",
        length: "6 years",
      },
      {
        place: "Missoula, MT",
        length: "3 year",
      },
    ],
  };
  // Activity 1
  // with .forEach
  const hobbyItem = document.querySelector(hobbies);
  function createandAppendFoodItem(hobby) 
  {
    let hobbies = document.createElement('li');
    hobbies.textContent = hobby;
    hobbyItem.appendChild(hobbies);
  }
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
}
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);