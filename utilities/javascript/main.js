let counter = 0;

// Creazione del div del counter
const counterDiv = document.createElement("div");
counterDiv.classList.add("counter");
document.body.appendChild(counterDiv);


const counterValue = document.createElement('p');
counterValue.id = 'counter-Value';
counterDiv.appendChild(counterValue);


// Creazione del div per i bottoni
const divButtons = document.createElement("div");
divButtons.classList.add("buttons");
counterDiv.appendChild(divButtons);


// Bottone incremento (+)
const incrementBtn = document.createElement('button');
incrementBtn.id = 'increment-btn';
incrementBtn.textContent = '+';
divButtons.appendChild(incrementBtn);


// Bottone reset
const resetBtn = document.createElement('button');
resetBtn.id = 'reset';
resetBtn.textContent = 'Reset';
divButtons.appendChild(resetBtn);


// Bottone decremento (-)
const decrementBtn = document.createElement('button');
decrementBtn.id = 'decrement-btn';
decrementBtn.textContent = '-';
divButtons.appendChild(decrementBtn);



// Eventi di incremento, decremento e reset
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});

resetBtn.addEventListener('click', reset);

function reset() {
    counter = 0;
    counterValue.textContent = counter;
}
reset ();
