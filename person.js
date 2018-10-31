function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi, Im ${this.name}`)
}


const me = new Person('Mateusz')

const me2 = new Person('Wojtek')

// me === {name: 'Mateusz'}


me.sayHello() //in console.log - "Hi Im Mateusz!"