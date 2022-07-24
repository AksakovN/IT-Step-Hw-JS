// 1.Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
function ex1(str) {
    let lett = 0;
    let numb = 0;
    let symb = 0;
    const arrLet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    for (const i of str) {
        if (arrLet.includes(i)) {
            lett++;
        } else if (Number.isInteger(+i) && i !== ' ') {
            numb++;
        } else {
            symb++;
        }
    }
    console.log(`Букв - ${lett}; цифр - ${numb}; символов - ${symb}.`);
}
const str1 = prompt('Введите любое предложение на eng...');
ex1(str1);

// 2.Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
function ex3(str) {
    let newStr = '';
    let newLet = '';
    for (const i of str) {
        if (Number.isInteger(+i) && i !== ' ') {
            newLet = '_';
        } else if (i.toUpperCase() == i) {
            newLet = i.toLowerCase();
        } else if (i.toLowerCase() == i) {
            newLet = i.toUpperCase();
        }
        newStr += newLet;
    }
    console.log(newStr);
}
const str2 = prompt('Введите любое предложение на eng...');
ex3(str2);

// 3.Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, textalign
// в textAlign.
function ex4(str) {
    let newStr = [];
    let strNew = '';
    for (const i of str) {
        newStr.push(i);
    }
    let arrS = newStr.indexOf('-');
    if (newStr.includes('-')) {
        newStr.splice((arrS), 1);
        newStr[arrS] = newStr[arrS].toUpperCase();
    }
    newStr.forEach(elem => {
        strNew += elem;
    });
    console.log(strNew);
}
const str3 = prompt('Введите название css-стиля...');
ex4(str3);

// 4.Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.
function ex5(str) {
    let newStr = '';
    let newStr1 = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr = str.substr(i, 2);
            newStr = newStr.toUpperCase();
            newStr1 += newStr;
        } 
    }
    console.log(`${str[0].toUpperCase()}${newStr1}`);
}
const str4 = prompt('Введите словосочетания для создания аббревиатуры...');
ex5(str4);

// 5.Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.
function ex6(str) {
    let newStr = [];
    let newStr1 = '';
    for (const i of str) {
        newStr.push(i);
    }
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
            newStr.splice((i), 1);
        } 
    }
    newStr.forEach(elem => {
        newStr1 += elem;
    });
    console.log(newStr1);
}
const str5 = prompt('Введите любое количество слов для объединения....');
ex6(str5);