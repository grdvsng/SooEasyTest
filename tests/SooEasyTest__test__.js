
function foo(arg)
{
	return arg + 1; 
}

function boo(arg1, arg2)
{
	return arg1 + arg2
}

var test    = new SooEasyTest(false),
	testing = [
		{
			func: foo,
			params: [1, 2, 3, 4, 5]
		},
		
		{
			func: foo,
			params: [1, 2, 3, 4, 5],
			expectedResult: 2
		},
		
		{
			func: foo,
			params: [1, 2, 3, 4, 5],
			expectedResult: [2, 3, 4, 7, 8]
		},

		{
			func: boo,
			params: [[1, 2], [3, 4], [5, 6]],
			expectedResult: [3, 7, 12]
		}	
	];



test.run(foo, 1);		     // Without error and 1 parametr
test.run(boo, [1, 2]);		     // Without error and many parametrs
test.run(foo, 1, false, 2);	     // Without error, parametr and expected result
test.run(boo, [1, 2], false, 3);     // Without error, parametrs and expected result
test.run(foo, 1, false, 3);	     // With error, parametr and expected result
test.run(boo, [1, 2], false, 1);     // With error, parametrs and expected result
test.runManyTest(testing)            // Use book with many test

test.printResults();
