var offset = 400
$(window).on('load scroll', function(){

    if( $(window).scrollTop() > offset ){
        $('body').addClass('mostra')
    }else{
        $('body').removeClass('mostra')
    }
})

let imagens = ['img/img1.png', 'img/img2.png'];
let Index = 0;
let time = 4000;
function slideShow() {
  document.getElementById('image').src = imagens[Index];
  Index++;
  if (Index == imagens.length) {
    Index = 0;
  }
  setTimeout('slideShow()', time);
}
slideShow();

let image = ['img/c1.png', 'img/c2.png', 'img/c3.png', 'img/c4.png', 'img/c5.png', 'img/c6.png'];
let contador = 0;
let tempo = 6000;

function passar(){
  document.getElementById('comentarios').src = image[contador];
  contador++;
  if (contador == image.length){
    contador = 0;
  }
  setTimeout('passar()', tempo);
}
passar();

let chk = document.getElementById('chk');
const logop = document.getElementById('logo-p'); 


chk.addEventListener('change', function troca(){
  document.body.classList.toggle('dark')
  document.querySelector('h6').classList.toggle('darka')
  logop.src = 'img/planos logo2.png'
})

function openM() {
  document.getElementById('menuM').style.visibility = 'visible'
  document.getElementById('menuM').style.height = '290px'
  document.getElementById('men').style.visibility = 'visible'
  document.getElementById('menu').style.visibility = 'hidden'
}
function closeM() {
  document.getElementById('menuM').style.visibility = 'hidden'
  document.getElementById('menuM').style.height = '0px'
  document.getElementById('men').style.visibility = 'hidden'
  document.getElementById('menu').style.visibility = 'visible'
}

function dog(){
  document.getElementById('dogpx').style.display ='none'
  document.getElementById('dogpx2').style.display ='block'
}