const elements = document.querySelectorAll('.faq-answer');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.display = 'none';
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