var printNumbers = (...numbers) => {
    numbers.forEach((n) => {
      console.log(n)
    })
}

printNumbers(5, 6, 7, 8, 9);

var product = (...nums) => {
  return nums.reduce((product, number) => {
    return product * number
  }, 1)
}

console.log(product(5, 6, 7, 8))

function join(array1, array2) {
  return [ ...array1, ...array2 ]
}


const arr3 = [5, 6, 7, 8]
const arr4 = [9, 10, 11, 12]
console.log(join(arr3, arr4))
