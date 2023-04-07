const email = document.getElementById('email');
const userEmail = document.getElementById('email__text');

// When form is clicked, determine if email is valid.
email.addEventListener('submit', (e) => {
    // Stops the page from refreshing.
    e.preventDefault();

    // Use .value() for input elements. Sort of like .textContent().
    console.log(userEmail.value);
});