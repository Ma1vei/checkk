document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".form-contact");
  const button = document.querySelector(".contact__form"); // Replace with the correct button selector
  const cross = document.querySelector(".form-contact__cross");

  if (button) {
    button.addEventListener("click", (e) => {
      contactForm.classList.remove("is-not-visible");
    });
  }

  if(cross){
    cross.addEventListener("click", (e)=>{
      contactForm.classList.add("is-not-visible");
    })
  }
});


const burger_opn = document.querySelector('.burg');
const burger_close = document.querySelector('.close');
const burger = document.querySelector('.menu');

burger_opn.addEventListener('click', () => {
  burger.style.display = "block";
  burger_close.style.display = "block";
  burger_opn.style.display = "none";
});

burger_close.addEventListener('click', () => {
  burger.style.display = "none";
  burger_close.style.display = "none";
  burger_opn.style.display = "block";
});