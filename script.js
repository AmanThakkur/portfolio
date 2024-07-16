document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.card');
    const cards = document.querySelectorAll('.card');
    
    // Header animation
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 300);

    // Scroll animation for cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        if (card !== header) {
            observer.observe(card);
        }
    });

    // Skill tags random movement
    const skillTags = document.querySelectorAll('.skills-list li');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            const randomRotate = Math.random() * 10 - 5;
            tag.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(1.1)`;
        });
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'translate(0, 0) rotate(0) scale(1)';
        });
    });

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.background').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
