let form = document.querySelector('#contact');

const fullName = document.getElementById('fullName');
const number = document.getElementById('number');
const email = document.getElementById('email');
const message = document.getElementById('message');

const fullNameError = document.querySelector('#fullName + span.error');
const numberError = document.querySelector('#number + span.error');
const emailError = document.querySelector('#email + span.error');
const messageError = document.querySelector('#message + span.error');

form.addEventListener('submit', function (event) {
  // if the form contains valid data, we let it submit
  let isValid = true;

  if (email.value.trim() === '') {
    emailError.textContent = 'Error: Please enter a valid email.';
    emailError.className = 'error active';

    // If email is invalid showError(email, emailError);
    isValid = false;
  } else if (!email.validity.valid) {
    // If email is not blank but invalid
    showError(email, emailError);
    isValid = false;
  } else {
    // If email is valid, clear any previous error message
    clearError(emailError);
  }

  if (fullName.value.trim() === '') {
    // If fullName field is empty
    fullNameError.textContent = 'Error: Please enter your full name.';
    fullNameError.className = 'error active';
    isValid = false;
  } else {
    // If fullName field is not empty, clear any previous error message
    clearError(fullNameError);
  }

  if (number.value.trim() === '') {
    // If number field is empty
    numberError.textContent = 'Error: Please enter a phone number.';
    numberError.className = 'error active';
    isValid = false;
  } else {
    // If number field is not empty, clear any previous error message
    clearError(numberError);
  }

  if (message.value.trim() === '') {
    // If message field is empty
    messageError.textContent = 'Error: Please enter a message.';
    messageError.className = 'error active';
    isValid = false;
  } else {
    // If message field is not empty, clear any previous error message
    clearError(messageError);
  }

  // Prevent the form from being submitted if any field is invalid
  if (!isValid) {
    event.preventDefault();
  }
});

function clearError(errorElement) {
  errorElement.textContent = ''; // Clear the error message
  errorElement.className = 'error'; // Reset the visual state
}

function showError(inputElement, errorElement) {
  if (inputElement.validity.valueMissing) {
    // If the field is empty
    // Display the following error message.
    errorElement.textContent = `You need to enter a ${inputElement.name}.`;
  } else if (inputElement.validity.typeMismatch) {
    // If the field doesn't contain a valid value
    // Display the following error message.
    errorElement.textContent = `Entered value needs to be a valid ${inputElement.type}.`;
  } else if (inputElement.validity.tooShort) {
    // If the data is too short
    // Display the following error message.
    errorElement.textContent = `Field should be at least ${inputElement.minLength} characters; you entered ${inputElement.value.length}.`;
  }

  // Set the styling appropriately
  errorElement.className = 'error active';
}