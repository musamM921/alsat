document.addEventListener('DOMContentLoaded', function() {
    const catalogToggle = document.querySelector('.catalog-toggle');

    catalogToggle.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
