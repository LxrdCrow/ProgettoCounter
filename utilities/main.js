let = 0;
const counterValue = ;
const incrementBtn = ;
const decrementBtn = ;
const resetBtn = ;


// Creazione degli elementi HTML
const divProgetto = document.createElement('div');
divProgetto.className = 'progetto';


const h1 = document.createElement('h1');
h1.textContent = 'Progetto di JavaScript Basics di Federico Grasso';
divProgetto.appendChild(h1);


const p = document.createElement('p');
p.textContent = 'Per il progetto proposto, ho ideato un semplice counter con funzione di +/- e reset';
divProgetto.appendChild(p);


document.body.appendChild(divProgetto);



//Creazione counter con la manipolazione del DOM//

const counterDiv = document.createElement('div');
counterDiv.className = 'counter';
divProgetto.appendChild(counterDiv);



