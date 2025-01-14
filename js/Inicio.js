document.addEventListener('DOMContentLoaded', function() {
    const highlightButton = document.getElementById('highlightButton');
    const estilos = document.querySelectorAll('.estilo h3');
    let highlighted = false;

    highlightButton.addEventListener('click', function() {
        estilos.forEach(estilo => {
            estilo.classList.toggle('highlight');
        });

        highlighted = !highlighted;
        highlightButton.textContent = highlighted ? 'Quitar Resaltado' : 'Resaltar Estilos';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const images = document.querySelectorAll('.estilo-img');
    const imageOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px 200px 0px"
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; 
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

