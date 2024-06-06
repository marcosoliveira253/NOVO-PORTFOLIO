const menuIcon = document.querySelector('.menu-icon');
var menu = document.querySelector('.ul');
const backToTopButton = document.querySelector('.back-to-top');


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block'; // Mostra o ícone após rolar 200 pixels
    } else {
      backToTopButton.style.display = 'none'; // Oculta o ícone se não estiver rolando
    }
});

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
        
        const targetElement = document.querySelector(event.target.hash);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
