/* Customizações adicionais para complementar o Tailwind CSS */

/* Suavização de rolagem da página */
html {
  scroll-behavior: smooth;
}

/* Efeito de transição suave nas imagens das cards */
.card img {
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.05);
}

/* Personalização da barra de rolagem */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #fbbf24;
}
