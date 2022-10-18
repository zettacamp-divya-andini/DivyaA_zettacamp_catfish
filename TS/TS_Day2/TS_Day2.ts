// function to combine array values to string
function combine(arr: (number | string)[]): string {
    return arr.join(" ");
}

// array that has string and number values
const array = [1, 'data', '3', 'result'];
const array2 = ['bejo', 'has', 4, 'sport', 'car']

// run the combine function
console.log(combine(array));
console.log(combine(array2))

type arrOfNumber = number[];
type arrOfString = string[];
function combine2(arr: arrOfString | arrOfNumber) {
      return arr.join(" ");
}


console.log(combine2(['data','result']))
