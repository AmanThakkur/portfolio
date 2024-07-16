document.addEventListener('DOMContentLoaded', () => {

    // Add this new code for header animation
    const header = document.querySelector('header.card');
    const headerBackground = header.querySelector('.header-background');
    const headerContent = header.querySelector('.header-content');

    setTimeout(() => {
        headerBackground.style.transform = 'translateY(0)';
        setTimeout(() => {
            headerContent.style.opacity = '1';
            headerContent.style.transform = 'translateY(0)';
        }, 500);
    }, 300);
    
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                const heading = entry.target.querySelector('h2');
                if (heading) {
                    heading.style.opacity = '1';
                    heading.style.transform = 'translateY(0)';
                }
                
                const listItems = entry.target.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.background').style.transform = `translateY(${scrollPosition * 0.5}px)`;
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
});
