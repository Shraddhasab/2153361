const Calculator = require('../src/cal');

let calculator;
beforeEach(function(){
  console.log('creating calculator object');
     calculator=new Calculator();

    
});

describe("Calculator test suite",function(){

    it("add function test",function(){
 
        expect(calculator.add(3,4)).toEqual(7);


    });
    it("sub function test",function(){
 
        expect(calculator.sub(11,6)).toEqual(5);


    });


});
