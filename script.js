document.addEventListener('DOMContentLoaded', () => {
    console.log("Site de Fisioterapia carregado com sucesso!");

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});