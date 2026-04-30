// AngryBirds Framework - Navbar Toggle
document.querySelectorAll('.navbar-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const navbar = toggle.closest('.navbar');
    const menu = navbar.querySelector('.navbar-menu');

    // Cierra todos los demás menús y quita su elevación
    document.querySelectorAll('.navbar').forEach(otherNavbar => {
      if (otherNavbar !== navbar) {
        otherNavbar.querySelector('.navbar-menu').classList.remove('navbar-menu--open');
        otherNavbar.classList.remove('navbar--active');
      }
    });

    menu.classList.toggle('navbar-menu--open');
    navbar.classList.toggle('navbar--active', menu.classList.contains('navbar-menu--open'));
  });
});


// Limpia el estado del menú al cambiar a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    document.querySelectorAll('.navbar-menu--open').forEach(menu => {
      menu.classList.remove('navbar-menu--open');
    });
    document.querySelectorAll('.navbar-toggle--open').forEach(toggle => {
      toggle.classList.remove('navbar-toggle--open');
    });
    // También quita la elevación de z-index al pasar a desktop
    document.querySelectorAll('.navbar--active').forEach(navbar => {
      navbar.classList.remove('navbar--active');
    });
  }
});