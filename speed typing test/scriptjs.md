
```js
document.addEventListener('DOMContentLoaded', function () {
  const timerElement = document.getElementById('timer');
  const quoteDisplayElement = document.getElementById('quoteDisplay');
  const resultElement = document.getElementById('result');
  const quoteInputElement = document.getElementById('quoteInput');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const loadingSpinner = document.getElementById('loadingSpinner');

  function showSpinner() {
    loadingSpinner.classList.add('d-block');
  }

  function hideSpinner() {
    loadingSpinner.classList.remove('d-block');
  }

  function getRandomQuote() {
    showSpinner();
    fetch('https://apis.ccbp.in/random-quote')
      .then(response => response.json())
      .then(data => {
        quoteDisplayElement.textContent = data.content;
        hideSpinner();
        startTimer();
      })
      .catch(error => {
        console.error('Error fetching random quote:', error);
        hideSpinner();
      });
  }

  function startTimer() {
    let seconds = 0;
    const timerInterval = setInterval(() => {
      seconds++;
      timerElement.textContent = `${seconds} seconds`;
    }, 1000);

    submitBtn.addEventListener('click', function () {
      clearInterval(timerInterval);
      checkInput();
    });

    resetBtn.addEventListener('click', function () {
      clearInterval(timerInterval);
      reset();
    });
  }

  function checkInput() {
    const userTypedValue = quoteInputElement.value.trim();
    const actualQuote = quoteDisplayElement.textContent.trim();

    if (userTypedValue === actualQuote) {
      resultElement.textContent = 'Success! You typed the quote correctly.';
    } else {
      resultElement.textContent = 'Error! Keep trying.';
      startTimer();
    }
  }

  function reset() {
    quoteInputElement.value = '';
    resultElement.textContent = '';
    getRandomQuote();
  }

  // Initial setup
  getRandomQuote();
});

```
