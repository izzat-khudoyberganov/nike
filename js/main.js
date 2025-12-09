const nav = document.querySelector('.header__nav')
const btn = document.querySelector('.burger__menu')

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})