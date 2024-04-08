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

///////////////////////////////////  TESTE  /////////////////////////////////////////////////////
// Seleciona o botão "Ver mais" e as imagens adicionais
let seeMoreButton = document.getElementById('see_more');
let additionalImages = document.querySelectorAll('.skills_images img:not(:nth-child(-n+4))');

// Adiciona um evento de clique ao botão "Ver mais"
seeMoreButton.addEventListener('click', () => {
  // Alterna a visibilidade das imagens adicionais
  additionalImages.forEach(image => {
    image.style.display = (image.style.display === 'none') ? 'inline-block' : 'none';
  });

  // Altera o texto do botão conforme o estado
  seeMoreButton.textContent = (seeMoreButton.textContent === 'Ver mais') ? 'Ver menos' : 'Ver mais';
});