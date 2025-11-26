  // 回到顶部按钮
        const backToTopButton = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('translate-y-20', 'opacity-0');
                backToTopButton.classList.add('translate-y-0', 'opacity-100');
            } else {
                backToTopButton.classList.add('translate-y-20', 'opacity-0');
                backToTopButton.classList.remove('translate-y-0', 'opacity-100');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
