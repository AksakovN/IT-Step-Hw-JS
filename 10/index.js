document.addEventListener('DOMContentLoaded', () => {
    //ex2
    const images = ['url(../image/1.jpeg)', 'url(../image/2.jpeg)', 'url(../image/3.jpeg)', 'url(../image/4.jpeg)', 'url(../image/5.jpeg)'];
    const carousel = document.querySelector('.carousel');
    let count = 0;
    carousel.addEventListener('click', event => {
        if (event.target.classList.contains('rightA')) {
            carousel.children[1].style.backgroundImage = `${images[count + 1]}`;
            carousel.children[0].style.filter = 'contrast(100%)';
            count++;
            if (images.length == count + 1) {
                carousel.children[1].style.backgroundImage = `${images[count]}`;
                carousel.children[2].style.filter = 'contrast(10%)';
            }
            if (count == images.length) {
                count = images.length - 1;
            }
        }
        if (event.target.classList.contains('leftA')) {
            carousel.children[1].style.backgroundImage = `${images[count - 1]}`;
            carousel.children[2].style.filter = 'contrast(100%)';
            count--;
            if (count == 0) {
                carousel.children[1].style.backgroundImage = `${images[count]}`;
                carousel.children[0].style.filter = 'contrast(10%)';
            }
            if (count < 0) {
                count = 0;
            }
        }
    });

    //ex3

    const accItem = document.querySelectorAll('.accordionItem');
    const accHD = document.querySelectorAll('.accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        const itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }

    //ex7

    const bookList = document.querySelectorAll('li');
    let check = '';
    document.addEventListener('keydown', event => {
        if (event.key == 'Control') {
            check = true;
        } else {
            check = false;
        }           
    })    
    for (let i = 0; i < bookList.length; i++) {       
        bookList[i].addEventListener('click', toggleList); 
        bookList[i].addEventListener('mouseout', function () {
            check = false;
        })   
    }
    function toggleList() {  
        if (check) {
            this.classList.toggle('book');  
        } else {
            for (let i = 0; i < bookList.length; i++) {
                bookList[i].className = 'bookList';           
            }       
            this.classList.toggle('book');  
        }            
    }

    //ex8
    const inputDate = document.querySelectorAll('.date');
    const buttonDate = document.querySelector('.getDate');
    buttonDate.addEventListener('click', function () {
        createCalendar(calendar, inputDate[0].value, inputDate[1].value);
    })
    function createCalendar(elem, year, month) {
        let mon = month - 1;
        let d = new Date(year, mon);
        let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
        for (let i = 0; i < getDay(d); i++) {
          table += '<td></td>';
        }
        while (d.getMonth() == mon) {
          table += '<td>' + d.getDate() + '</td>'; 
          if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
          }
          d.setDate(d.getDate() + 1);
        }
        if (getDay(d) != 0) {
          for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
          }
        }
        table += '</tr></table>';
        elem.innerHTML = table;
      }
      function getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
      } 
    //   createCalendar(calendar, 2022, 1);
    
    
        
      

    
























})

