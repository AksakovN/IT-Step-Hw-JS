//1
const age = +prompt('Ваш возраст?');
let age_res = '';
if(age > 0 && age < 12) {
    age_res = 'Вы ребенок';
} else if(age >= 12 && age < 18) {
    age_res = 'Вы подросток';
} else if(age >= 18 && age < 60) {
    age_res = 'Вы взрослый';
} else {
    age_res = 'Вы пенсионер';
}
alert(age_res);


//2
const num = +prompt('Введите число от 0 до 9 ...');
let num_res = '';
switch (num) {
    case 1:
        num_res = '!';
        break;
    case 2:
        num_res = '@';
        break;
    case 3:
        num_res = '#';
        break;
    case 4:
        num_res = '$';
        break;
    case 5:
        num_res = '%';
        break;
    case 6:
        num_res = '^';
        break;
    case 7:
        num_res = '&';
        break;
    case 8:
        num_res = '*';
        break;
    case 9:
        num_res = '(';
        break;
    case 0:
        num_res = ')';
        break;

    default:
        num_res = error;
        break;
}
alert(num_res);


//3
const num3 = prompt('Введите трехзначное число ...');
let num3_res = num3[0] === num3[1] ? 'Есть одинаковые цифры' : num3[1] === num3[2] ? 'Есть одинаковые цифры' : num3[2] === num3[0]? 'Есть одинаковые цифры' : 'Нет одинаковых цифр';
alert(num3_res);


//4
const year1 = +prompt('Введите год ...');
let year_res = (year1 % 400 && year1 % 4) && year1 % 100 ? 'Не високосный' : 'Високосный';
alert(year_res);


//5
const num_5 = prompt('Введите пятиразрядное число ...');
let num_5res = num_5[0] == num_5[4] && num_5[1] == num_5[3] ? 'Палиндром' : 'Не палиндром';
alert(num_5res);


//6
const curr = prompt('Введите сумму (USD) ...');
const curr_1 = prompt('Введите валюту для конвертации (EUR, UAN, AZN) ...').toLowerCase();
let curr_res = '';
switch (curr_1) {
    case 'eur':
        curr_res = curr * 1.14;
        break;
    case 'uan':
        curr_res = curr * 0.16;
        break;
    case 'azn':
        curr_res = curr * 0.57;
        break;

    default:
        curr_res = 'error';
        break;
}
alert(curr_res);


//7
const price = prompt('Введите сумму покупки ...');
let price_res = '';
if(price <= 0) {
    price_res = 'wrong number!';
} else if(price > 0 && price < 200) {
    price_res = 'К оплате ' + price;
} else if(price > 200 && price < 300) {
    price_res = 'К оплате ' + (price - price * 0.03);
} else if(price >= 300 && price < 500) {
    price_res = 'К оплате ' + (price - price * 0.05);
} else {
    price_res = 'К оплате ' + (price - price * 0.07);
}
alert(price_res);


//8
const circle = prompt('Укажите длину окружности ...');
const square = prompt('Укажите периметр квадрата ... ');
const diam = circle / (2 * Math.PI);
const lenght = square / 4;
let equation = diam < lenght ? 'Поместится' : 'Не поместится';
alert(equation);


//9
const q1 = prompt('Укажите правильный вариант ответа: 2+2=? / a = 3, b = 4, c = 5').toLowerCase();
const q2 = prompt('2*2=? / a = 4, b = 6, c = 8').toLowerCase();
const q3 = prompt('2/2=? / a = 4, b = 2, c = 1').toLowerCase();
let q1_res = '';
let q2_res = '';
let q3_res = '';
switch (q1) {
    case 'a':
        q1_res = 0;
        break;
    case 'b':
        q1_res = 2;
        break;
    case 'c':
        q1_res = 0;
        break;
    default:
        q1_res = 0;
        break;
}
switch (q2) {
    case 'a':
        q2_res = 2;
        break;
    case 'b':
        q2_res = 0;
        break;
    case 'c':
        q2_res = 0;
        break;
    default:
        q2_res = 0;
        break;
}
switch (q3) {
    case 'a':
        q3_res = 0;
        break;
    case 'b':
        q3_res = 0;
        break;
    case 'c':
        q3_res = 2;
        break;
    default:
        q3_res = 0;
        break;
}
let q_res = '';
if((q1_res + q2_res + q3_res) === 2) {
    q_res = 'балла.'
} else if((q1_res + q2_res + q3_res) === 4) {
    q_res = 'балла.'
} else {
    q_res = 'баллов.'
}
alert('Вы набрали '+ (q1_res + q2_res + q3_res) + ' ' + q_res);


//10
let day = prompt('Введите день ...');
let month = prompt('Введите месяц ...');
let year = prompt('Введите год ...');
let cal = '';
if(day >= 1 && day < 30) {
    day = ++day;
}else if(day == 30) {
    day = 1;
    month = ++month;
} else {
    day = 'wrong date'
}
if(month >= 1 && month < 12) {
    month = month;
} else if(month == 12, month == 13) {
    month = 1;
    year = ++year;
} else {
    month = 'wrong date';
}
alert('Завтрашняя дата: ' + day + '.' + month + '.' + year);