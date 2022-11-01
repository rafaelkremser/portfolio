const btnMobile = document.getElementById('hd-btn');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);