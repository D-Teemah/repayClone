const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');
const head = document.querySelector('[role = "heading"]')

navBtn.addEventListener('click', () => {

    menuBar.classList.toggle('invisible')
    menuBar.classList.toggle('visible')
    menuBar.style.opacity ="0.7"
})