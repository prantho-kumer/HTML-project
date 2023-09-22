const subCloseElement = document.querySelector(".sub-close");
const parentUlElement = subCloseElement.parentElement;

subCloseElement.addEventListener("click", function () {
  parentUlElement.style.display = "none";
});
