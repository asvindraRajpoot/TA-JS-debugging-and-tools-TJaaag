// To add two numbers
function addTwoNumbers(numA=0,numB=0){
 
 return numA+numB;
}
//to multiply two numbers

function mulTwoNumbers(numA=0,numB=0){
 
    return numA*numB;
}
let result,expected;

// for insertion part
function expect(actual){
 
 return {
     toEqual:function(expected){
      
        if(actual!==expected){
            throw new Error(`Result is ${actual} not equal to expected ${expected}`);
         }
     }
 }
}
//to test add function
function testAdd(){
     result=addTwoNumbers(10,20);
     expected=300;
     expect(result).toEqual(expected);

}
//to test mul function
function testMul(){
    result=mulTwoNumbers(10,20);
    expected=200;
    expect(result).toEqual(expected);

}
//test function

function test(message,callback){
 
 try {
     callback();
     console.log(`✅`,message);
     
 } catch (error) {
     console.error(error);
     console.log(`❌`,message);
     
 }
}


//testAdd
test('adding 10 and 20',testAdd);

//testMul
test('multiplying  10 and 20',testMul);





