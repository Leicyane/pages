document.getElementById('cta-btn').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    if (aboutSection.classList.contains('hidden')) {
      aboutSection.classList.remove('hidden');
      this.textContent = 'Fechar';
    } else {
      aboutSection.classList.add('hidden');
      this.textContent = 'Saiba Mais';
    }
  });
  