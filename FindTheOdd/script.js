// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


function findOdd(A) { 
  console.log('*****************');
  console.log(A);
  for (var i = 0; i < A.length; i++) { 
    var count = 0; 
    for (var j = 0; j < A.length; j++) { 
      if (A[i] == A[j]) {
        count++; 
      }
    } 
      if (count % 2 !== 0) {
        console.log(A[i]);
        return A[i];
      }
  } 
  return false; 
} 

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]);
findOdd([10]);
findOdd([1,1,1,1,1,1,10,1,1,1,1]);
findOdd([5,4,3,2,1,5,4,3,2,10,10]);


