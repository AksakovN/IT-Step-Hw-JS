function createElem(newElement, form, box, KEY_DATA, count) {
    const dataJSON = {
        color: form.elements[0].value,
        type: form.elements[1].value,
        code: form.elements[2].value,
    }; 
    
    const colorsData = JSON.parse(localStorage.getItem(KEY_DATA)) || [];
    
    if (findColor(dataJSON, KEY_DATA)) {
        colorsData.push(dataJSON);
        localStorage.setItem(KEY_DATA, JSON.stringify(colorsData));
        newElement.innerHTML = `
        <div class="color_box_inner">
           <h3>${form.elements[0].value}</h3>
           <h4>${form.elements[1].value}</h4>
           <h2>${form.elements[2].value}</h2>
        </div>`;
        box.append(newElement);
        count++;   
    } else {
        return
    }
}
function findColor(dataJSON, KEY_DATA) {
    const colorsData = JSON.parse(localStorage.getItem(KEY_DATA));
    if (!colorsData) {
        return true;
    } 
    return !(!!colorsData?.find(_dataJSON => {
        return (_dataJSON.color === dataJSON.color && _dataJSON.code === dataJSON.code);
    }));
}

function rebuilt(colorsData, i, count, box) {
    count++;  
    const newElement = document.createElement('div');
    newElement.classList.add('color_box');
    newElement.classList.add(`color_box:nth-child(${count})`);
    switch (colorsData[i].type) {
        case 'RGB':
            newElement.style.backgroundColor = `rgb(${colorsData[i].code})`;
            break;
        case 'RGBA':
            newElement.style.backgroundColor = `rgba(${colorsData[i].code})`;
            break;
        case 'HEX':
            newElement.style.backgroundColor = `${colorsData[i].code}`;
            break;    
    }
    newElement.innerHTML = `
    <div class="color_box_inner">
        <h3>${colorsData[i].color}</h3>
        <h4>${colorsData[i].type}</h4>
        <h2>${colorsData[i].code}</h2>
    </div>`;
    box.append(newElement);
}
