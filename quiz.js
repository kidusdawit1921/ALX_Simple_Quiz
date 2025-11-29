function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, avoid errors
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
