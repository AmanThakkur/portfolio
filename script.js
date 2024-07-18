document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.card');
    const cards = document.querySelectorAll('.card');
    const headerContent = header.querySelector('.header-content');
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        headerContent.style.opacity = '1';
        headerContent.style.transform = 'translateY(0)';
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

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.card');
    const revealHandler = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.75) {
                element.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', revealHandler);
    revealHandler();

    // File upload functionality
    const fileInputs = document.querySelectorAll('.file-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileList = this.closest('.file-upload').querySelector('.file-list');
            fileList.innerHTML = '';
            for (let i = 0; i < this.files.length; i++) {
                const file = this.files[i];
                const fileItem = document.createElement('div');
                fileItem.textContent = file.name;
                fileList.appendChild(fileItem);
            }
        });
    });
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
