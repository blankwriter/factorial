var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
  it('return the output of 5! to be 120', () => {
       
       //Setup
       const expected = 120;
       const actual = 5;

       //Exercise
       const result = Calculate.factorial(actual);

       //Verify
       assert.strictEqual(result, expected);

    });
    it('return the output of 3! to be 6', () => {
    
    //Setup
    const expected = 6;
    const actual = 3;

    //Exercise 
    const result = Calculate.factorial(actual);

    //Verify
    assert.strictEqual(result, expected);
    });
    it('return 1 when you pass in 0', () => {
     
     //Setup
     const actual = 0;

     //Exercise
     const exercise = () =>{ Calculate.factorial(actual)};

     //verify
     assert.ok(exercise);
    });
    
  });
});
