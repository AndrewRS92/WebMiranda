document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu__button');
    const headerContainer = document.querySelector('.header__container');

    menuButton.addEventListener('click', () => {
        headerContainer.classList.toggle('menu-open');
    });
});
