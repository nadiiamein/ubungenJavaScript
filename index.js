 //ES5

// const Animal = function(options) {
//     this.name = options.name
//     this.color = options.color
//     this.voice = function() {
//         console.log('Base voice from', this.name)
//     }
// }

 //this.voice = function() {// method-function fur animal, untem mahen anders
 //    console.log('Base voice from', this.name)
 //}

// Animal.prototype.voice = function() {
//     console.log('Base voice from', this.name)
// }
// console.log(Animal.prototype);

// const dog = new Animal({name: 'Tusik', color: '#fff'});
// dog.voice()

 //ubungen  -- create class Cat prototype von Animal

// const Cat = function(options) {
// Animal.apply(this, arguments)
// this.hasTail = options.hasTail
// this.type = 'cat'
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat

// Animal.prototype.voice = function() {
//     console.log('This sound goes from: ', this.name);
// }

// Cat .prototype.voice = function() {
//     Animal.prototype.voice.apply(this, arguments)
//     console.log(this .name + 'say myay')
// }

// const cat = new Cat({name: 'Bochman', color: '#000', hasTail: true});
// console.log(cat);
// console.log(cat.voice);

//ES6

class Animal{
    constructor(options) {
        this.name = options.name,
        this.color = options.color
    }
    voice() {
        console.log('Base voice from', this.name);
    }
    
}

const dog = new Animal ({name: 'Barbos', color: 'white'})

class Cat extends Animal {
    constructor(options) {
        super(options)

        this.hasTail = options.hasTail
        this.type = 'cat'
    }
    voice() {
        super.voice
        console.log(this.name + 'says myay');
    }
}

const cat = new Cat ({
    name: 'Murszik', color: '#000', hasTail: true
})

console.log(cat);
console.log(cat.voice());

//Exsamles
Object.prototype.print = function() {
    console.log(`I am object`, this);
}
cat.print();

//add neue mothod fur Array
Array.prototype.mapAndLog = function() {
    console.log('Array to map', this)
    return this.map.apply(this, arguments)
}

console.log([1,2,3,3].mapAndLog(x => x**2));

//arbeit mit string

String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`;
};
console.log('eminem'.toTag('strong'));
console.log('eminem'.toTag('em'));

//number
Number.prototype.toBigint = function() {
    return BigInt(this)
}

const number = 42;
console.log(number.toBigint());