//task1
export function countAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum / arr.length
  }
  
  //task2
  
  export function alphaOmega(arr) {
    return [arr[0], arr[arr.length - 1]] 
  }
  
  //task3
  
  export function fill(count, element) {
    let result = []
    for (let i = 0; i < count; i++) {
      result.push(Array.isArray(element) ? [...element] : element)
    }
    return result
  }
  
  //task4
  
  export function fromPairs(arr) {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val) && val.length === 2) {
        acc[val[0]] = val[1]
      }
      return acc
    }, {})
  }
  
  //task5
  
  export function intersection(arr1, arr2) {
    const uniqueArr1 = new Set(arr1)
    const uniqueArr2 = new Set(arr2)
    return Array.from(uniqueArr1).filter(item => uniqueArr2.has(item))
  }