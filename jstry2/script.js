var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');

// console.log(inp)
// console.log(btn)

btn.onclick = function(){
    // console.log(inp.value);
    var li = document.createElement('li')
    li.innerText = inp.value;



    if(inp.value!=null && inp.value!='' && inp.value!=' '){
        ul.appendChild(li);
    }
    
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.style.color = 'red';
    li.appendChild(deleteBtn);

    deleteBtn.onclick = function(){
        // deleteBtn.parentElement.remove();
        li.style.textDecoration = 'line-through';
        deleteBtn.remove();
    }

    inp.value = '';
}


