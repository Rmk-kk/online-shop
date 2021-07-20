const menuBtn = document.querySelector('.btn-burger');
const wrap = document.querySelector('.burger__list');
const closeBtn = document.querySelector('.btn-burger__close');
menuBtn.addEventListener('click', () => {
    wrap.classList.toggle('burger__opened');
});

closeBtn.addEventListener('click', () => {
    wrap.classList.toggle('burger__opened');
});
