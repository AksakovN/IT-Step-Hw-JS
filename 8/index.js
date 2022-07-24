//ex1
const ex1 = document.getElementById('nameInput');

ex1.oninput = function (event) {
    if (event.data === '1' || event.data === '2' || event.data === '3' ||
        event.data === '4' || event.data === '5' || event.data === '6' ||
        event.data === '7' || event.data === '8' || event.data === '9' ||
        event.data === '0') {
        let change = Array.from(ex1.value).slice(0, -1);
        ex1.value = change.join('');
    }
};

//ex2

const modalOpen = document.getElementById('modal1');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal2')

modalOpen.onclick = function () {
    modal.style.display = 'block';
}
modalClose.onclick = function () {
    modal.style.display = 'none';
}

//ex3

const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.onmousedown = function ({ screenX, screenY }) {
    ball.style.top = `${screenY - 140}px`;
    ball.style.left = `${screenX - 50}px`;
}

//ex4

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const switchBut = document.getElementById('switch');
let count = 0;
switchBut.onclick = function () {
    if (count === 0 || count % 3 === 0) {
        green.style.backgroundColor = 'grey';
        red.style.backgroundColor = 'red';
        count++;
    } else if ((count + 2) % 3 === 0) {
        red.style.backgroundColor = 'grey';
        yellow.style.backgroundColor = 'yellow';
        count++;
        console.log(count);
    } else if ((count + 1) % 3 === 0) {
        yellow.style.backgroundColor = 'grey';
        green.style.backgroundColor = 'green';
        count++;
    }
    return;
}

//ex5

const book1 = document.getElementsByClassName('li')[0];
const book2 = document.getElementsByClassName('li')[1];
const book3 = document.getElementsByClassName('li')[2];
const book4 = document.getElementsByClassName('li')[3];

book1.onclick = function () {
    book1.classList.add('li1');
    book2.classList.remove('li1');
    book3.classList.remove('li1');
    book4.classList.remove('li1');
}
book2.onclick = function () {
    book2.classList.add('li1');
    book1.classList.remove('li1');
    book3.classList.remove('li1');
    book4.classList.remove('li1');
}

book3.onclick = function () {
    book3.classList.add('li1');
    book2.classList.remove('li1');
    book1.classList.remove('li1');
    book4.classList.remove('li1');
}

book4.onclick = function () {
    book4.classList.add('li1');
    book2.classList.remove('li1');
    book3.classList.remove('li1');
    book1.classList.remove('li1');
}

//ex6

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btnAct1 = document.querySelector('.btnAct1');
const btnAct2 = document.querySelector('.btnAct2');

btnAct1.onmouseover = function () {
    btn1.style.visibility = 'visible';
} 
btnAct1.onmouseout = function () {
    btn1.style.visibility = 'hidden';
} 
btnAct2.onmouseover = function () {
    btn2.style.visibility = 'visible';
} 
btnAct2.onmouseout = function () {
    btn2.style.visibility = 'hidden';
} 

//ex7

const firstUl = document.querySelector('.firstUl');
const secondUl1 = document.querySelector('.secondUl1');
const secondUl2 = document.querySelector('.secondUl2');
const secondUl3 = document.querySelector('.secondUl3');
const thirdUl1 = document.querySelector('.thirdUl1');
const thirdUl2 = document.querySelector('.thirdUl2');
const thirdUl3 = document.querySelector('.thirdUl3');
firstUl.onclick = function () {
        secondUl1.classList.toggle('liHidden');
        secondUl2.classList.toggle('liHidden');
        secondUl3.classList.toggle('liHidden');
}
secondUl1.onclick = function (event) {
    event.stopPropagation();
    thirdUl1.classList.toggle('liHidden');
}
secondUl2.onclick = function (event) {
    event.stopPropagation();
    thirdUl2.classList.toggle('liHidden');
}
secondUl3.onclick = function (event) {
    event.stopPropagation();
    thirdUl3.classList.toggle('liHidden');
}