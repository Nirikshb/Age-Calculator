// Get the form element, birthdate input field, error message and result display element
const form = document.querySelector('form');
const birthdateInput = document.querySelector('#birthdate');
const errorMessage = document.querySelector('#error-message');
const result = document.querySelector('#result');

// Add an event listener to the form when it is submitted
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default behavior of the form submission

  // Get the birthdate and today's date, and calculate the difference in milliseconds
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  const diffInMilliseconds = today.getTime() - birthdate.getTime();

  // Check if the birthdate input is valid and handle errors if not
  if (!birthdateInput.checkValidity()) {
    errorMessage.textContent = 'Please enter a valid birthdate';
    result.textContent = '';
  } else if (birthdate > today) {
    errorMessage.textContent = 'Birthdate cannot be in the future';
    result.textContent = '';
  } else {
    // If birthdate is valid, calculate the age and display the result
    errorMessage.textContent = '';
    const age = calculateAge(diffInMilliseconds);
    result.textContent = `You're ${age.years} years, ${age.months} months, and ${age.days} days old.`; // Use backticks for string interpolation
  }
});

// Calculate age based on difference in milliseconds between birthdate and today's date
function calculateAge(diffInMilliseconds) {
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const years = Math.floor(diffInDays / 365);
  const months = Math.floor((diffInDays % 365) / 30);
  const days = Math.floor((diffInDays % 365) % 30);
  return { years, months, days };
}
