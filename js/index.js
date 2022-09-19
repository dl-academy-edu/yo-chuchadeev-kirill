var popup = document.querySelector('.popup')
var popapBtn = document.querySelector('.banner_js')
var popapClose = document.querySelector('.popap__close')
var check = document.querySelector ('#input__check')
var submit = document.querySelector ('.button__submit')
submit.setAttribute('disabled', true)

check.oninput = function() {
    if (check.checked) {
        submit.removeAttribute('disabled');
    }else{
        submit.setAttribute('disabled', true);
    }
}

popapBtn.addEventListener('click', function() {
    popup.classList.add('popup_open')
})

popapClose.addEventListener('click', function() {
    popup.classList.remove('popup_open')
})
