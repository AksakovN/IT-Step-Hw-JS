// 1. Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.

const list = [
    prod1 = {
        name: 'product1',
        amount: 3,
        isBought: true
    },
    prod2 = {
        name: 'product2',
        amount: 1,
        isBought: false
    },
    prod3 = {
        name: 'product3',
        amount: 2,
        isBought: true
    },
    prod4 = {
        name: 'product4',
        amount: 3,
        isBought: false
    }
]

// 1.1Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
function arrSort(a) {
    if (a.isBought === true) {
        return 1;
    } else {
        return -1;
    }
}
function ex1_1(arr) {
let sortRes = '';
sortRes = arr.sort(arrSort);
for (const elem of sortRes) {

    for (const key in elem) {
        if (elem.hasOwnProperty(key)) {
            console.log(`${key} : ${elem[key]}`);
        }
    }
}
}
ex1_1(list);

// 1.2Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
function Ex1_2(arr, prod, am) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == prod) {
            arr[i].amount += am;
        } else if (i === arr.length - 1) {
            arr.push({
                name: prod,
                amount: am,
                isBought: false
            })
        }
    }
    console.log(arr);
}
const prodName = prompt('Введите имя нового товара...');
const prodAm = +prompt('Введите количество нового товара...');
Ex1_2(list, prodName, prodAm)

// 1.3Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
function ex1_3(arr, prod) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == prod) {
            arr[i].isBought = true;
        }
    }
    console.log(arr);
}
const nameProd = prompt('Введите название продукта который хотите купить... (product2 / product4 / имя из прошлого вопроса)');
ex1_3(list, nameProd);

// 2.Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
const receipt = [
    prod1 = {
        name: 'product1',
        amount: 4,
        price: 20
    },
    prod2 = {
        name: 'product2',
        amount: 6,
        price: 132
    },
    prod3 = {
        name: 'product3',
        amount: 3,
        price: 180
    },
    prod4 = {
        name: 'product4',
        amount: 1,
        price: 80
    }
]

//2.1Распечатка чека на экран.
function ex2_1(arr) {
    for (const elem of arr) {
        for (const key in elem) {
            if (elem.hasOwnProperty(key)) {
                console.log(`${key} : ${elem[key]}`);
            }
        }
    }
}
ex2_1(receipt);

//2.2Подсчет общей суммы покупки.
function ex2_2(arr) {
    let summ = [];
    for (let i = 0; i < arr.length; i++) {
        summ.push(arr[i].amount * arr[i].price);
    }
    let res = 0;
    for (let i = 0; i < summ.length; i++) {
        res += summ[i];
    }
    console.log(`Общая стоимость - ${res}`);
}
ex2_2(receipt);

//2.3Получение самой дорогой покупки в чеке.
function comp(a, b) {
    if (a.price < b.price) return 1;
    if (a.price == b.price) return 0;
    if (a.price > b.price) return -1;
}

function ex2_3(arr) {
    arr.sort(comp);
    console.log(arr[0]);
}
ex2_3(receipt);

//2.4Подсчет средней стоимости одного товара в чеке.
function ex2_4(arr) {
    let summ = [];
    for (let i = 0; i < arr.length; i++) {
        summ.push(arr[i].amount * arr[i].price);
    }
    let res = 0;
    console.log(summ);
    for (let i = 0; i < summ.length; i++) {
        res += summ[i];
        if (i === summ.length - 1) {
            res /= ++i;
        }
    }
    console.log(`Средняя стоимость товаров - ${res}`);
}
ex2_4(receipt);

// 3.Создать массив css-стилей (цвет, размер шрифта, выравнива-
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

const styles = [
    s1 = {
        name: 'color',
        value: 'red' 
    },
    s2 = {
        name: 'font-size',
        value: '24px'  
    },
    s3 = {
        name: 'text-align',
        value: 'center' 
    },
    s4 = {
        name: 'text-decoration',
        value: 'underline'
    },
    s5 = {
        name: 'background-color',
        value: 'black'
    }
]

//ex3_1
function ex3_1(arr) {
    let summ = '';
    for (let i = 0; i < arr.length; i++) {
        summ += `${arr[i].name}: ${arr[i].value}; `
    }
    document.write(`<p style="${summ}">Hello world!</p>`);
}
ex3_1(styles);

// 4Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.

const academy = [
    aud1 = {
        name: 'Lecture hall 1',
        places: 12,
        faculty: 'fc1'
    },
    aud2 = {
        name: 'Lecture hall 2',
        places: 16,
        faculty: 'fc2'
    },
    aud3 = {
        name: 'Lecture hall 3',
        places: 18,
        faculty: 'fc3'
    },
    aud4 = {
        name: 'Lecture hall 4',
        places: 15,
        faculty: 'fc4'
    },
    aud5 = {
        name: 'Lecture hall 5',
        places: 20,
        faculty: 'fc5'
    }
]

//4.1Вывод на экран всех аудиторий.
function ex4_1(arr) {
    for (const elem of arr) {
        for (const key in elem) {
            if (elem.hasOwnProperty(key)) {
                console.log(`${key} : ${elem[key]}`);
            }
        }
    }
}
ex4_1(academy);

//4.2Вывод на экран аудиторий для указанного факультета.
function ex4_2(arr, num) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].faculty === num) {
            res = arr[i];
        }        
    }
    for (const key in res) {
        if (res.hasOwnProperty(key)) {
            console.log(`${key} : ${res[key]}`);
            
        }
    }
}
const fc = prompt('Введите название факульета (fc1 - 5)...');
ex4_2(academy,fc);

// 4.3Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
function ex4_3(arr, obj) {
    sum = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].places >= obj.places) {
            console.log(arr[i]);
        }
    }
}
const nameGr = prompt('Введите название группы...');
const forPlaces = prompt('Введите количество студентов (10-20)...');
const fcGr = prompt('Введите название факультета...');
const group = {
    name: nameGr,
    places: forPlaces,
    fc: fcGr
};
ex4_3(academy, group);

//4.4Функция сортировки аудиторий по количеству мест.
function comp2(a, b) {
    if (a.places < b.places) return 1;
    if (a.places == b.places) return 0;
    if (a.places > b.places) return -1;
}
function ex4_4(arr) {
    arr.sort(comp2);
    console.log(arr);
}
ex4_4(academy);

// 4.5Функция сортировки аудиторий по названию (по алфа-
// виту).
function comp3(a, b) {
    if (a.name > b.name) return 1;
    if (a.name == b.name) return 0;
    if (a.name < b.name) return -1;
}
function ex4_5(arr) {
    arr.sort(comp3);
    console.log(arr);
}
ex4_5(academy);

