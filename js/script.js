//costanti
const costXKm = 0.21;
const under18 = 0.8;
const over65 = 0.6;

//dati calcolo biglietto
let age;
let userKm;
let normalPrice;
let discountPrice;


const btnInput = document.getElementById('btn-input');


//Funzione per calcolo biglietto
btnInput.addEventListener('click', function() {
    
    const name = document.querySelector('.name').value;
    document.getElementById('output-name').innerHTML = name;
    document.querySelector('.name').value = '';

    userKm = document.querySelector('.km').value;
    document.getElementById('output-km').innerHTML = userKm;
    document.querySelector('.km').value = '';

    age = document.querySelector('.age').value;
    document.getElementById('output-age').innerHTML = age;
    document.querySelector('.age').value = '';


    price = userKm * costXKm;


    if (age <= 18)
    {
        price = price * under18;
    }
    else if (age >= 65)
    {
        price = price * over65;
    }
    else 
    {
        price = price;
    }


    document.getElementById('output').innerHTML = `€ ${price.toFixed(2)}`;


});


//Funzione reset impostazioni
function refreshPage(){
    window.location.reload();
} 