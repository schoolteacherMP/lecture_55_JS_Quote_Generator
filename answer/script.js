// Массив цитат
const quotes = [
  {
    text: "Жизнь прекрасна, если есть, что ее прекрасным сделать.",
    author: "Робин Уильямс"
  },
  {
    text: "Успех - это не конечная точка, успех - это путь.",
    author: "Уилл Смит"
  },
  {
    text: "Ты можешь стать героем своей истории.",
    author: "Конор МакГрегор"
  }
];

// Функция для выбора случайной цитаты из массива
function getRandomQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
}

// Функция для отображения цитаты на странице
function displayQuote() {
  const quote = getRandomQuote();
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `<p>"${quote.text}"</p><p>- ${quote.author}</p>`;
}

// Обработчик клика по кнопке "Следующая цитата"
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", displayQuote);

// Функция для добавления новой цитаты в массив и обновления списка на странице
function addNewQuote(event) {
  event.preventDefault();
  const textInput = document.getElementById("text-input");
  const authorInput = document.getElementById("author-input");
  const newQuote = {
    text: textInput.value,
    author: authorInput.value
  };
  quotes.push(newQuote);
  textInput.value = "";
  authorInput.value = "";
  displayQuote();
}

// Обработчик отправки формы для добавления новой цитаты
const newQuoteForm = document.getElementById("new-quote-form");
newQuoteForm.addEventListener("submit", addNewQuote);

// Инициализация генератора случайных цитат
displayQuote();