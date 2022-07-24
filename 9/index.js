document.addEventListener('DOMContentLoaded', function () {
    const range = document.querySelectorAll('input');
    const getCss = document.querySelector('.button');
    const test = document.querySelector('.test');
    range[0].addEventListener('click', event => handlerWidth(event, test, range[0]));
    range[1].addEventListener('click', event => handlerHeight(event, test, range[1]));
    range[2].addEventListener('blur', event => handlerColor(event, test, range[2]));
    range[3].addEventListener('click', event => handlerRadius(event, test, range[3]));
    range[4].addEventListener('blur', event => handlerBackColor(event, test, range[4]));
    getCss.addEventListener('click', event => handlerCSS(event, range));
})
function handlerWidth(event, test, input) {
    test.style.width = `${input.value}px`;
}
function handlerHeight(event, test, input) {
    test.style.height = `${input.value}px`;
}
function handlerColor(event, test, input) {
    test.style.borderColor = `${input.value}`;
}
function handlerRadius(event, test, input) {
    test.style.borderRadius = `${input.value}%`;
}
function handlerBackColor(event, test, input) {
    test.style.backgroundColor = `${input.value}`;
}
function handlerCSS(event, range) {
    document.querySelector('.result').innerHTML = '';
    document.querySelector('.result').innerHTML += `<h4> width: ${range[0].value}px;<br> 
    height: ${range[1].value}px;<br> color: ${range[2].value};<br> border-radius: ${range[3].value}%;<br> 
    background-color: ${range[4].value};</h4>`
}
