const windowsCardwd = document.querySelector('.homePageCard')
const homeBtn = document.querySelector('#home')
const body = document.querySelector('body')

const showCard = () => {
    windowsCardwd.classList.toggle('cardShow')
}

const closeCard = () => {
    windowsCardwd.classList.toggle('cardShow')
}

homeBtn.addEventListener('click', showCard)