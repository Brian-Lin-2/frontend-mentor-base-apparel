const email = document.querySelector(".email");
const userEmail = document.querySelector(".email__text");
const input = document.querySelector(".email__input");

// Error states.
const errorIcon = document.querySelector(".email__errorIcon");
const errorMessage = document.querySelector(".email__errorMessage");

// Imported regex expression.
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// When button is clicked or enter is pressed, determine if email is valid.
email.addEventListener('submit', (e) => {
    // Determine if email is valid;
    // Use .value() for input elements. Sort of like .textContent().
    if (!validateEmail(userEmail.value)) {
        input.classList.add("email__error");
        errorIcon.classList.remove("hide");
        errorMessage.classList.remove("hide");

        // Stops the page from refreshing.
        e.preventDefault();
    }
});