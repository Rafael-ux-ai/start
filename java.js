function mostrarConteudo(id) {
    // Obter todos os conteúdos com a classe 'conteudo'
    const conteudos = document.querySelectorAll('.conteudo');

    // Esconder todos os conteúdos (incluindo cards)
    conteudos.forEach(conteudo => {
        conteudo.style.display = 'none'; // Esconde todos os conteúdos
    });

    // Se o botão "Treinos" for clicado
    if (id === 'treinos') {
        // Esconder o fundo e o card
        document.body.style.backgroundImage = 'none'; // Remove a imagem de fundo
        document.querySelector('.card-container').style.display = 'none'; // Esconde o card
        // Mostrar os botões de treino
        document.getElementById('treinos-buttons').style.display = 'block';
    } else if (id === 'home') {
        // Mostrar o fundo e o card
        document.body.style.backgroundImage = 'url(videos/posando-atletas-segurando-pesos.jpg)'; // Restaura a imagem de fundo
        document.querySelector('.card-container').style.display = 'flex'; // Mostra o card
    } else {
        // Mostrar o conteúdo específico (ex: Biceps, Triceps, etc.)
        const conteudoAtivo = document.getElementById(id);
        if (conteudoAtivo) {
            conteudoAtivo.style.display = 'block'; // Mostra o conteúdo ativo
            // Restaura a rolagem do body
            document.body.style.overflow = 'auto'; // Permite a rolagem
        }
    }
}
