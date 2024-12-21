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
};

btnEl.addEventListener('click', () => {
  const mainDiv = document.querySelector('.number-container');

  const amount = inputEl.value;
  if (mainDiv) {
    mainDiv.remove();
  }
  createDivBoxes(amount);
});

//TODO:=========task-02=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.
const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

const watchedFilms = ['film_2', 'film_4', 'film_5'];

const filmsList = document.querySelector('.films-list');

const createMarkup = arr =>
  arr
    .map(
      film =>
        `<li class='films-item' id='${film.id}'><img src="${film.imgUrl}" alt="${film.title}" width="300" height="300"></li>`
    )
    .join('');

filmsList.innerHTML = createMarkup(films);

watchedFilms.forEach(id => {
  const filmEl = filmsList.querySelector(`#${id}`);

  if (filmEl) {
    filmEl.style.opacity = 0.5;
  }
});

// filmsList.insertAdjacentHTML('afterend', createMarkup(films));

//TODO:=========task-03=================
//? 

const instance = basicLightbox.create(`
  <div class="modal">
      <img src="https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg" alt="film_4">
      <p>
          Your first lightbox with just a few lines of code.
          Yes, it's really that simple.
      </p>
  </div>
`)

// instance.show()

const modalBtn = document.querySelector('.modal-begin');
modalBtn.addEventListener('click', event => {
  instance.show();
})