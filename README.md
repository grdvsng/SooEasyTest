# SooEasyTest
### Fast and easy test for your code.

> Author: Sergey Trishkin
>
> mail:   grdvsng@gmail.com

#### Examples:


```JavaScript 

function foo(arg)
{
	return arg + 1; 
}

function boo(arg1, arg2)
{
	return arg1 + arg2
}

// Without error and 1 parametr
test.run(foo, 1);				         
// Without error and many parametrs
test.run(boo, [1, 2]);		
// Without error, parametr and expected result
test.run(foo, 1, false, 2);			
// Without error, parametrs and expected result
test.run(boo, [1, 2], false, 3); 
// With error, parametr and expected result
test.run(foo, 1, false, 3);		
// With error, parametrs and expected result
test.run(boo, [1, 2], false, 1); 
// Use book with many test
test.runManyTest(testing)

test.printResults();
/*  Results

  Function: foo
    Test: 0
    Params: [1]
    Result: 2
  ----------------------------------------
    Test: 1
    Params: [1]
    Result: 2
  ----------------------------------------
    Test: 2
    Params: [1]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 3, but true result = 2
    }
  ----------------------------------------
    Test: 3
    Params: [1]
    Result: 2
  ----------------------------------------
    Test: 4
    Params: [2]
    Result: 3
  ----------------------------------------
    Test: 5
    Params: [3]
    Result: 4
  ----------------------------------------
    Test: 6
    Params: [4]
    Result: 5
  ----------------------------------------
    Test: 7
    Params: [5]
    Result: 6
  ----------------------------------------
    Test: 8
    Params: [1]
    Result: 2
  ----------------------------------------
    Test: 9
    Params: [2]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 2, but true result = 3
    }
  ----------------------------------------
    Test: 10
    Params: [3]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 2, but true result = 4
    }
  ----------------------------------------
    Test: 11
    Params: [4]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 2, but true result = 5
    }
  ----------------------------------------
    Test: 12
    Params: [5]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 2, but true result = 6
    }
  ----------------------------------------
    Test: 13
    Params: [1]
    Result: 2
  ----------------------------------------
    Test: 14
    Params: [2]
    Result: 3
  ----------------------------------------
    Test: 15
    Params: [3]
    Result: 4
  ----------------------------------------
    Test: 16
    Params: [4]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 7, but true result = 5
    }
  ----------------------------------------
    Test: 17
    Params: [5]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 8, but true result = 6
    }
  ---------------------------------------- SooEasyTest.js:135:12

  Function: boo
    Test: 0
    Params: [1,2]
    Result: 3
  ----------------------------------------
    Test: 1
    Params: [1,2]
    Result: 3
  ----------------------------------------
    Test: 2
    Params: [1,2]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 1, but true result = 3
    }
  ----------------------------------------
    Test: 3
    Params: [1,2]
    Result: 3
  ----------------------------------------
    Test: 4
    Params: [3,4]
    Result: 7
  ----------------------------------------
    Test: 5
    Params: [5,6]
    Result: {
      ErrorType: Error,
      Message: Expected Result = 12, but true result = 11
    }
  ----------------------------------------

*/
```
