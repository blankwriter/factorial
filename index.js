const Calculate = {
  factorial(actualNumber) {
    
    for (let i = actualNumber - 1; i >= 1; i--) {
  actualNumber *= i; 
}
 
return actualNumber
 if(actualNumber == 0){
   return 1
 }
  }
}

module.exports = Calculate;


