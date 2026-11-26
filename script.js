const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    primaryNav.classList.remove("is-open");
  }
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = [
    `Olá! Meu nome é ${formData.get("name")}.`,
    `Assunto: ${formData.get("subject")}.`,
    String(formData.get("message"))
  ].join("\n");
  window.open(`https://wa.me/5511981103569?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.querySelector(".copy-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const status = document.querySelector(".copy-status");
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    status.textContent = "Chave PIX copiada.";
  } catch (error) {
    status.textContent = "Não foi possível copiar. Selecione a chave PIX acima.";
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
