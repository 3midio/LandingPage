// Scroll suave para as seções
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ele seleciona os elementos do ícone e do menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Adiciona um evento de clique para abrir/fechar o menu, fazendo a animação do ícone de hambúrguer, e exibe ou oculta o menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('open');
});

// Validação do formulário e exibição de mensagem de sucesso ou erro
document.getElementById('inscricaoForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    const mensagemErro = document.getElementById('mensagem-erro');

    // Limpa as mensagens anteriores
    mensagemSucesso.style.display = 'none';
    mensagemErro && mensagemErro.remove();

    // Validação básica: nome só deve conter letras, email deve ser válido, telefone deve ser numérico
    if (!validateNome(nome) || !validateEmail(email) || !validateTelefone(telefone)) {
        const erroMsg = document.createElement('p');
        erroMsg.id = 'mensagem-erro';
        erroMsg.style.color = 'red';
        erroMsg.innerText = 'Informações inconsistentes';
        document.querySelector('.formulario-inscricao').appendChild(erroMsg);
    } else {
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.innerText = 'Informações enviadas com sucesso!';
    }
});

// Ele verifica se possui apenas letras, espaços e acentuação
function validateNome(nome) {
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
    return nomeRegex.test(nome);
}

// Verifica se o email está certo
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Verifica se o a campo está com números
function validateTelefone(telefone) {
    return telefone.length >= 10 && telefone.length <= 11; 
}
