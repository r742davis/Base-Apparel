function checkValidation(event) {
  event.preventDefault();
  let input = document.getElementsByClassName("description__input")[0];
  let errorArrow = document.querySelector(".description__error");
  let errorMessage = document.querySelector(".description__error-message");

  if (!input.checkValidity()) {
    input.style.border = "none";
    input.style.border = "2px solid red";
    input.setCustomValidity("HELLO");
    console.log(errorArrow);
    errorArrow.classList.remove("description__error");
    errorArrow.classList.add("description__error--active");
    errorMessage.classList.remove("description__error-message");
    errorMessage.classList.add("description__error-message--active");
  }

  if (input.checkValidity()) {
    input.style.border = "2px solid turquoise";
  }
}
