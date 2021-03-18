const inputs = document.querySelectorAll('.input')

function focusFunc() {
    var parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    var parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})