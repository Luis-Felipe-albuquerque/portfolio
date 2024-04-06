// Trilho darkmode
let input = document.querySelector('.input');
let body = document.querySelector('body');

input.addEventListener('click', () => {
    body.classList.toggle('dark', input.checked);
});


// Seleciona o elemento do menu
let menu = document.querySelector('.menu');

// Adiciona um evento de scroll na janela
window.addEventListener('scroll', () => {
    // Verifica se a posição de rolagem da página é maior que 0
    if (window.scrollY > 0) {
        // Se sim, adiciona a classe "scrolled" ao menu
        menu.classList.add('scrolled');
    } else {
        // Caso contrário, remove a classe "scrolled"
        menu.classList.remove('scrolled');
    }
});

// Adiciona um evento de mouseover no menu para remover a classe "scrolled"
menu.addEventListener('mouseover', () => {
    menu.classList.remove('scrolled');
});