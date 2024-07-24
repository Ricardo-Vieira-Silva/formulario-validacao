document.getElementById('btenviar').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Limpa mensagens de erro anteriores
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.innerText = '');
    
    // Remove classes de erro anteriores
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error'));

    // Validação dos campos
    let isValid = true;

    if (document.getElementById('nome').value.trim() === '') {
        document.getElementById('error-nome').innerText = 'Campo obrigatório';
        document.getElementById('nome').classList.add('error');
        isValid = false;
    }

    if (document.getElementById('email').value.trim() === '') {
        document.getElementById('error-email').innerText = 'Campo obrigatório';
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    if (document.getElementById('telefone').value.trim() === '') {
        document.getElementById('error-telefone').innerText = 'Campo obrigatório';
        document.getElementById('telefone').classList.add('error');
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});
