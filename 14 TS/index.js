// 1.........
var a = +prompt('Введите первое число ...');
var b = +prompt('Введите второе число ...');
function receive(a, b) {
    if (a < b) {
        return '-1';
    }
    else if (a > b) {
        return '1';
    }
    else {
        return '0';
    }
}
console.log(receive(a, b));
// // 2.........
var x = +prompt('Введите число для определения факториала ...');
function factor(x) {
    if (x == 1) {
        return 1;
    }
    else {
        return x * factor(x - 1);
    }
}
console.log('Факториал = ' + factor(x));
// 3........
var q = +prompt('Введите первое число ...');
var w = +prompt('Введите второе число ...');
var e = +prompt('Введите третье число ...');
function combine(q, w, e) {
    return 'Получилось: ' + q + w + e;
}
console.log(combine(q, w, e));
// 4........
var l1 = +prompt('Введите длину первой стороны прямоугольника ...');
var l2 = +prompt('Введите длину второй стороны прямоугольника ...');
var res = 0;
function rectangle(l1, l2) {
    if (isNaN(l1)) {
        l1 = l2;
    }
    else if (isNaN(l2)) {
        l2 = l1;
    }
    return res = l1 * l2;
}
console.log('Площадь = ' + rectangle(l1, l2));
// 5.......
var num = +prompt('Введите число ...');
function ideal(num) {
    var sum = 0;
    var result = 0;
    for (var i = 1; i < num - 1; i++) {
        result = num % i;
        if (result === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        return sum;
    }
    else {
        return 0;
    }
}
if (num === ideal(num)) {
    console.log('Число является совершенным');
}
else {
    console.log('Число не является совершенным');
}
// 6.......
var min = +prompt('Введите минимальное значение для диапазона ...');
var max = +prompt('Введите максимальное значение для диапазона ...');
function diapason(min, max) {
    var range = '';
    for (var j = min; j <= max; j++) {
        if (ideal(j) !== 0) {
            range += (j + ' ');
        }
    }
    return range;
}
console.log('В указанном диапазоне находятся совершенные числа: ' + diapason(min, max) + '.');
// 7.......
var hh = prompt('Введите часы ...');
var mm = prompt('Введите минуты ...');
var ss = prompt('Введите секунды ...');
console.log(isNaN(+hh));
function time(hh, mm, ss) {
    if (mm == '') {
        mm = '00';
    }
    if (ss == '') {
        ss = '00';
    }
    if (isNaN(+hh) || (+hh < 0 || +hh > 23)) {
        hh = 'Wrong number';
    }
    if (isNaN(+hh) || (+mm < 0 || +mm > 59)) {
        mm = 'Wrong number';
    }
    if (isNaN(+hh) || (+ss < 0 || +ss > 59)) {
        ss = 'Wrong number';
    }
    var z1 = '';
    var z2 = '';
    if (mm == '' && +mm < 10) {
        z1 = 0;
    }
    if (ss == '' && +ss < 10) {
        z2 = 0;
    }
    return "".concat(hh, ":").concat(z1).concat(mm, ":").concat(z2).concat(ss);
}
console.log(time(hh, mm, ss));
// 8.......
var hh1 = +prompt('Введите часы ...');
var mm1 = +prompt('Введите минуты ...');
var ss1 = +prompt('Введите секунды ...');
var timeShow1 = 0;
function convertToSec(hh1, mm1, ss1) {
    mm1 *= 60;
    hh1 *= Math.pow(60, 2);
    timeShow1 = (hh1 + mm1 + ss1);
    return timeShow1;
}
console.log('Получилось: ' + convertToSec(hh1, mm1, ss1) + ' секунд');
// 9.......
var ss2 = +prompt('Введите секунды ...');
function convertToDate(ss2) {
    var mm2 = 0;
    var hh2 = 0;
    for (var i = ss2; ss2 >= 60; i - 60) {
        if (ss2 >= 60) {
            mm2++;
        }
        if (mm2 >= 60) {
            hh2++;
            mm2 -= 60;
        }
        ss2 -= 60;
    }
    var z1 = '';
    var z2 = '';
    if (mm2 < 10) {
        z1 = 0;
    }
    if (ss2 < 10) {
        z2 = 0;
    }
    return "".concat(hh2, ":").concat(z1).concat(mm2, ":").concat(z2).concat(ss2);
}
console.log('Время: ' + convertToDate(ss2));
// 10.......
var hhInn = +prompt('Введите начальную дату. Часы: ...');
var mmInn = +prompt('Введите начальную дату. Минуты: ...');
var ssInn = +prompt('Введите начальную дату. Секунды: ...');
var hhOut = +prompt('Введите конечную дату. Часы: ...');
var mmOut = +prompt('Введите конечную дату. Минуты: ...');
var ssOut = +prompt('Введите конечную дату. Секунды: ...');
var outConv = '';
function fullConvert(hhInn, mmInn, ssInn, hhOut, mmOut, ssOut) {
    var convRes = 0;
    var firstDate = convertToSec(hhInn, mmInn, ssInn);
    var secondDate = convertToSec(hhOut, mmOut, ssOut);
    if (firstDate > secondDate) {
        convRes = firstDate - secondDate;
    }
    else {
        convRes = secondDate - firstDate;
    }
    return convertToDate(convRes);
}
console.log('Разница между введенным временем = ' + fullConvert(hhInn, mmInn, ssInn, hhOut, mmOut, ssOut));
