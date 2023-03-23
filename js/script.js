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

tomatenKnop.addEventListener('click', function () {
    tomatenTopping.classList.toggle('hidden');
});

mozerellaKnop.addEventListener('click', function () {
    mozerellaTopping.classList.toggle('hidden');
});

champignonsKnop.addEventListener('click', function () {
    champignonsTopping.classList.toggle('hidden');

    heeftChampignons = document.querySelector('#champignonsTopping:not(.hidden)');

    checkAlleIngedienten();
});

pepperoniKnop.addEventListener('click', function () {
    pepperoniTopping.classList.toggle('hidden');

    heeftPepperoni = document.querySelector('#pepperoniTopping:not(.hidden)')

    checkAlleIngedienten()
});

function checkAlleIngedienten() {

    if (heeftPepperoni && heeftChampignons) {
        console.log('heeft dus wel pepperoni EN champignons');
        alert('lekker volle pizza')
    } else {
        console.log('heeft dus geen pepperoni EN/OF champignons');
    }
};

