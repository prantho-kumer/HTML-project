

// const subCloseElements = document.querySelectorAll(".sub-close");

// subCloseElements.forEach((subCloseElement) => {
//   subCloseElement.addEventListener("click", function () {
//     this.parentElement.style.display = "none";
//   });
// });

const menuLists = document.querySelectorAll("#navbarSupportedContent > ul > li > ul > li");
menuLists.forEach((menuList) => {
  menuList.addEventListener("click", function () {
    const getUl = this.querySelector("ul");
    if (getUl.style.display == "none") {
      console.log("hidden");
      getUl.style.display = "block";
    } else {
      console.log("shown");
    getUl.style.display = "none";
    }
    
      
  });
});