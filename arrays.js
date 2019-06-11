let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, item){
  let newA = arr
  newA.unshift(item)
  return newA
}

function destructivelyAddElementToBeginningOfArray(arr, item){
  arr.unshift(item)
  return arr
}