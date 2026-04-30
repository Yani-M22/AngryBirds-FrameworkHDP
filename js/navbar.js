// AngryBirds Framework - Navbar Toggle
document.querySelectorAll('.navbar-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const menu = toggle.closest('.navbar').querySelector('.navbar-menu');
    menu.classList.toggle('navbar-menu--open');
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
  }
});