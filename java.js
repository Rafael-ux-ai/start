function mostrarConteudo(id) {
    // Obter todos os conteúdos com a classe 'conteudo'
    const conteudos = document.querySelectorAll('.conteudo');

    // Esconder todos os conteúdos
    conteudos.forEach(conteudo => {
        conteudo.style.display = 'none'; // Esconde todos os conteúdos
    });

    // Se o botão "Treinos" for clicado
    if (id === 'treinos') {
        document.body.style.backgroundImage = 'none'; // Remove a imagem de fundo
        document.getElementById('treinos-buttons').style.display = 'block'; // Mostrar os botões de treino
    } else if (id === 'home') {
        document.body.style.backgroundImage = 'url(videos/posando-atletas-segurando-pesos.jpg)'; // Restaura a imagem de fundo
        document.querySelector('.card-container').style.display = 'flex'; // Mostra o card
    } else {
        // Mostrar o conteúdo específico (ex: Biceps, Triceps, etc.)
        const conteudoAtivo = document.getElementById(id);
        if (conteudoAtivo) {
            conteudoAtivo.style.display = 'block'; // Mostra o conteúdo ativo
            document.body.style.overflow = 'auto'; // Permite a rolagem
        }
    }
}
