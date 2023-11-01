/*let acceuilIntroduction = document.querySelector('.header .acceuil-introduction');

document.querySelector('#menu-btn').onclick = () =>{
    acceuil-introduction.classlist.add('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    acceuil-introduction.classlist.remove('active')
}*/

// javascript.js

document.addEventListener("DOMContentLoaded", function () {
    // Attachez un gestionnaire d'événements au bouton #menu-btn
    const menuBtn = document.getElementById("menu-btn");
    const acceuilIntroduction = document.querySelector('.acceuil-introduction');
  
    menuBtn.addEventListener("click", function () {
      if (acceuilIntroduction.classList.contains("active")) {
        acceuilIntroduction.classList.remove("active");
      } else {
        acceuilIntroduction.classList.remove("active");
      }
    })
  })
  