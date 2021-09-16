console.log("script topnav.js is running...");

const actionButton = document.querySelector('.main-header__button');
const menu = document.querySelector('.menu');

console.log("Contenu de la variable actionButton : " , actionButton );
console.log("Contenu de la variable menu : " , menu );

actionButton.addEventListener("click", function(event){
    console.log(event);

    menu.classList.toggle("open");

    
})