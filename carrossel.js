"use strict";

(function () {
    const carrossel = document.querySelector(".carrossel");

    if (!carrossel) {
        return;
    }

    const slides = Array.from(
        carrossel.querySelectorAll(".slide")
    );

    const indicadores = Array.from(
        carrossel.querySelectorAll(
            ".carrossel-indicadores button"
        )
    );

    const anterior = carrossel.querySelector(".anterior");
    const proximo = carrossel.querySelector(".proximo");

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (
        slides.length === 0 ||
        !anterior ||
        !proximo ||
        indicadores.length !== slides.length
    ) {
        return;
    }

    let atual = 0;
    let intervalo = null;

    function mostrarSlide(indice) {
        atual = (indice + slides.length) % slides.length;

        slides.forEach(function (slide, i) {
            slide.classList.toggle("ativo", i === atual);

            slide.setAttribute(
                "aria-hidden",
                String(i !== atual)
            );
        });

        indicadores.forEach(function (botao, i) {
            if (i === atual) {
                botao.setAttribute("aria-current", "true");
            } else {
                botao.removeAttribute("aria-current");
            }
        });
    }

    function pararRotacao() {
        if (intervalo !== null) {
            window.clearInterval(intervalo);
            intervalo = null;
        }
    }

    function iniciarRotacao() {
        pararRotacao();

        if (!movimentoReduzido.matches) {
            intervalo = window.setInterval(function () {
                mostrarSlide(atual + 1);
            }, 5000);
        }
    }

    anterior.addEventListener("click", function () {
        mostrarSlide(atual - 1);
        iniciarRotacao();
    });

    proximo.addEventListener("click", function () {
        mostrarSlide(atual + 1);
        iniciarRotacao();
    });

    indicadores.forEach(function (botao, i) {
        botao.addEventListener("click", function () {
            mostrarSlide(i);
            iniciarRotacao();
        });
    });

    carrossel.addEventListener("mouseenter", pararRotacao);
    carrossel.addEventListener("mouseleave", iniciarRotacao);
    carrossel.addEventListener("focusin", pararRotacao);
    carrossel.addEventListener("focusout", iniciarRotacao);

    movimentoReduzido.addEventListener(
        "change",
        iniciarRotacao
    );

    mostrarSlide(0);
    iniciarRotacao();
})();