// 1.........

const a: number = +prompt('Введите первое число ...');
const b: number = +prompt('Введите второе число ...');

function receive(a: number, b: number): string {
    if (a < b) {
        return '-1';
    } else if (a > b) {
        return '1';
    } else {
        return '0';
    }
}
console.log(receive(a, b));

// // 2.........

const x: number = +prompt('Введите число для определения факториала ...');

function factor(x: number): number {
    if (x == 1) {
        return 1;
    } else {
        return x * factor(x - 1);
    }
}
console.log('Факториал = ' + factor(x));

// 3........

const q: number = +prompt('Введите первое число ...');
const w: number = +prompt('Введите второе число ...');
const e: number = +prompt('Введите третье число ...');

function combine(q: number, w: number, e: number): string {
    return 'Получилось: ' + q + w + e;
}

console.log(combine(q, w, e));

// 4........

const l1: number = +prompt('Введите длину первой стороны прямоугольника ...');
const l2: number = +prompt('Введите длину второй стороны прямоугольника ...');
let res: number = 0;

function rectangle(l1: number, l2: number): number {
    if (isNaN(l1)) {
        l1 = l2;
    } else if(isNaN(l2)) {
        l2 = l1;
    } 
    return res = l1 * l2;
}
console.log('Площадь = ' + rectangle(l1, l2));

// 5.......

let num: number = +prompt('Введите число ...');

function ideal(num: number): number {
    let sum: number = 0;
    let result: number = 0;

    for (let i = 1; i < num - 1; i++) {
        result = num % i;
        if (result === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        return sum;
    } else {
        return 0;
    }
}

if (num === ideal(num)) {
    console.log('Число является совершенным');
} else {
    console.log('Число не является совершенным');
}

// 6.......

const min: number = +prompt('Введите минимальное значение для диапазона ...');
const max: number = +prompt('Введите максимальное значение для диапазона ...');

function diapason(min: number, max: number): string {
    let range: string = '';  
    for (let j = min; j <= max ; j++) {
        if (ideal(j) !== 0) {
            range += (j + ' ');
        }
    }
    return range;
}

console.log('В указанном диапазоне находятся совершенные числа: ' + diapason(min, max) + '.');

// 7.......

let hh: string = prompt('Введите часы ...');
let mm: string = prompt('Введите минуты ...');
let ss: string = prompt('Введите секунды ...');
console.log(isNaN(+hh));


function time(hh: string, mm: string, ss: string): string {
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
    let z1: any = '';
    let z2: any = '';
    if (mm == '' && +mm < 10 ) {
        z1 = 0;
    }
    if (ss == '' && +ss < 10) {
        z2 = 0;
    }
    return `${hh}:${z1}${mm}:${z2}${ss}`;
}
console.log(time(hh, mm, ss));

// 8.......

let hh1: number = +prompt('Введите часы ...');
let mm1: number = +prompt('Введите минуты ...');
let ss1: number = +prompt('Введите секунды ...');
let timeShow1: number = 0;

function convertToSec(hh1: number, mm1: number, ss1: number): number {
    mm1 *= 60;
    hh1 *= 60 ** 2;
    timeShow1 = (hh1 + mm1 + ss1);
    return timeShow1;
}

console.log('Получилось: ' + convertToSec(hh1, mm1, ss1) + ' секунд');

// 9.......

let ss2: number = +prompt('Введите секунды ...');

function convertToDate(ss2: number): string {
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
    let z1: any = '';
    let z2: any = '';
    if (mm2 < 10) {
        z1 = 0;
    }
    if (ss2 < 10) {
        z2 = 0;
    }
    return `${hh2}:${z1}${mm2}:${z2}${ss2}`;
}

console.log('Время: ' + convertToDate(ss2));

// 10.......

let hhInn: number = +prompt('Введите начальную дату. Часы: ...');
let mmInn: number = +prompt('Введите начальную дату. Минуты: ...');
let ssInn: number = +prompt('Введите начальную дату. Секунды: ...');
let hhOut: number = +prompt('Введите конечную дату. Часы: ...');
let mmOut: number = +prompt('Введите конечную дату. Минуты: ...');
let ssOut: number = +prompt('Введите конечную дату. Секунды: ...');
let outConv: string = '';


function fullConvert(hhInn: number, mmInn: number, ssInn: number, hhOut: number, mmOut: number, ssOut: number): string {
    let convRes: number = 0;
    const firstDate: number = convertToSec(hhInn, mmInn, ssInn);
    const secondDate: number = convertToSec(hhOut, mmOut, ssOut);
    if (firstDate > secondDate) {
        convRes = firstDate - secondDate;
    } else {
        convRes = secondDate - firstDate;
    }
    return convertToDate(convRes);
}

console.log('Разница между введенным временем = ' + fullConvert(hhInn, mmInn, ssInn, hhOut, mmOut, ssOut));



