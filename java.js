function mostrarConteudo(id) {
    // Obter todos os conteúdos com a classe 'conteudo'
    const conteudos = document.querySelectorAll('.conteudo');

    // Esconder todos os conteúdos (incluindo cards)
    conteudos.forEach(conteudo => {
        conteudo.style.display = 'none'; // Esconde todos os conteúdos
    });

    // Se o botão "Treinos" for clicado
    if (id === 'treinos') {
        document.body.style.backgroundImage = 'none'; // Remove a imagem de fundo
        document.querySelector('.card-container').style.display = 'none'; // Esconde o card
        // Mostrar os botões de treino
        document.getElementById('treinos-buttons').style.display = 'block';
    } else if (id === 'home') {
        document.body.style.backgroundImage = 'url(videos/posando-atletas-segurando-pesos.jpg)'; // Restaura a imagem de fundo
        document.querySelector('.card-container').style.display = 'flex'; // Mostra o card
    } else if (id === 'planos') {
        // Mostrar o conteúdo dos planos
        const conteudoAtivo = document.getElementById('planos');
        if (conteudoAtivo) {
            conteudoAtivo.style.display = 'block'; // Mostra o conteúdo ativo
            document.body.style.overflow = 'auto'; // Permite a rolagem
        }
    } else {
        // Mostrar o conteúdo específico (ex: Biceps, Triceps, etc.)
        const conteudoAtivo = document.getElementById(id);
        if (conteudoAtivo) {
            conteudoAtivo.style.display = 'block'; // Mostra o conteúdo ativo
            document.body.style.overflow = 'auto'; // Permite a rolagem
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('show-alert');

    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Cria o elemento de alerta
        const alertBox = document.createElement('div');
        alertBox.className = 'alert';
        alertBox.innerHTML = `
            <span>54 8136-2312</span>
            <button class="btn-close">&times;</button>
        `;
        
        // Adiciona o alerta ao contêiner
        const alertContainer = document.getElementById('alert-container');
        alertContainer.appendChild(alertBox);
        
        // Mostra o alerta com animação
        setTimeout(() => alertBox.classList.add('show'), 10);

        // Fecha o alerta ao clicar no botão
        alertBox.querySelector('.btn-close').addEventListener('click', function() {
            alertBox.classList.remove('show');
            setTimeout(() => alertContainer.removeChild(alertBox), 500); // Remove o alerta após a animação
        });

        // Remove o alerta automaticamente após 5 segundos
        setTimeout(() => {
            if (alertBox.classList.contains('show')) {
                alertBox.classList.remove('show');
                setTimeout(() => alertContainer.removeChild(alertBox), 500);
            }
        }, 10000);
    });
});

