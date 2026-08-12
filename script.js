document.addEventListener('DOMContentLoaded', () => {
  // Alternância de Tema de Contraste / Modo Escuro
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const isDark = currentTheme === 'dark';

      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.setAttribute('aria-pressed', 'false');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Alto Contraste';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.setAttribute('aria-pressed', 'true');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
      }
    });
  }

  // Validação e Feedback do Formulário de Contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso.');
      e.target.reset();
    });
  }
});
