const palindrom = str => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

console.log(palindrom('labbal'));

const input = prompt('Wie alt bist du?');
console.log(input);
console.log(typeof input);
const age = parseInt(input);
console.log(typeof age);
alert(age);


// objekt
let car = {
    color: 'red',
maxSpeed: 250,
audio:{
    brand: 'Sony',
    speaker: 12
}
};
console.log(typeof car);
console.log(car);
console.log(typeof car.color);
console.log(car.color);
car.color = 'green';
console.log(typeof car);
console.log(car);
console.log(typeof car.audio.brand);
console.log(car.audio.brand);

console.log(car.color);
function colorReset() {
    car.color = 'red';
    console.log(car.color);
} 

let car2 = {
color: 'green',
};

function colorChange(theCar) {
    theCar.color = 'yellow';
}
 colorChange(car);
colorChange(car2);
console.log(" Car = " + car.color);
   console.log("Car2" + car2.color);

let speed = speedChange;
speed();

function speedChange() {
    console.log(car.maxSpeed);
}

let anonym =