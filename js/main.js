// navigation

const headerBurger = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close')

headerBurger.addEventListener('click', showNavigation);
navigationClose.addEventListener('click', hideNavigation);

function showNavigation() {
    navigation.classList.add('navigation_open', 'navigation_anim');
}

function hideNavigation() {
    navigation.classList.remove('navigation_open')
}

// modal

// const startTrialButton = document.querySelector('.header .button');
// const signInButton = document.querySelector('.header__sign');
// const homeButton = document.querySelector('.main .button')
const modalOverlay = document.querySelector('.modal__overlay');
const modalClose = document.querySelectorAll('.modal__close');
// const productButton = document.querySelector('.product__blog .button')

const modalButtons = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function(button) {
    button.addEventListener('click', showModal);
});

// startTrialButton.addEventListener('click', showModal)
// signInButton.addEventListener('click', showModal)
// homeButton.addEventListener('click',showModal )
// productButton.addEventListener('click', showModal)

modalClose.forEach(function(close) {
    close.addEventListener('click', hideModal)
})

function showModal(event) {
    const data = event.target.getAttribute('data-modal')
    const modal = document.querySelector(data);
    modalOverlay.classList.add('modal__overlay_open', 'modal__overlay_anim')
    modal.classList.add('modal_open');
}

function hideModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.classList.remove('modal_open')
    });
    modalOverlay.classList.remove('modal__overlay_open')
}

// smooth scroll

const headerLinks = document.querySelectorAll('.header__navigation .header__text');
const footerLinks = document.querySelectorAll('.footer .footer__text');
const navLinks = document.querySelectorAll('.navigation .navigation__link');
const header = document.querySelector('.header');

headerLinks.forEach(function(link) {
    link.addEventListener('click', scrollToElement);
});
footerLinks.forEach(function(link) {
    link.addEventListener('click', scrollToElement);
});
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        hideNavigation();
        scrollToElement(event);
    });
})

function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo({
        top: block.offsetTop - header.clientHeight,
        behavior: "smooth"
    });
}
