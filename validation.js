function checkValidation() {
  let input = document.getElementsByClassName("description__input")[0];
  input.style.border = "none";
  input.classList.add("description__validation");
  if ([...input.classList].includes("description__validation")) {
    input.style.border = "2px solid red";
  }
  console.log(input.classList);
}
