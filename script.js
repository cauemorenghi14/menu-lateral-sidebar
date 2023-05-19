let itens = document.querySelectorAll('.nav-item');

itens.forEach((item) => {
    item.addEventListener('click', () => {
        itens.forEach((item) => {
            item.classList.remove('ativa');
        })
        item.classList.add('ativa');
    });
});

// Esse código JS permite que, ao clicar sobre um dos itens do menu lateral, o seu background-color permaneça com a cor desejada, até clicar em outro elemento.