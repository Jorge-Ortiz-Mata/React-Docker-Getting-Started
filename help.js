// =============== Spread Operator ================


// We defined an object or an array and we can add more elements to it.
const numbers = [1,2,3]
const newNumbers = [...numbers, 5, 6]
console.log(newNumbers)

// R = [1, 2, 3, 5, 6]


// We could defined a function with the spread operator. It takes as many elements as we want and returns a new array.
function sortNumbers(...args) {
  return args.sort();
}

const res = sortNumbers(4,3,4,6,2,4,1)
console.log(res)

// R =[1, 2, 3, 4, 4, 4, 6]
