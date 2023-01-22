var list = document.querySelector('.list');
var listItems = document.querySelectorAll('.list-item');
var paragraph = document.querySelector('.paragraph');

listItems.forEach(listItem=>{
    listItem.addEventListener('click', function(){
        var active = document.querySelector('.active');
        if(active){
            active.classList.remove('active');
        }
        this.classList.add('active');

        paragraph.innerText = this.innerText + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    })
})