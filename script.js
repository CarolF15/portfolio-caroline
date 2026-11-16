
// ========================================
// 1. ANIMAÇÕES DE ENTRADA
// ========================================

// Seleciona os elementos que receberão animação
const elementosAnimados = document.querySelectorAll(
    ".section-heading, .section-text, .about-highlight, " +
    ".skill-card, .project-card, .timeline-card, .contact-box"
);

// Adiciona a classe responsável pela animação
elementosAnimados.forEach((elemento) => {
    elemento.classList.add("reveal");
});

// Observa quando os elementos aparecem na tela
const observador = new IntersectionObserver((entradas, observer) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("active");

            // Para de observar após a animação
            observer.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.15
});

// Inicia a observação dos elementos
elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});


// ========================================
// 2. FECHAR MENU MOBILE AO CLICAR
// ========================================

const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");
const menu = document.querySelector("#menu");

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menu);

            menuBootstrap.hide();
        }

    });

});
