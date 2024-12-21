//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

// append, appendChild, prepend, after, before.
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const btnEl = document.querySelector('.amount-btn');
const inputEl = document.querySelector('.amount-input');

const createDivBoxes = amount => {

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('number-container');


    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.classList.add('number');
        div.textContent = randomNumber();
        if (div.textContent % 2 === 0) {
            div.classList.add('even');
        } else {
            div.classList.add('odd');
        }
        mainDiv.appendChild(div);
    }

    btnEl.after(mainDiv);
}

btnEl.addEventListener('click', () => { 
    const mainDiv = document.querySelector('.number-container');

    const amount = inputEl.value;
    if (mainDiv) {
       mainDiv.remove();
    }
    createDivBoxes(amount);
})






