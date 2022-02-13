const search = document.querySelector('.js-search')
const modal = document.querySelector('.js-modal')
function show() {
    modal.classList.add('modal')
}
search.addEventListener('click', show)
const close = document.querySelector('.ti-close')
function closemodal() {
    modal.classList.remove('modal')
}
close.addEventListener('click', closemodal)
modal.addEventListener('click', closemodal)
const modalContainer = document.querySelector('.modal-container')
modalContainer.addEventListener('click', function () {
    event.stopPropagation()
})