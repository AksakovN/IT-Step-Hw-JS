document.addEventListener('DOMContentLoaded', function() {
    //ex1
    const display = document.querySelector('.display');
    const send = document.querySelector('.sendMessage');
    const name = document.forms[0].elements[0];
    const message = document.forms[0].elements[1];
    let count = 0;
    name.addEventListener('click', () => {
        name.style.boxShadow = 'none';
    })
    message.addEventListener('click', () => {
        message.style.boxShadow = 'none';
    })
    send.addEventListener('click', () =>{
        if (!name.value || !message.value) {
            if (!name.value) {
                name.style.boxShadow = '0 0 3px 2px red';
            }
            if (!message.value) {
                message.style.boxShadow = '0 0 3px 2px red'
            }
            return
        }
        count++;
        handlerMessage(display);
        display.children[count - 1].innerHTML = `<div class="messageBody messageName"><h2 style="margin-left:10px">${name.value}</h2>
        <h2 style="font-size:12px;font-weight:300">${new Date()}</h2></div><hr><h2 class="messageBody" style="font-weight:300">${message.value}</h2>`;
        message.value = '';
    });



    //ex4



    const card = document.querySelectorAll('.cardButton');
    const cart = document.forms[1];
    const cartMain = document.querySelector('.cart');
    const closeBtn = document.querySelectorAll('.closeBtn');
    const result = document.querySelector('.result');
    const curPrice = document.querySelectorAll('.curPrice');
    const totalPrice = document.querySelector('.totalPrice');
    let price = '';
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', () =>{
            if (i === 0) {
                cart.elements[0].value = 'Learning JavaScript: JavaScript Essentials for Modern Application Development';
                price = curPrice[i].innerText;
                totalPrice.children[0].innerHTML = price + ' $'; 
            } else if (i === 1) {
                cart.elements[0].value = `You Don't Know JS: Scope & Closures`;
                price = curPrice[i].innerText;
                totalPrice.children[0].innerHTML = price + ' $'; 
            } else {
                cart.elements[0].value = 'JavaScript and JQuerry: Interactive Front-End Web Development';
                price = curPrice[i].innerText;
                totalPrice.children[0].innerHTML = price + ' $'; 
            }
            cartMain.style.display = 'block';
            result.style.display = 'none';
        })
    } 
    
    cart.elements[1].oninput = function (event) {
        if (event.data === '-' || event.data === '+') {
            let change = Array.from(cart.elements[1].value).slice(0, -1);
            cart.elements[1].value = change.join('');
        }
        totalPrice.children[0].innerHTML = (cart.elements[1].value * price) + ' $';
    }
    for (let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].addEventListener('click', () => {
            cartMain.style.display = 'none';
            result.style.display = 'none';
        })
    } 
    cart.elements[6].addEventListener('click', () => {
        if (!cart.elements[2].value || !cart.elements[3].value || !cart.elements[4].value) {
            return
        };
        cartMain.style.display = 'none';
        result.style.display = 'block';
        result.children[2].innerHTML = `<h3> ${cart.elements[2].value}, thanks for the order! <br><br>
         Book "${cart.elements[0].value}" in quantity of ${cart.elements[1].value}, with total price of  
         "${totalPrice.children[0].innerText}" will be delivered on ${cart.elements[4].value} 
         to ${cart.elements[3].value}.`;
    })
});
function handlerMessage(display) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    display.append(newMessage);
}