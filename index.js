const Animal = function(options) {
    this.name = options.name
    this.color = options.color
}

//this.voice = function() {// method-function fur animal, untem mahen anders
//    console.log('Base voice from', this.name)
//}

Animal.prototype.voice = function() {
    console.log('Base voice from', this.name)
}