document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms[0];
    const box = document.querySelector('.color');
    const colorError = document.querySelector('.colorError');
    const codeError = document.querySelector('.codeError');
    const KEY_DATA = 'Colors';
    let count = 3;

    form.elements[0].addEventListener('click', () => {
        colorError.style.display = 'none';
    })
    form.elements[2].addEventListener('click', () => {
        colorError.style.display = 'none';
        codeError.style.display = 'none';
    });

    const colorsData = JSON.parse(localStorage.getItem(KEY_DATA))
    
    if (!!colorsData) {
        for (let i = 0; i < colorsData.length; i++) {
            rebuilt(colorsData, i, count, box);   
        }
    }
    
    form.elements[3].addEventListener('click', () => {
        if (form.elements[0].value == '' || form.elements[2].value == '') {
            return
        }
        if (nameCheck(form.elements[0].value)) {
            const newElement = document.createElement('div');
            newElement.classList.add('color_box');
            newElement.classList.add(`color_box:nth-child(${count})`);

            switch (form.elements[1].value) {
                case 'RGB':
                    if (rgbCheck(form.elements[2].value)) {
                        newElement.style.backgroundColor = `rgb(${form.elements[2].value})`;
                        createElem(newElement, form, box, KEY_DATA, count);
                    } else {
                        codeDisplay(codeError);
                        codeError.innerText = 'RGB code must match the pattern [0-255], [0-255], [0-255]';
                        return
                    }
                    break;
                case 'RGBA':
                    if (rgbaCheck(form.elements[2].value)) {
                        newElement.style.backgroundColor = `rgba(${form.elements[2].value})`;
                        createElem(newElement, form, box, KEY_DATA, count)
                    } else {
                        codeDisplay(codeError);
                        codeError.innerText = 'RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]';
                        return
                    }
                    break;
                case 'HEX':
                    if (hexCheck(form.elements[2].value)) {
                        newElement.style.backgroundColor = `${form.elements[2].value}`;
                        createElem(newElement, form, box, KEY_DATA, count)
                    } else {
                        codeDisplay(codeError);
                        codeError.innerText = 'HEX code must match the pattern #([0-9]/[A-Z])*6';
                        return
                    }
                    break;
            }
        } else {
            colorError.style.display = 'block';
            colorError.style.color = 'brown'
            colorError.innerText = 'Color can only contain letters'
            return
        }
    })
})

function codeDisplay(codeError) {
    codeError.style.display = 'block';
    codeError.style.color = 'brown'
}
