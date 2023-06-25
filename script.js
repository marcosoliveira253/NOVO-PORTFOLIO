const menuIcon = document.querySelector('.menu-icon');
var menu = document.querySelector('.ul');

menuIcon.addEventListener('click', ()=>{
    
    if (menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = './img/menu.png';
    } else {
        menu.classList.add('ativo');
        document.querySelector('.menu-icon img').src = './img/close.png';
    }
});

/* Evento de click para cada link do menu para remover a classe active do menu ao clicar em um link. */

const menuLinks = document.querySelectorAll('.ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = './img/menu.png';
    });
});
