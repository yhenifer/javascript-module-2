// Write your code here
const imagenesPets = ["https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759__480.jpg",
"https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649__480.jpg",
"https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723__480.jpg",
"https://cdn.pixabay.com/photo/2017/04/06/14/16/australian-shepherd-2208371__480.jpg=",
"https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462__480.jpg",
"https://cdn.pixabay.com/photo/2018/03/26/02/05/cat-3261420__480.jpg"]

//QuerySelector
const autoBackBtn = document.querySelector('#autoBackBtn')
const anteriorBtn = document.querySelector('#anteriorBtn')
const stopBtn = document.querySelector('#stopBtn')
const siguienteBtn = document.querySelector('#siguienteBtn')
const autoNextBtn = document.querySelector('#autoNextBtn')
const imagenesEl = document.querySelector('#imgPets')
let index = 0
let bucleAdelante 
let bucleAtras

imagenesEl.src= imagenesPets[index]

//AddEventListener
siguienteBtn.addEventListener('click',() => siguiente())
anteriorBtn.addEventListener('click',() => anterior())
autoNextBtn.addEventListener('click',() => autoNext())
autoBackBtn.addEventListener('click',() => autoBack())
stopBtn.addEventListener('click',() => Stop())

//Funciones
function siguiente() {
    if (index == imagenesPets.length -1) {index = -1 ;
    }
    index++;
    imagenesEl.src = imagenesPets [index];
    console.log(index, imagenesPets[index]);
};

function autoNext(){
    clearInterval(bucleAtras)
     bucleAdelante = setInterval("siguiente()",1000);
};

function autoBack(){
    clearInterval(bucleAdelante)
     bucleAtras = setInterval("anterior()",1000);
};

function Stop(){
    if (bucleAdelante != undefined) {
        clearInterval(bucleAdelante)
    }
    if (bucleAtras != undefined) {
        clearInterval(bucleAtras)
    }
};

function anterior (){
    if(index < 1){
        index = imagenesPets.length 
    }
    index --
    imagenesEl.src = imagenesPets[index]
    console.log(index, imagenesPets[index]);
};