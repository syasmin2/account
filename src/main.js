function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector(".form__message");

	messageElement.textContent = message;
	messageElement.classlist.remove("form__message--success", "form__message--error");
	messageElement.classlist.add('form__message--${type}');
}

function setInputError(inputElement, message){
	inputElement.classlist.add("form__input--error");
	inputElement.parentElement.querySelector(".form__input--error-message").textContent = message;
}

function clearInputError(inputElement){
	inputElement.classlist.remove("form__input--error");
	inputElement.parentElement.querySelector(".form__input--error-message").textContent = "";
}
document.addEventListener("documentLoaded", () => {
	const loginForm = document.querySelector("#login");
	const createAccountform = document.querySelector("#createAccount");

	document.querySelector("linkCreateAccount").addEventListener("click",e => {
		e.preventDefault();
		loginForm.classlist.add("form--hidden");
		createAccountform.classlist.remove("form--hidden");
	});
	document.querySelector("linklogin").addEventListener("click",e => {
		e.preventDefault();
		loginForm.classlist.remove("form--hidden");
		createAccountform.classlist.add("form--hidden");
	});
loginForm.addEventListener("submit", e => {
 	e.preventDefault();

 	// perform your AJAX/Fetch login

 	setFormMessage(loginForm, "error", "Invalid username/password combination");
});


document.querySelectorAll(".form__input").forEach(inputElement => {
	inputElement.addEventListener("blur", e => {
		if (e.target.id === "signupUsername && e.taget.value.length > 0 && e.taget.value < 10") {
			setInputError(inputElement, "Username must be at least 10 character in length");
		}
	});

	inputElement.addEventListener("input", e => {
		clearInputError(inputElement);
    }); 

    
	});

});