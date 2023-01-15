'use strict';
// Selecting all the needed elements
const modal = document.querySelector('.modal'),
	modalText = document.querySelector('.modal p'),
	inputField = document.querySelector('input'),
	warningText = document.querySelector('span'),
	button = document.querySelector('button'),
	overlay = document.querySelector('.overlay'),
	closeModal = document.querySelector('.close__modal');
let filterInput;

button.addEventListener('click', () => {
	// defining the error functionality
	const showError = () => {
		warningText.classList.remove('hidden'); // display the warning text if the field is empty
		inputField.style.border = '1px solid red'; // changing the border color to RED if the field is empty
	};
	// checking if the field is null, undefined or empty
	if (!filterInput) {
		showError();
		return;
	}
	if (inputField.value.length < 3) {
		warningText.innerText = `⊗ Enter a word or numbers with more than 3 characters.`;
		showError();
		return;
	} // checking if the value in the input field is greater than three characters

	modal.classList.toggle('anim');
	overlay.classList.toggle('hidden');
	let reverseInput = filterInput?.split('').reverse().join(''); // reversing the value of the input field, and joining them in a single word
	if (filterInput != reverseInput) {
		// if the input value is not the same with the reverse value
		modalText.innerHTML = `<b>${inputField.value.toUpperCase()}</b> <br> <br> <br> is not a palindrome`;
		return modal.classList.remove('hidden');
	}
	modalText.innerHTML = `<b>${inputField.value.toUpperCase()}</b> <br> <br> <br> is a palindrome`;
	console.log('button');
});

inputField.addEventListener('keyup', ({ key }) => {
	if (key === ' ') return; // using guard clause to exits the code if the SPACE key is pressed
	warningText.classList.add('hidden'); // removing the warning text after a value is inputed in the field
	inputField.style.border = '1px solid gray'; // changing the border color back to DEFAULT styling a value is inputed in the field
	filterInput = inputField.value.toLowerCase().replace(/[^A-Z0-9]/gi, ''); // replacing special characters and spaces
	if (!filterInput) {
		// checking if 'filterInput' is false (no replacement of characters), if it is then the active class is added,
		// if it is not (replacement occured) the code is exited
		return button.classList.add('active');
	}
	button.classList.remove('active'); // removing the 'active' class
});
closeModal.addEventListener('click', () => {
	modal.classList.remove('anim');
	overlay.classList.toggle('hidden');
	inputField.value = ''; // clearing all the characters in the input field
});
