var popup = document.querySelector('.popup')
var popapBtn = document.querySelector('.banner_js')
var popapClose = document.querySelector('.popap__close')

popapBtn.addEventListener('click', function() {
    popup.classList.add('popup_open')
})

popapClose.addEventListener('click', function() {
    popup.classList.remove('popup_open')
})

