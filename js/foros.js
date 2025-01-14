document.addEventListener('DOMContentLoaded', function() {
    const newTopicBtn = document.querySelector('.new-topic-btn');
    newTopicBtn.addEventListener('click', function() {
        alert('Próximamente disponible');
    });

    const topics = document.querySelectorAll('.los-temas');
    topics.forEach(topic => {
        topic.addEventListener('click', function() {
            const topicTitle = this.querySelector('h3').textContent;
            alert(`Abriendo tema: ${topicTitle}`);
        });
    });

    topics.forEach(topic => {
        topic.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        topic.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

