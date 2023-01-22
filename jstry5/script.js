let selena = document.querySelector('#selena');

selena.addEventListener('change', function(){
    console.log(this.value);
})

let smallBox = document.querySelector('.small-box');
let bigBox = document.querySelector('.big-box');

smallBox.ondragstart = function(){
    console.log("start");
}

smallBox.ondragend = function(){
    console.log('end');
}

smallBox.ondrag = function(){
    console.log('dragging');
}


bigBox.ondragenter = function(){
    console.log("enter");
}

bigBox.ondragover = function(e){
    e.preventDefault();
    console.log("over");
}

bigBox.ondrop = function(){
    console.log("drop");
}

bigBox.ondragleave = function(){
    console.log("leave");
}

smallBox.addEventListener('click', function(e){
    console.log(e.target);
})