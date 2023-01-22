let pacman = document.querySelector('.pacman');
let box = document.querySelector('.box');

window.addEventListener('keydown', function(e){
    if(e.keyCode==39){
        if(pacman.offsetLeft<box.offsetWidth-pacman.offsetWidth){
            pacman.style.left = pacman.offsetLeft+5+"px";
        }
        else{
            pacman.style.left = (box.offsetWidth-pacman.offsetWidth)+"px";
        }
    }
    


    if(e.keyCode==37){
        if(pacman.offsetLeft-5>0){
            pacman.style.left = pacman.offsetLeft-5+"px";
        }
        else{
            pacman.style.left = 0+"px";
        }
    }

    if(e.keyCode==38){
        if(pacman.offsetTop-5>0){
            pacman.style.top = pacman.offsetTop-5+"px";
        }
        else{
            pacman.style.top = 0+"px";
        }
    }

    if(e.keyCode==40){
        if(pacman.offsetTop+5<box.offsetHeight-pacman.offsetHeight){
            pacman.style.top = pacman.offsetTop+5+"px";
        }
        else{
            pacman.style.top = (box.offsetHeight-pacman.offsetHeight)+"px";
        }
    }
})