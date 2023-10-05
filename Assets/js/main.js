document.addEventListener("DOMContentLoaded", function () {
    const colOne = document.querySelector(".change-one");
    const colTwo = document.querySelector(".change-two");
  
    colOne.addEventListener("mouseenter", function () {
      colOne.classList.remove("change-one");
      colOne.classList.add("swapped-one");
      colTwo.classList.remove("change-two");
      colTwo.classList.add("swapped");
    });
  
    colTwo.addEventListener("mouseenter", function () {
      colOne.classList.remove("swapped-one");
      colOne.classList.add("change-one");
      colTwo.classList.remove("swapped");
      colTwo.classList.add("change-two");
    });
  });
  

  