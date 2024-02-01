let counter = 0;
const counterValue = document.getElementById('counter-Value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');


// Creazione degli elementi HTML
var newDiv = document.createElement('div');
divProgetto.className = 'progetto';


const h1 = document.createElement('h1');
h1.textContent = 'Progetto di JavaScript Basics di Federico Grasso';
divProgetto.appendChild(h1);


const p = document.createElement('p');
p.textContent = 'Per il progetto proposto, ho ideato un semplice counter con funzione di +/- e reset';
divProgetto.appendChild(p);


document.body.appendChild(divProgetto);



//Creazione counter con la manipolazione del DOM

const counterDiv = document.createElement('div');
counterDiv.className = 'counter';
divProgetto.appendChild(counterDiv);


//Valore di incremento
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});
 
//Valore di decremento
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});
 
//Reset per ripartire da zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.textContent = counter;
}

//Creazione elementi del CSS
