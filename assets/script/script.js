// Animasi Text Writting
var type = new Typed(".textline", {
  strings: ["Front-End Development", "System Administrator", "Writer"],
  typeSpeed: 30,
  backSpeed: 50,
  loop: true,
});

// Membersihkan Form Contact ketika Unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const navSlide = () => {
  const burger = document.querySelector("#hamburger-menu");
  const navLists = document.querySelector("nav .links");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();
