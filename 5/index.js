
//1.Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
const car = {
    mark: 'Ford',
    model: 'Mustang',
    year: '2010',
    speed: 100
};

//1.1 Функция для вывода на экран информации об автомобиле.
function ex1_1(obj) {
    let summ = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = `${key} = ${obj[key]}`;  
            summ +=`\n${element}` ;
        }   
    }
    alert(summ);
}
ex1_1(car);

//1.2 Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.
function ex1_2(obj, L) {
    let t = 0;
    t = L / obj.speed;
    summ = t;
    while ((t % 4 === 0 && t > 0)) {
        t -= 4;
        summ++;
    }
    alert(`Водитель будет в пути ${summ} часов.`);   
}
const L = prompt('Введите расстояние, которое преодолел автомобиль...');
ex1_2(car, L);

// 2.Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
const fraction1 = {
    num: 9,
    denom: 2
}
const fraction2 = {
    num: 7,
    denom: 12
}
alert('Первая дробь - 9/2, вторая дробь - 7/12')

//2.1Функция сложения 2-х объектов-дробей.

function ex2_1(obj1, obj2) {
    alert(`Сложение : Числитель = ${obj1.num * obj2.denom + obj2.num * obj1.denom}; Знаменатель = ${obj1.denom * obj2.denom}`);
}
ex2_1(fraction1, fraction2);

// //2.2Функция вычитания 2-х объектов-дробей.

function ex2_2(obj1, obj2) {
    alert(`Вычитание : Числитель = ${obj1.num * obj2.denom - obj2.num * obj1.denom}; Знаменатель = ${obj1.denom * obj2.denom}`);
}
ex2_2(fraction1, fraction2);

//2.3Функция умножения 2-х объектов-дробей.

function ex2_3(obj1, obj2) {
    alert(`Умножение : Числитель = ${obj1.num * obj2.num}; Знаменатель = ${obj1.denom * obj2.denom}`);
}
ex2_3(fraction1, fraction2);

//2.4Функция деления 2-х объектов-дробей.

function ex2_4(obj1, obj2) {
    alert(`Деление : Числитель = ${obj1.num * obj2.denom}; Знаменатель = ${obj1.denom * obj2.num}`);
}
ex2_4(fraction1, fraction2);

//2.5Функция сокращения объекта-дроби.

function reduction(obj1, obj2, symb) {
    switch (symb) {
        case '+':
            obj1.num = obj1.num * obj2.denom + obj2.num * obj1.denom;
            obj1.denom = obj1.denom * obj2.denom;
            break;
        case '-':
            obj1.num = obj1.num * obj2.denom - obj2.num * obj1.denom;
            obj1.denom = obj1.denom * obj2.denom;
            break;
        case '*':
            obj1.num = obj1.num * obj2.num;
            obj1.denom = obj1.denom * obj2.denom;
            break;
        case '/':
            obj1.num = obj1.num * obj2.denom;
            obj1.denom = obj1.denom * obj2.num;
            break;
    }
    num = obj1.num;
    denom = obj1.denom;
    for (let i = 2; i <= num; i++) { 
        if (obj1.num % i === 0 && obj1.denom % i === 0) {
            num = obj1.num / i;
            denom = obj1.denom / i;
        }
    }
    let number = 0;
    while (num >= denom) { 
        number++;
        num -= denom;
    }
    if (number > 0) {
        num = `${number} - целых; Числитель = ${num}`;
    } else {
        num = `Числитель = ${num}`;
    }
    alert(`${num}; Знаменатель = ${denom}`)
}
const symb = prompt('Введите действие (+-*/) для расчета двух дробей: Первая дробь - 9/2, вторая дробь - 7/12.');
reduction(fraction1, fraction2, symb);

// 3.Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.

const date = {
    HH: 21,
    MM: 47,
    SS: 13
}

//3.1Функция вывода времени на экран.

function ex3_1(obj) {
    let summ = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            summ += `:${element}`;
        }
    }
    alert(`Время${summ}`);
}
ex3_1(date);

// 3.2Функция изменения времени на переданное количество
// секунд.

function ex3_2(obj, ss) {
    let mm = 0;
    let hh = 0;
    obj.MM *= 60;
    obj.HH *= 60 ** 2;
    curTime = (obj.HH + obj.MM + obj.SS);
    curTime += ss;
    for (let i = curTime; curTime >= 60; i - 60) {
        if (curTime >= 60) {
            mm++;
        }
        if (mm >= 60) {
            hh++;
            mm -= 60;
        }
        curTime -= 60;
    }
    alert(`Новое вермя: ${hh}:${mm}:${curTime}`)
    obj.MM = 47;
    obj.HH = 21;
}
const ss = +prompt('Введите количество секунд, на которое нужно увеличить стартовое время 21:47:13...');
ex3_2(date, ss);

// 3.3Функция изменения времени на переданное количество
// минут.

function ex3_3(obj, min) {
    let ss = 0;
    let hh = 0;
    obj.MM *= 60;
    obj.HH *= 60 ** 2;
    curTime = (obj.HH + obj.MM + obj.SS);
    curTime += ss;
    for (let i = curTime; curTime >= 60; i - 60) {
        if (curTime >= 60) {
            min++;
        }
        if (min >= 60) {
            hh++;
            min -= 60;
        }
        curTime -= 60;
    }
    alert(`Новое вермя: ${hh}:${min}:${curTime}`)
    obj.MM = 47;
    obj.HH = 21;
}
const min = +prompt('Введите количество минут, на которое нужно увеличить стартовое время 21:47:13...');
ex3_3(date, min);

// 3.4Функция изменения времени на переданное количество
// часов.

function ex3_4(obj, hou) {
    let mm = 0;
    let ss = 0;
    let hh = 0;
    obj.MM *= 60;
    obj.HH *= 60 ** 2;
    curTime = (obj.HH + obj.MM + obj.SS);
    curTime += ss;
    for (let i = curTime; curTime >= 60; i - 60) {
        if (curTime >= 60) {
            mm++;
        }
        if (mm >= 60) {
            hh++;
            mm -= 60;
        }
        curTime -= 60;
    }
    alert(`Новое вермя: ${hou + hh}:${mm}:${curTime}`)
}
const hou = +prompt('Введите количество часов, на которое нужно увеличить стартовое время 21:47:13...');
ex3_4(date, hou);
