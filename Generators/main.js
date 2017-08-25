//for...of => itering through arrays of data
//forEach, map, reduce functions the same way

const bros= [ 'Tyler', 'Kyle', 'John', 'Yehuda', 'Coltrane', 'Ethan' ]
const numbers = [1, 2, 3, 4]

for (bro of bros) {
  console.log(bro)
}

let total = 0;
for (number of numbers) {
    total += number;
}

//Generators: (Interates though any data structure we want)
//A function that can be entered and exited multiple times
//Run some code return a value, leave and come back
//THEY WORK PERFECTLY WITH FOR-OF Loops

//Syntax

function* nums(){
  const f = 'first'
  const s = 'second'

  yield f;
  yield s;

  return [f, s]
}

const genNum = nums()
console.log('///***');


const iter = () => {
  while (genNum.next().done == false) {
    console.log(genNum.next());
  }
}
console.log(genNum.next());
console.log(genNum.next());
console.log(genNum.next());

function* shopping() {
  //stuff on the sidewalk

  //walking down the sidewalk

  //go into the store with cash
  const stuffFromStore = yield 'cash'; //yield = transition

  //walking to laundry place
  const cleanClothes = yield 'laundry'
  //walking back home
  return [stuffFromStore, cleanClothes]
}

//stuff in the store

const gen = shopping();
//returns {"done": false}
console.log(gen.next()) //leaving our house
//returns {"done": true}
//walked into the store
//walking up and down the aisles
//purchase our stuff
console.log(gen.next('groceries')) //leaving the store with groceries

console.log(gen.next('clean clothes'))

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

// const newGen = colors();
// newGen.next()
// newGen.next()
// newGen.next()
// newGen.next()
//


const myColors = []

//gets rid of the .next() method

for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors)

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  //Symbol Iterator:
  //A tool that teaches objects how to respond to the for of loop
  //Key interpolation[]
  [Symbol.iterator]: function* () {
    //this = reference to the parent
    yield this.lead,
    yield this.tester
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Tyler',
  manager: 'Todd',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    //testingTeam has an object to iterate over
    yield* this.testingTeam
  }
}

// function* TestingTeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
// }

//iter through ONLY the employees
// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
  //yield team.testingTeam.lead;
  //Generator Delegation****
  //const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
  //yield* testingTeamGenerator

  //response to Symbol.iterator
  // yield* team.testingTeam;

// }

const names = [];
for (let name of engineeringTeam) {
  names.push(name)
}

console.log(names)

//Tries|Trees: Data structures that organize data in a series of nodes

//Objective: find all the users who have posted on a given thread

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      //analyzes if child is iterable
      yield* child;
    }
  }
}

const children = [
  new Comment('great comment', []),
  new Comment('awful comment', []),
  new Comment('*sigh*', [])
];

const tree = new Comment('Nice post! :D', children);

const values = []
for (let value of tree) {
  values.push(value)
}

console.log(values);






















const start = {
  leader: 'Tyler',
  president: 'Kyle',
  head: 'Yehuda',
  command: 'Jamin'
}


const stageOne = {
  start,
  year: 2,
  departments: 10
}

function* entityCreation(entity) {
  yield entity.leader;
  yield entity.president;
  yield entity.head;
  yield entity.command;
}
