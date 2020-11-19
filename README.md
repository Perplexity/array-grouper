# array-grouper
Small function to split an array up into groups of n size.

# How to run

The easiest way to run this code is to execute it via node:
`node index.js`

Which when given the following input:
```JavaScript
console.log("A:", [1, 2, 3, 4, 5, 6].groupArrayByN(3));
console.log("B:", [1, 2, 3, 4, 5, 6, 7].groupArrayByN(3));
console.log("C:", [1, 2, 3, 4, 5, 6, 7, 8].groupArrayByN(3));
console.log("D:", [1, 2, 3, 4, 5, 6].groupArrayByN(-1));
console.log("E:", [].groupArrayByN(3));
```

will return the following output:

```JavaScript
A: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
B: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]   
C: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
D: [ 1, 2, 3, 4, 5, 6 ]
E: []
```
