let counter = 0;
const counterValue = document.createElement('p');
counterValue.id = 'counter-Value';

const incrementBtn = document.createElement('button');
incrementBtn.id = 'increment-btn';
incrementBtn.textContent = '+';

const decrementBtn = document.createElement('button');
decrementBtn.id = 'decrement-btn';
decrementBtn.textContent = '-';

const resetBtn = document.createElement('button');
resetBtn.id = 'reset';
resetBtn.textContent = 'Reset';



// Creazione di un unico div con la classe "counter"
const counterDiv = document.createElement("div");
counterDiv.classList.add("counter");
document.body.appendChild(counterDiv);

// Aggiunta degli elementi al div "counter"
counterDiv.appendChild(counterValue);
counterDiv.appendChild(incrementBtn);
counterDiv.appendChild(decrementBtn);
counterDiv.appendChild(resetBtn);

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




