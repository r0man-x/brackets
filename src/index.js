module.exports = function check(str, bracketsConfig) {
    
  let bracketsObject = bracketsConfig.reduce(function(acc, cur) {
    acc[cur[0]] = cur[1];
    return acc;
  }, {})

  let stack = []

  for(let bracket of str) {
    let bracketCanBeClosing = Object.values(bracketsObject).indexOf(bracket) > -1

    if (bracketCanBeClosing) {
      if (stack.length !== 0 && stack[stack.length-1] === bracket) {
        stack.pop()
      } else {
        stack.push(bracketsObject[bracket])
      }
    } else {
      stack.push(bracketsObject[bracket])
    }
  }

  return stack.length === 0
  // your solution
}
