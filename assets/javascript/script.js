/* jshint esversion:8 */

// Burger Menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');

});

// Collapsible Buttons
document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('accordion__button--active');
        
    });
});