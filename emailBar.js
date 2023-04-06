let userEmail = "";

const userInput = document.querySelector(".email__text")
const button = document.querySelector(".email__buttonArrow");

// Process:
// When user clicks on the email__text, log their input.
// When button is clicked, determine if email is valid.

// Only logs when user is inside the input box.
userInput.addEventListener('keydown', (e) => {
    userEmail += e.key;
});

button.addEventListener('click', () => {
    console.log(userEmail);
})