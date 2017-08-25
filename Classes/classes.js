class Person {
  constructor({ name, age, school, occupation, workMode, hasAmbition }){
    this.name = name
    this.age = age
    this.school = school
    this.occupation = occupation
    this.workMode = workMode
    this.hasAmbition = hasAmbition;
  }

  greeting() {
    return `Hello! My name is ${this.name}!\n I'm ${this.age} and I go to ${this.school}`
  }

  work() {

    if (this.workMode && this.hasAmbition) {
      return "I'm going to build the future"
    } else if (this.workMode && !this.hasAmbition) {
      return "I have work. It sucks so much."
    } else {
      return "I'll never amount to anything in life"
    }
  }
}

class Tyler extends Person {
  constructor(options) {
    super(options);
    this.mindset = options.mindset;
  }

  greeting() {
    return `Hey! I'm ${this.name} and I go to ${this.school} at ${this.age} years of age. I'm ready to takeover the world.`
  }
}

const tyler = new Tyler(
  {
    name: 'Tyler',
    age: 18,
    school: 'LMU',
    occupation: 'N/A',
    workMode: true,
    hasAmbition: true,
    mindset: "Driven"
  }
);

console.log(tyler)
console.log(tyler.greeting())
console.log(tyler.work())

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

let Megatron = {
  name: 'Megatron'
}

const monster = new Monster({name: Megatron.name })

console.log(monster.name)

class ScaryMonster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends ScaryMonster {
  constructor(options){
    super(options)
  }

  bite(Snake) {
    Snake.health -= 10
    return Snake.health
  }
}

let viper = new Snake({health: 100, name: 'Viper'})
let tiper = new Snake({health: 100, name: 'Tiper'})

viper.bite(tiper)
console.log(tiper.health)
