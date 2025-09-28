// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal logic for .hora elements
document.querySelectorAll('.hora').forEach(hora => {
    hora.addEventListener('click', () => {
        const imgSrc = hora.getAttribute('data-img');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    });
});

// Fecha modal ao clicar no X
document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'none';
    modalImg.src = '';
});

// Fecha modal ao clicar fora do conteúdo
document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
        document.getElementById('modal-img').src = '';
    }
});

// Fecha modal com ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'none';
        modalImg.src = '';
    }
});

// Botão para voltar ao topo
document.getElementById('btn-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});