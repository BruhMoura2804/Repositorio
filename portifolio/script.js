document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    // Função para animação nas seções ao rolar a página
    const animatedSections = document.querySelectorAll('.animated-section');

    function animateOnScroll() {
        const scrollPosition = window.innerHeight + window.scrollY;

        animatedSections.forEach(section => {
            if (scrollPosition > section.offsetTop + 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Evento de rolar a página
    window.addEventListener('scroll', animateOnScroll);
});