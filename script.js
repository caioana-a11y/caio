// Espera o DOM carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. LÓGICA DA BARRA DE PESQUISA ---
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');
  const noResults = document.getElementById('noResults');

  if (searchInput) {
    searchInput.addEventListener('keyup', () => {
      const query = searchInput.value.toLowerCase().trim();
      let visibleCount = 0;

      cards.forEach(card => {
        const keywords = card.getAttribute('data-keywords').toLowerCase();
        const text = card.innerText.toLowerCase();

        if (keywords.includes(query) || text.includes(query)) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    });
  }

  // --- 2. LÓGICA DO MINIJOGO (QUIZ) ---
  const questions = [
    {
      question: "Qual seleção venceu a Copa do Mundo de 2002?",
      options: ["Alemanha", "Brasil", "Argentina", "França"],
      answer: 1
    },
    {
      question: "Em qual país foi realizada a Copa do Mundo de 2022?",
      options: ["Rússia", "Catar", "Brasil", "África do Sul"],
      answer: 1
    },
    {
      question: "Quem é o maior vencedor da história das Copas?",
      options: ["Itália", "Alemanha", "Brasil", "Argentina"],
      answer: 2
    }
  ];

  let currentQuestionIndex = 0;

  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizFeedback = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('nextBtn');

  function loadQuiz() {
    const currentQ = questions[currentQuestionIndex];
    quizQuestion.innerText = currentQ.question;
    quizOptions.innerHTML = '';
    quizFeedback.classList.add('hidden');
    nextBtn.classList.add('hidden');

    currentQ.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.innerText = opt;
      btn.className = "bg-slate-700 hover:bg-slate-600 text-left p-3 rounded-lg transition border border-slate-600 text-sm font-medium";
      btn.addEventListener('click', () => checkAnswer(index));
      quizOptions.appendChild(btn);
    });
  }

  function checkAnswer(selectedIndex) {
    const currentQ = questions[currentQuestionIndex];
    const options = quizOptions.children;

    for (let btn of options) {
      btn.disabled = true;
    }

    if (selectedIndex === currentQ.answer) {
      quizFeedback.innerText = "✨ Correto! Parabéns!";
      quizFeedback.className = "mt-4 font-bold text-sm text-green-400";
    } else {
      quizFeedback.innerText = `❌ Incorreto. A resposta certa era: ${currentQ.options[currentQ.answer]}`;
      quizFeedback.className = "mt-4 font-bold text-sm text-red-400";
    }

    quizFeedback.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      loadQuiz();
    });
  }

  // Inicializa o Quiz na primeira carga da página
  loadQuiz();
});
