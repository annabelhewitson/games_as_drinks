document.addEventListener('DOMContentLoaded', function() {

document.getElementById('GiveMeADrink').addEventListener('click', function(event) {

event.preventDefault();

//Add 'FFXIV' to array if the drink gets added
const drinkArray = ['Hades','Witcher','AnimalCrossing','Katamari','Skyrim', 'Ookami', 'Kirby', 'OuterWorlds']
var x = drinkArray.length; //x = the number of drink options
var rndmDrink
const drinkObject = {
    Hades: {
        url: `See the drink's page <a href = "Hades wine page.html">here</a>`, //just change the # in the url section of each game :)
        img: `<img src="./images/hades.png" alt="Hades image">`,
        name: "Hades",
    },
    Witcher: {
        url: `See the drink's page <a href = "Witcher Swallow page.html">here</a>`,
        img: `<img src="./images/witcher.jpg" alt="Witcher image">`,
        name: "The Witcher 3",
    },
    AnimalCrossing: {
        url: `See the drink's page <a href = "Animal Crossing Smoothie.html">here</a>`,
        img: `<img src="./images/animal_crossing.png" alt="Animal Crossing image">`,
        name: "Animal Crossing",
    },
    Katamari: {
        url: `See the drink's page <a href = "Katamari Stacked Milkshake.html">here</a>`,
        img: `<img src="./images/katamari.png" alt="Katamari image">`,
        name: "Katamari Damacy",
    },
    Skyrim: {
        url: `See the drink's page <a href = "Skyrim Nord Mead Page.html">here</a>`,
        img: `<img src="./images/skyrim.png" alt="Skyrim image">`,
        name: "Skyrim",
    },
    Ookami: {
        url: `See the drink's page <a href = "Okami Sake.html">here</a>`,
        img: `<img src="./images/Ookami.png" alt="Ookami image">`,
        name: "Ōkami",
    },
    Kirby: {
        url: `See the drink's page <a href = "Kirby Boba.html">here</a>`,
        img: `<img src="./images/Kirby.png" alt="Kirby image">`,
        name: "Kirby",
    },
    OuterWorlds: {
        url: `See the drink's page <a href = "Outer Worlds.html">here</a>`,
        img: `<img src="./images/OuterWorlds.JPG" alt="Outer Worlds image">`, //PLACEHOLDER IMG
        name: "The Outer Worlds",
    },
    // FFXIV: {
    //     url: `See the drink's page <a href = "#">here</a>`,
    //     img: `<img src="./images/FFXIV_placeholder.jpeg" alt="FFXIV image">`, //PLACEHOLDER IMG
    //     name: "Final Fantasy XIV",
    // }
}

    r = (Math.floor(Math.random() * x)); //returns random integer 0-(x-1)

    rDrink = drinkArray[r];

    const {url} = drinkObject[rDrink];
    const {img} = drinkObject[rDrink];
    const {name} = drinkObject[rDrink];

    document.getElementById('rndmDrinkURL').innerHTML = url;
    document.getElementById('rndmDrinkImg').innerHTML = img;
    document.getElementById('rndmDrinkName').innerHTML = `Try ${name}!`;

})

});

