const navHandler = (navLink) => {
  navLink.forEach((link) => {
    link.addEventListener('click', function () {
      navLink.forEach((link) => {
        link.classList.remove('active');
      });

      this.classList.add('active');

      navLink.forEach((link) => {
        link.removeAttribute('aria-current');
      });

      this.setAttribute('aria-current', 'page');
    });
  });
};

let navMain = document.querySelectorAll('#nav .nav-link');
navHandler(navMain);
let navMobile = document.querySelectorAll('#navMobile .nav-link');
navHandler(navMobile);
