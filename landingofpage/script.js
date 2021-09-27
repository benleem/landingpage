const button00 = document.querySelector('.button00');
const button01 = document.querySelector('.button01');
const button02 = document.querySelector('.button02');
const button03 = document.querySelector('.button03');

button00.addEventListener('click', () => {
    const dropdown00 = document.querySelector('.dropdown00');
    const plus00 = document.querySelector('.toggle-button00');
    dropdown00.classList.toggle('active');
    plus00.classList.toggle('active');
})

button01.addEventListener('click', () => {
    const dropdown01 = document.querySelector('.dropdown01');
    const plus01 = document.querySelector('.toggle-button01');
    dropdown01.classList.toggle('active');
    plus01.classList.toggle('active');
})

button02.addEventListener('click', () => {
    const dropdown02 = document.querySelector('.dropdown02');
    const plus02 = document.querySelector('.toggle-button02');
    dropdown02.classList.toggle('active');
    plus02.classList.toggle('active');
})

button03.addEventListener('click', () => {
    const dropdown03 = document.querySelector('.dropdown03');
    const plus03 = document.querySelector('.toggle-button03');
    dropdown03.classList.toggle('active');
    plus03.classList.toggle('active');
})