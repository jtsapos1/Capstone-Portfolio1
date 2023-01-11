	// select main-nav
    const mainNav = document.querySelector('.main-nav');
    const visitSite = document.querySelector('.visit-site');
    const back = document.getElementById('back');
    const toggle = document.getElementById('toggle');

    document.onclick = function (e) {
         if (e.target === toggle || e.target.className === 'bar') {
            toggle.classList.toggle('active');
            mainNav.classList.toggle('active');
         } else if (e.target.className === 'visit-site' || e.target === back) {
            visitSite.classList.toggle('active');
            back.classList.toggle('active');
         } else if (e.target !== mainNav ) {
            toggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
        }
    }

    // toggle.onclick = function () {
    //     toggle.classList.toggle('active');
    //     mainNav.classList.toggle('active')
    // }