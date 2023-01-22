arr = [10,24,35,76,12,90,100]

console.log(`Sum of evens: ${sumFinder(arr, function(num){return num%2==0})}`)


function sumFinder(array, check){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        if(check(array[i])){
            sum+=array[i];
        }
    }
    return sum;
}


class Car{
    constructor(name, price, color){
        this.Name = name;
        this.Price = price;
        this.Color = color;
        this.Drivers = [];
        this.AddDriver = function(driver){
            this.Drivers[this.Drivers.length]=driver; // uzunluğuncu element
            // yəni add edəcək
        }
    }
}

let car1 = new Car('Mercedes', 5600, 'black')
console.log(car1)





class Human{
    constructor(name, surname){
        this.Name = name;
        this.Surname = surname;
    }
}

class Teacher extends Human{
    constructor(profession, name, surname){
        super(name, surname);
        this.Profession = profession;
    }
}

let paragraph = document.getElementById('paragraph');
console.log(paragraph)

let button = document.querySelector('button');
console.log(button);

let num = 6;

// button.addEventListener('click', function(){
//     paragraph.style.fontSize = num*4 + "px";
//     num++;
// })
    
function makeBigger(){
    paragraph.style.fontSize = num*4 + "px";
    num++;
}



var anchor = document.getElementsByTagName('a');

anchor[1].href = "https://google.com";

console.log(anchor[1].getAttribute('href'));

anchor[0].setAttribute('href', 'https://code.edu.az');

console.log(Date(Date.now()));

console.log(anchor[1].previousElementSibling);

console.log(126312371238123);

console.log(anchor[1].previousElementSibling.getAttribute('href'));
