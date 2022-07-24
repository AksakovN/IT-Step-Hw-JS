const char = '*'; 
let str1 = '';

for (let i = 0; i < 10; i++) {
     for (let j = 0; j < 10; j++) {
        str1 += char;
    }

    str1 += '<br>';    
}
document.write(str1);

document.write('<br>');
let str2 = '';
let a = 10;
for (let i = 0; i < 10; i++) {
    a--;
    for (let j = a; j < 10; j++) {
        str2 += char;
    }
    str2 += '<br>';  
    
}
document.write(str2);

document.write('<br>');
let str3 = '';
let str4 = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i <= 8 - j) {
            str4 = Array(2).fill('\xa0').join('');
        } else {
            str4 = char;
        }
        str3 += str4;
    }
    
    str3 += '<br>';  
    
}
document.write(str3);




document.write('<br>');
let str5 = '';
let str6 = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i <= 8 - j) {
            str6 = Array(1).fill('\xa0').join('');
        } else {
            str6 = char;
        }
        str5 += str6;
    }
    
    str5 += '<br>';  
    
}
document.write(str5);
// 0 1





// for (let j = b; j > -10; j--) {
//     if (j === -10 - b) {
//         str4 = char;
//     } else {
//         str4 = '\xa0';
//     } ;
//     str3 += str4;
// }




// b - b
// **********
// **********
// **********
// **********
// **********
// Array(1).fill('\xa0').join('')

// *
// **
// ***
// ****
// *****


//     *
//    **
//   ***
//  ****
// *****


//    *     
//   ***
//  *****
// *******
