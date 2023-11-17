const menuToggle = document.getElementById('hamburger');
const nav = document.getElementById ('nav-menu');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

