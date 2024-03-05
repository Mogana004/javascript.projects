```html
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>

<body>
    <div id="speedTypingTest">
        <p id="timer">0 seconds</p>
        <p id="quoteDisplay"></p>
        <p id="result"></p>
        <img src="https://assets.ccbp.in/frontend/dynamic-webapps/clock-img.png">
        <textarea id="quoteInput" placeholder="Type the quote here"></textarea>
        <button id="submitBtn" class="btn btn-primary">Submit</button>
        <button id="resetBtn" class="btn btn-secondary">Reset</button>
        <div class="spinner-border text-primary" id="loadingSpinner" role="status" style="display: none;">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</body>

</html>

```
