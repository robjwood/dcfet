let bookForm = document.querySelector('#book');

const code = document.getElementById('code');
const codeError = document.querySelector('#code + span.error');

bookForm.addEventListener('submit', function (event) {
  let isValid = true;

  if (code.value.trim() === '') {
    codeError.textContent = 'Error: Please enter a secret code.';
    codeError.className = 'error active';
    isValid = false;
  } else {
    clearError(codeError);
  }

  if (!isValid) {
    event.preventDefault();
  }
  if (isValid) {
    // If the form is valid, display the confirmation message and hide the form
    document.getElementById('bookConfirmation').style.display = 'block';
    // Hide the form by setting the display property to none
    bookForm.style.display = 'none';
    // Prepare the form data
    const formData = new FormData(form);

    // Send the form data asynchronously
    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Optionally, you can handle response data here
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Optionally, you can display an error message to the user
    });
  }

});

function clearError(errorElement) {
  errorElement.textContent = '';
  errorElement.className = 'error';
}


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