document.getElementById("startBtn").addEventListener("click", function () {
            let fromUserInput = parseInt(document.getElementById("fromUserInput").value);
            let toUserInput = parseInt(document.getElementById("toUserInput").value);
            let counterText = document.getElementById("counterText");

            if (isNaN(fromUserInput) || isNaN(toUserInput) || fromUserInput > toUserInput) {
                alert("Please enter valid numbers for 'From' and 'To' inputs.");
            } else {
                counterText.textContent = fromUserInput;

                let counterInterval = setInterval(function () {
                    if (fromUserInput === toUserInput) {
                        clearInterval(counterInterval);
                    } else {
                        fromUserInput++;
                        counterText.textContent = fromUserInput;
                    }
                }, 1000);
            }
        });
