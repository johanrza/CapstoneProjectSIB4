let navLinks = document.getElementsByClassName('nav-link');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
      let currentActive = document.querySelector('.nav-link.active');
      if (currentActive) {
        currentActive.classList.remove('active');
        currentActive.removeAttribute('aria-current');
      }

      this.classList.add('active');
      this.setAttribute('aria-current', 'page');
    });
  }