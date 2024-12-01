function checkScreenSize() {
  const footer = document.querySelector('footer');

  if (window.matchMedia("(max-width: 768px)").matches) {
    footer.style.position = 'relative';
  } else {
    footer.style.position = 'fixed';
  }

  document.querySelectorAll('.faq-question').forEach((faq) => {
    faq.addEventListener('click', () => {
      const answer = faq.nextElementSibling;
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });

  const elements = document.querySelectorAll('.faq-answer');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }

}
window.addEventListener('resize', checkScreenSize);
checkScreenSize();


function toggleMenu(){
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('active');
}