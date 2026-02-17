export default function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const windowHalf = window.innerHeight * 0.7;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHalf) < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else if (section.classList.contains('ativo')) {
                    // Optional: remove class to re-animate when scrolling up
                    // section.classList.remove('ativo');
                }
            });
        }

        // Trigger once on load
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
