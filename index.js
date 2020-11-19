//Create a function in the array prototype, so that it can be accessible from any array you define which saves you having to pass it as a parameter to a standalone function.
Array.prototype.groupArrayByN = function(n) {
  //Check if 'n' is a valid integer and is greater than 0.
  if (Number.isInteger(n) && n > 0) {
    let arrayGroups = [];
    while (this.length > 0) {
      //Since we are using splice, which mutates our original array, we should only push items if it has elements left.
      arrayGroups.push(this.splice(0, n)); //Take 'n' amount items from index 0 and push them to our group array.
    }
    return arrayGroups;
  }
  return this; //Return original array if 'n' was 0 or less, or was not a valid integer.
};

console.log("A:", [1, 2, 3, 4, 5, 6].groupArrayByN(3));
console.log("B:", [1, 2, 3, 4, 5, 6, 7].groupArrayByN(3));
console.log("C:", [1, 2, 3, 4, 5, 6, 7, 8].groupArrayByN(3));
console.log("D:", [1, 2, 3, 4, 5, 6].groupArrayByN(-1));
console.log("E:", [].groupArrayByN(3));
