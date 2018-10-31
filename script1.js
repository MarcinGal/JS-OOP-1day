const myOwnNew = (constructorFn, argsArray) => {
    const newInstance = Object.create(constructorFn.prototype)

    constructorFn.apply(newInstance, argsArray)

    return newInstance;
}


function Dog(name) {
    this.name = name
    this.sound = "Woof";
    }

const dog1 = myOwnNew(Dog, ['Puszek'])



Dog.prototype.makeSound = function(){
    console.log(this.sound)}


const dog1 = new Dog('Puszek');
const dog2 = new Dog('Klebuszek');
const dog0 = Dog();

dog1.makeSound();
