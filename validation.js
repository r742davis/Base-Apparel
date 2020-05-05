document.getElementById("input").addEventListener("valid", () => {
  console.log("valid!!!")
})


function checkValidation(event) {
  event.preventDefault();
  let input = document.getElementById("input");
  let errorArrow = document.getElementById("error");
  let errorMessage = document.getElementById("error-message");

  console.log(input.checkValidity())
  if (!input.checkValidity()) {
    input.style.border = "none";
    input.style.border = "2px solid red";
    input.setCustomValidity("HELLO");
    console.log(errorArrow);
    errorArrow.classList.remove("description__error");
    errorArrow.classList.add("description__error--active");
    errorMessage.classList.remove("description__error-message");
    errorMessage.classList.add("description__error-message--active");
  } else {
    input.style.border = "2px solid turquoise";
    console.log("valid")
  }

  // if (input.checkValidity()) {
  //   input.style.border = "2px solid turquoise";
  // }
}
