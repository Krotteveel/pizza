var tomatenKnop = document.querySelector('#tomatenKnop');
var tomatenTopping =  document.querySelector('#tomatenTopping');

var mozerellaKnop = document.querySelector('#mozerellaKnop');
var mozerellaTopping =  document.querySelector('#mozerellaTopping');

var champignonsKnop = document.querySelector('#champignonsKnop');
var champignonsTopping =  document.querySelector('#champignonsTopping');

var pepperoniKnop = document.querySelector('#pepperoniKnop');
var pepperoniTopping =  document.querySelector('#pepperoniTopping');

var heeftPepperoni;
var heeftChampignons;
var heeftMozerella;
var heeftTomaten;

var yummySound = new Audio ("audio/yummy.mp3");

var pizza = ["Een Pizza Pepperoni","Een Pizza Champignon","Een Pizza Tomtaat"];
var pElement = document.querySelector("p.naam");
var buttonElement = document.querySelector ("button");


// In deze functie toggle ik .hidden class op en af een Element. Daarnaast checkt hij of er geen hidden op zit. Dit herhaal ik voor alle toppings.

tomatenKnop.addEventListener('click', function () {
    tomatenTopping.classList.toggle('hidden');
    yummySound.play();

    heeftTomaten = document.querySelector('#tomatenTopping:not(.hidden)')

    checkAlleIngedienten();
});

mozerellaKnop.addEventListener('click', function () {
    mozerellaTopping.classList.toggle('hidden');
    yummySound.play();

    heeftMozerella= document.querySelector('#mozerellaTopping:not(.hidden)')

    checkAlleIngedienten();
});

champignonsKnop.addEventListener('click', function () {
    champignonsTopping.classList.toggle('hidden');
    yummySound.play();

    heeftChampignons = document.querySelector('#champignonsTopping:not(.hidden)');

    checkAlleIngedienten();
});

pepperoniKnop.addEventListener('click', function () {
    pepperoniTopping.classList.toggle('hidden');
    yummySound.play();

    heeftPepperoni = document.querySelector('#pepperoniTopping:not(.hidden)')

    checkAlleIngedienten()
});

// Met deze functie worden alle toppings gecheckt of er geen hidden op zit. De functie wordt automatisch aangeroepen zodra je een topping kiest.
// Als er bij geen 1 van de topping hidden op zit dan komt er een alert met lekker volle pizza

function checkAlleIngedienten() {

    if (heeftPepperoni && heeftChampignons && heeftTomaten && heeftMozerella) {
        console.log('heeft dus wel pepperoni EN champignons');
        alert('lekker volle pizza')
    } else {
        console.log('heeft dus geen pepperoni EN/OF champignons EN/OF tomaten EN/OF mozerella');
    } 
};

// met deze functie wordt er elke keer een verschillende naam uit de array gehaald waardoor als je klikt elke keer een ander pizza komt.

function nieuwPizza(){
    var randomNummer = Math.random()*3;
    randomNummer = Math.floor(randomNummer);
    pElement.textContent = pizza[randomNummer];

    if (heeftPepperoni = document.querySelector('#pepperoniTopping:not(.hidden)')) {
        pepperoniTopping.classList.toggle('hidden');
    };
    if (heeftTomaten = document.querySelector('#tomatenTopping:not(.hidden)')) {
        tomatenTopping.classList.toggle('hidden');
    };
    if (heeftMozerella= document.querySelector('#mozerellaTopping:not(.hidden)')) {
        mozerellaTopping.classList.toggle('hidden');
    };
    if (heeftChampignons = document.querySelector('#champignonsTopping:not(.hidden)')) {
        champignonsTopping.classList.toggle('hidden');
    };
};
 

// Ook heb ik toegevoegd dat als je nieuwe bestelling klikt dat alles op de pizza weer togglet naar hidden

// Deze functie wordt aangeroepen door op een button te klikken
buttonElement.addEventListener("click",nieuwPizza);

