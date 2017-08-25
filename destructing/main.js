var expense = {
  type: 'Business',
  amount: '45 USD'
};

//var type = expense.type

//var type = expense.amount

//const { amount } = expense;
//const { type } = expense;

const { type, amount } = expense;

//can't do const { myType, myAmount } = expense;

console.log(`Type: ${type}\nAmount: ${amount}`)

var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040,
  summary({name, extension, size}) {
    console.log(`The file ${name}.${extension} is ${size} bytes.`)
  }
}


savedFiled.summary(savedFiled)


const companies = [
  'Google',
  'Facebook',
  'Uber'
]

const [name, name2, ...rest] = companies
console.log(`${name}\n${name2}\n${rest}`)

const Uber = {
  locations: ['San Francisco', 'Los Angeles', 'New York']
}

const { locations: [ location, location2, ...rest1 ] } = Uber

console.log(`${location}\n${location2}\n${rest1}`)

//Destructing in the best practice

function signup({username, password, email, dob, city}) {
  console.log(`New User:\nUsername: ${username}\nPassword: ${password}\n${email}\n${dob}\n${city}`)
}

const User = {
  //probably would be a post requst for a form, this info get's stored into the database
  username: 'Tyler',
  password: 'tyler123',
  email: 'tyler@example.com',
  dob: '01/04/1999',
  city: 'Beverly Hills, CA'

}

signup(User)

const coordinates = [
  [33.2, 44.5],
  [-14.4, 5.5],
  [58.7, -19.3]
];

var displayCoordinates = coordinates.map(([x, y]) => {
  return { x, y };
})

console.log(displayCoordinates);

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(profile))

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(( [ subject, time, teacher ]) => {
    return {subject, time, teacher};
});

function organizeClasses(array){
    const output = array.forEach((obj) => {
      console.log(`Class:\nSubject: ${obj.subject}\nTime: ${obj.time}\nTeacher: ${obj.teacher}`)
    });
    return output
}

console.log(classesAsObject)
console.log(organizeClasses(classesAsObject))

const numbers = [1, 2, 3];

function double(array) {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i] * 2
    }
    return array
}

console.log(double(numbers))
