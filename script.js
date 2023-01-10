	// select hamburger
    const hamburger = document.querySelector('.hamburger')
    // select main-nav
    const mainNav = document.querySelector('.main-nav')
    // const menu = document.getElementById('menu')
    const toggle = document.getElementById('toggle');

    document.onclick = function (e) {
        if (e.target.id !== 'mainNav' && e.target.id !== 'toggle') {
            toggle.classList.remove('active');
            toggle.classList.remove('active');
        }
    }

    toggle.onclick = function () {
        toggle.classList.toggle('active');
        mainNav.classList.toggle('active')
    }