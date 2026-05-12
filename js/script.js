document.addEventListener('DOMContentLoaded', () => {
    /* Manipulação do Menu */
    const navMenu = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        /*Lógica para alterar o icone */
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.replace('ph-list', 'ph-x');
        } else {
            menuIcon.classList.replace('ph-x', 'ph-list');
        }
    });

    /* FUNÇÕES PARA O SLIDER */
    const slides = document.querySelectorAll('.carousel-slide');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    /* Variaveis*/
    let currentSlide = 0;
    let autoPlayTimer;

    //Função para mostrar o slide atual (currentSlide)
    function showTargetSlide(index) {
        //Inicialmente remove todos os slides ativos
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) {
            currentSlide = 0;
        }
        else if (index < 0) {
            currentSlide = slides.length - 1;
        }
        else {
            currentSlide = index;
        }

        slides[currentSlide].classList.add('active');
    }

    function runAutoPlay() {
        autoPlayTimer = setInterval(() => {
            showTargetSlide(currentSlide + 1);
        }, 6000);
    }

    //Ações dos botões
    btnNext.addEventListener('click', () => {
        showTargetSlide(currentSlide + 1);
        resetAutoPlay();
    });

    btnPrev.addEventListener('click', () => {
        showTargetSlide(currentSlide - 1);
        resetAutoPlay();
    });

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        runAutoPlay();
    }

    runAutoPlay();

    const counters = document.querySelectorAll('.stat-num');

    function runCounterAnimation(el) {

        const targetNumber = parseInt(el.getAttribute('data-target'));

        const durationLimit = 2000;

        let counterValue = 0;

        const incrementeAmount = targetNumber / (durationLimit / 20);

        const updateVisualsTimer = setInterval(() => {
            counterValue += incrementeAmount;

            if (counterValue >= targetNumber) {
                el.innerText = targetNumber;
                clearInterval(updateVisualsTimer);
            } else {
                el.innerText = Math.ceil(counterValue);
            }
        }, 20);
    }

    const scrollObserver = new IntersectionObserver((entries, observerInstance) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounterAnimation(entry.target);
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold : 0.6
    });

    counters.forEach(counterItem => {
        scrollObserver.observe(counterItem);
    });

});
