let menubutton = document.getElementById("menu-button");
let menudiv = document.getElementById("menu-open");

menubutton.addEventListener("click", function() {
// console.log(menudiv)
    menubutton.toggleAttribute("aria-expanded")
    menudiv.classList.toggle('active')
});