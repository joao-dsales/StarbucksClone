const section = document.querySelector('.slider')
const images = {
    first: 'url(./css/images/slide/banner1.jpg)',
    second: 'url(./css/images/slide/banner2.jpg)',
    third: 'url(./css/images/slide/banner3.jpg)',
    fourth: 'url(./css/images/slide/banner4.jpg)'
}

let bola1 = document.querySelector('#um');
let bola2 = document.querySelector('#dois');
let bola3 = document.querySelector('#tres');
let bola4 = document.querySelector('#quatro');

const slide = [images.first, images.second, images.third, images.fourth];
const bolinhas = [bola1, bola2, bola3, bola4];
let i = 0;
function automatico(){
    setInterval("next()", 3000)
}

function next(){

    if(i >= 4){
        bolinhas[3].style.backgroundColor = 'black';
        i = 0;
    } else{
        section.style.backgroundImage = slide[i];
        bolinhas[i].style.backgroundColor = 'gray';
        i++
        let j = i - 2;
        bolinhas[j].style.backgroundColor = 'black';
    }
}


function previous(){
    i -= 1;
    section.style.backgroundImage = slide[i];
    bolinhas[i].style.backgroundColor = 'gray';
}
