export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    if(section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  if(internalLinks.length) {
    internalLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
