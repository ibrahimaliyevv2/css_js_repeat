var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');

// console.log(inp)
// console.log(btn)

btn.onclick = function(){
    // console.log(inp.value);
    var li = document.createElement('li')
    li.innerText = inp.value;

    var editBtn = document.createElement('button');
    editBtn.innerText = 'E';
    li.appendChild(editBtn);

    editBtn.onclick = function(){
        var editInput = document.createElement('input');
        editBtn.parentElement.appendChild(editInput);
        var saveBtn = document.createElement('button');
        saveBtn.innerText = 'save';
        editBtn.parentElement.appendChild(saveBtn);


        editInput.value = editBtn.parentElement.innerText.substring(0, editBtn.parentElement.innerText.length - 6);
        saveBtn.onclick = function(){
            currentLi = editBtn.parentElement;
            currentLi.innerText = editInput.value;
            currentLi.appendChild(editBtn);
            currentLi.appendChild(deleteBtn);
            
            editBtn.parentElement.remove(editInput);
            editBtn.parentElement.remove(saveBtn);
        }
    }

    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.style.color = 'red';
    li.appendChild(deleteBtn);

    deleteBtn.onclick = function(){
        deleteBtn.parentElement.remove();
    }

    ul.appendChild(li);

    inp.value = '';
}


var hshs = document.querySelector('#hshs');

console.log(hshs.parentNode);