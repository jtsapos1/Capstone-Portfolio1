	// select main-nav
    const mainNav = document.querySelector('.main-nav');
    const visitSite = document.querySelector('.visit-site');
    const toggle = document.getElementById('toggle');

    document.onclick = function (e) {
         if (e.target === toggle || e.target.className === 'bar') {
            toggle.classList.toggle('active');
            mainNav.classList.toggle('active');
         } else if (e.target.className === 'visit-site') {
            visitSite.classList.toggle('active');
         } else if (e.target !== mainNav ) {
            toggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    }

    // toggle.onclick = function () {
    //     toggle.classList.toggle('active');
    //     mainNav.classList.toggle('active')
    // }