document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões de alternância com a classe "toggle-btn"
  const toggleBtns = document.querySelectorAll(".toggle-btn");

  // Itera sobre cada botão de alternância
  toggleBtns.forEach(function (toggleBtn) {
    // Adiciona um evento de clique a cada botão de alternância
    toggleBtn.addEventListener("click", function () {
      // Alterna a classe "active" no botão clicado
      toggleBtn.classList.toggle("active");

      // Obtém o elemento pai (duvida) mais próximo do botão clicado
      const duvida = toggleBtn.closest(".duvida");

      // Obtém o parágrafo associado à pergunta
      const paragrafo = duvida.querySelector(".paragrafo");

      // Exibe ou oculta o parágrafo com base na classe "active" do botão clicado
      paragrafo.style.display = toggleBtn.classList.contains("active")
        ? "block"
        : "none";
    });
  });
});
