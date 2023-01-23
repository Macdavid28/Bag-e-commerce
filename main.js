let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
//Remove menu and search icon on scroll

window.onscroll = () => {
    search.classList.remove('active');
    navbar.classList.remove('active');
}
//Header Animation
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
        header.classList.toggle('active',window.scrollY > 0)
})

