
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//Link to use:
//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// https://youtu.be/WcSTeotmJtw?t=9213

//https://www.thecocktaildb.com/api.php

//original link
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=



//----------------------------

document.getElementById("getButton").addEventListener("click", getDrink)
document.getElementById("stopButton").addEventListener("click", stop)



function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

let drinkArray = []

function getDrink() {

  let drink = document.querySelector("input").value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic${drink}`) // Make request to server.
  .then(res => res.json()) // parse response as JSON // Treat what's coming back as JSON.
  .then(data => { // Pass whatever we get back into "data".
    for(let x = 0; x < data.drinks.length; x++) {
      drinkArray.push(data.drinks[x])
    }

    console.log(drinkArray)

    document.querySelector("h2").innerText = drinkArray[0].strDrink
    document.querySelector("img").src = drinkArray[0].strDrinkThumb
    document.querySelector("h3").innerText = drinkArray[0].strInstructions
  })

  .catch(err => { // If something does wrong, we'll get an error printed to the console.
    console.log(`error ${err}`)
  });

  start()
}

function showDrink() {
  document.querySelector("h2").innerText = drinkArray[i].strDrink
  document.querySelector("img").src = drinkArray[i].strDrinkThumb
  document.querySelector("h3").innerText = drinkArray[i].strInstructions 
  i++
}

let intervalID

let i = 1

function start() {
  intervalID = setInterval(showDrink, 5000);
}

function stop() {
  clearInterval(intervalID);
}

//cocktail leon youtube
//https://youtu.be/WcSTeotmJtw?t=9213

