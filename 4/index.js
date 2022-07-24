// 1.........
function receive(a, b) {
    if (a < b) {
        return '-1';
    } else if (a > b) {
        return '1';
    } else {
        return '0';
    }
}
const a = prompt('Введите первое число ...');
const b = prompt('Введите второе число ...');

alert(receive(a, b));


// 2.........
function factor(x) {
    if (x == 1) {
        return '1';
    } else {
        return x * factor(x - 1);
    }
}
const x = prompt('Введите число для определения факториала ...');

alert('Факториал = ' + factor(x));



// 3........
function combine(q, w, e) {
    return q + w + e;
}
const q = prompt('Введите первое число ...');
const w = prompt('Введите второе число ...');
const e = prompt('Введите третье число ...');
alert('Получилось: ' + combine(q, w, e));


// 4........
function rectangle(l1, l2) {
    if (isNaN(l1)) {
        l1 = l2;
    } else if(isNaN(l2)) {
        l2 = l1;
    } 
    return res = l1 * l2;
}
const l1 = +prompt('Введите длину первой стороны прямоугольника ...');
const l2 = +prompt('Введите длину второй стороны прямоугольника ...');
let res = '';

alert('Площадь = ' + rectangle(l1, l2));


// 5.......
function ideal(num) {
    let sum = 0;
    let result = '';
    for (let i = 1; i < num - 1; i++) {
        result = num % i;
        if (result === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        return num = sum;
    } else {
        return num = 0;
    }
}
let num = +prompt('Введите число ...');
if (num === ideal(num)) {
    alert('Число является совершенным');
} else {
    alert('Число не является совершенным');
}



// 6.......
function diapason(min, max) {
    let range = '';  
    for (let j = min; j <= max ; j++) {
        if (ideal(j) !== 0) {
            range += (j + ' ');
        }
    }
    return range;
}
 const min = +prompt('Введите минимальное значение для диапазона ...');
 const max = +prompt('Введите максимальное значение для диапазона ...');
alert('В указанном диапазоне находятся числа: ' + diapason(min, max) + '.');



// 7.......
function time(hh, mm, ss) {
    if (isNaN(mm) || isNaN(ss)) {
        if (isNaN(mm) ) {
            mm = '00';
        } else {
            ss = '00';
        }
    } 
    if ((hh < 0 || hh > 24) || (mm < 0 || mm > 60) || (ss < 0 || ss > 60)) {
        if (hh < 0 || hh > 24) {
            hh = 'Wrong number';
        }
        if (mm < 0 || mm > 60) {
            mm = 'Wrong number';
        }
        if (ss < 0 || ss > 60) {
            ss = 'Wrong number';
        }
    }   
    timeShow = hh + ':' + mm + ':' + ss;
    return timeShow
}
let hh = +prompt('Введите часы ...');
let mm = +prompt('Введите минуты ...');
let ss = +prompt('Введите секунды ...');
let timeShow = '';
alert(time(hh, mm, ss));



// 8.......
function convertToSec(hh1, mm1, ss1) {
    mm1 *= 60;
    hh1 *= 60 ** 2;
    timeShow1 = (hh1 + mm1 + ss1);
    return timeShow1;
}
let hh1 = +prompt('Введите часы ...');
let mm1 = +prompt('Введите минуты ...');
let ss1 = +prompt('Введите секунды ...');
let timeShow1 = '';
alert('Получилось: ' + convertToSec(hh1, mm1, ss1)  + ' секунд');



// 9.......
function convertToDate(ss2) {
    let mm2 = 0;
    let hh2 = 0;
    for (let i = ss2; ss2 >= 60; i - 60) {
        if (ss2 >= 60) {
            mm2++;
        }
        if (mm2 >= 60) {
            hh2++;
            mm2 -= 60;
        }
        ss2 -= 60;
    }
    timeShow2 = hh2 + ':' + mm2 + ':' + ss2;
    return timeShow2;
}
let ss2 = +prompt('Введите секунды ...');

let timeShow2 = '';
alert('Время: ' + convertToDate(ss2));




// 10.......
function fullConvert(hhInn, mmInn, ssInn, hhOut, mmOut, ssOut) {
    let convRes = '';
    if (convertToSec(hhInn, mmInn, ssInn) > convertToSec(hhOut, mmOut, ssOut)) {
        convRes = convertToSec(hhInn, mmInn, ssInn) - convertToSec(hhOut, mmOut, ssOut);
    } else {
        convRes = convertToSec(hhOut, mmOut, ssOut) - convertToSec(hhInn, mmInn, ssInn);
    }
    outConv = convertToDate(convRes);
    return outConv;
}
let hhInn = +prompt('Введите начальную дату. Часы: ...');
let mmInn = +prompt('Введите начальную дату. Минуты: ...');
let ssInn = +prompt('Введите начальную дату. Секунды: ...');
let hhOut = +prompt('Введите конечную дату. Часы: ...');
let mmOut = +prompt('Введите конечную дату. Минуты: ...');
let ssOut = +prompt('Введите конечную дату. Секунды: ...');
let outConv = '';
alert('Разница между введенным временем = ' + fullConvert(hhInn, mmInn, ssInn, hhOut, mmOut, ssOut));