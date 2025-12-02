document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const repass = document.getElementById('repassword').value;
    const avatar = document.querySelector('input[name="avatar"]:checked')?.value;
    
    const messageDiv = document.getElementById('message');
    
    // Validações básicas
    if (!fullName || !matricula || !email || !username || !password || !avatar) {
        messageDiv.textContent = 'Por favor, preencha todos os campos! 😅';
        messageDiv.className = 'error';
        return;
    }
    
    if (password.length < 6) {
        messageDiv.textContent = 'A senha deve ter pelo menos 6 caracteres! 🔒';
        messageDiv.className = 'error';
        return;
    }

    if (password != repass ){
        messageDiv.textContent = 'A senhas não estão iguais! ‼️';
        messageDiv.className = 'error';
        return;
    }
    
    // Verificar se username já existe (simulado com localStorage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
        messageDiv.textContent = 'Username já existe! Escolha outro. 🤔';
        messageDiv.className = 'error';
        return;
    }
    
    // Salvar dados
    const newUser = { fullName, matricula, email, username, password, avatar };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Sucesso
    messageDiv.textContent = 'Registro realizado com sucesso! Redirecionando... 🎉';
    messageDiv.className = 'success';
    
    // Redirecionar para perfil (simulado)
    setTimeout(() => {
        window.location.href = 'profile.html'; // Você pode criar uma página profile.html
    }, 2000);
});