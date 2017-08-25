function multiplyArray(array = [3, 4], num = 2) {
  let newArray = array.map((value) => {
      value * num
  })
  return newArray
}

var product = (a = 0, b = 0) => {
  return a * b
}

var createObj = (obj = {}) => {
  obj.product = (a = 0, b = 0) => {
    return product(a, b)
  }

  return obj
}

let output = multiplyArray();
console.log(output)
