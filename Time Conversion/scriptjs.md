
```js
document.addEventListener('DOMContentLoaded', function () {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const convertBtn = document.getElementById('convertBtn');
    const timeInSecondsElement = document.getElementById('timeInSeconds');
    const errorMsgElement = document.getElementById('errorMsg');

    convertBtn.addEventListener('click', function () {
      const hours = parseInt(hoursInput.value, 10) || 0;
      const minutes = parseInt(minutesInput.value, 10) || 0;

      if (hours === 0 && minutes === 0) {
        errorMsgElement.textContent = 'Please enter hours or minutes';
        timeInSecondsElement.textContent = '';
      } else if (hours > 0 && minutes > 0) {
        // Both hours and minutes provided
        const timeInSeconds = (hours * 60 * 60) + (minutes * 60);
        timeInSecondsElement.textContent = `Converted Time in Seconds: ${timeInSeconds}`;
        errorMsgElement.textContent = '';
      } else {
        // Display an error message for other scenarios
        errorMsgElement.textContent = 'Please provide both hours and minutes';
        timeInSecondsElement.textContent = '';
      }
    });
  });

```
