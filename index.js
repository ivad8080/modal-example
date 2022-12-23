let overlayElement = document.querySelector('.overlay')
let modalElement = document.querySelector('.modal')
let openModalButton = document.querySelector('.open-modal')
let openModalFullscreenButton = document.querySelector('.open-modal-fullscreen')
let closeModalButton = document.querySelector('.close-modal')

function openModal() {
  overlayElement.style.display = "block"
  overlayElement.style.padding = "1.5rem"
}

function openModalFullscreen() {
  overlayElement.style.display = "block"
  overlayElement.style.padding = "0"
  modalElement.style.width = "100%"
  modalElement.style.height = "100%"
}

function closeModal() {
  overlayElement.style.display = "none"
}

openModalButton.addEventListener('click', openModal)
openModalFullscreenButton.addEventListener('click', openModalFullscreen)
closeModalButton.addEventListener('click', closeModal)