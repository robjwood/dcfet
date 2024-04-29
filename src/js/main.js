// Change data-js-enabled to true if user has JS enabled.
document.body.dataset.jsEnabled = 'true';

// Get the form element by its ID.
const formEl = document.querySelector('#contact-form');

// Turn off built-in form submit validation. 
formEl.setAttribute('novalidate', '');

// Set up `blur` and `input` validation for the inputs that can be 
// validated with the Constraint Validation API.
document.querySelectorAll('.js-validate').forEach((inputEl) => {
  inputEl.addEventListener('input', (event) => 
    console.log(event.target.validity
  ));
  inputEl.addEventListener('blur', (event) =>
    console.log(event.target.validity
  ));
});

const updateValidationStateForInput = (inputEl) => {
  // Check if the input is valid using the Constraint Validation API.
  // Yes, one line of code handles validation. 
  // The Constraint Validation API is cool!
  const isInputValid = inputEl.checkValidity();
  // Toggle valid/invalid state class hooks.
  inputEl.classList.toggle('is-valid', isInputValid);
  inputEl.classList.toggle('is-invalid', !isInputValid);
  // Update the `aria-invalid` state based on the input's validity.
  // Converts the boolean to a string.
  inputEl.setAttribute('aria-invalid', (!isInputValid).toString());
};

// Handle form submit validation via JS instead.
formEl.addEventListener('submit', onSubmit);


