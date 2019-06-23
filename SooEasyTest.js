/*  Module: SooEasyTest.
	
	desc: Help you test your functions;
	author: 
		Trishkin Sergey
		grdvsng@gmail.com
	
*/

function SooEasyTest()
{
	var self = this;


	this.__init__ = function ()
	{
		self.results   = {};
		self.node      = function () {
			return {Test: []};
		}
	}

	this.run = function (func, params, needThrow, expectedResult)
	{
		/*	Class SooEasyTest method run;
			
			desc: Run function and add result on results array;
			params:	
				func           - function will testing;
				params         - array with params for function;
				needThrow      - boolean, need call throw if catch error;
				expectedResult - variant of result, than function can return.

		*/

		var nodeName = func.name,
			node     = (self.results[nodeName] !== undefined) ? self.results[nodeName]:self.node(),
			test     = {
				params: "[" + params.toString() + "]"
			},
			isError   = false;

		try {
			if (typeof(params) === 'object') {test.result = func(...params);}
			else                             {test.result = func(params);}

			if ((expectedResult !== undefined) && (expectedResult !== test.result)) 
			{
				throw new Error('Expected Result = ' + expectedResult + ', but true result = ' + test.result);
			}
		}
		catch (e) {
			test.result = "{\n\t\tErrorType: " + e.name + ",\n\t\tMessage: " + e.message + "\n\t}";
			
			if ((needThrow !== undefined) && (needThrow)) {throw new Error(test.result);}
		}

		node.Test.push(test);
		self.results[nodeName] = node;
	}

	this.runManyTest = function (bookOfFuncsAndParams)
	{
		/*  Class SooEasyTest method runManyTest;
			
			desc: call SooEasyTest.run(func, params);
			param:
				bookOfFuncsAndParams - Array where format like:
					[{
						func: function,
						params:          [params for function] || array[[params], [params], ...],
						expectedResult:  null || variant || array[[variant], [variant], ...],
						needThrow:       null || bolean || array[[bolean], [bolean], ...]
					}]

		*/

		var needThrow = (needThrow !== undefined) ? needThrow:self.needThrow;

		for (let i in bookOfFuncsAndParams)
		{
			var test = bookOfFuncsAndParams[i];

			if (typeof(test.params) === 'object') {
				for (let n in test.params)
				{
					var _params = test.params[n],
						_expectedResult = (typeof(test.expectedResult) === 'object' &&  test.expectedResult.length > 1) ? test.expectedResult[n]:test.expectedResult,
						_needThrow = (typeof(test.needThrow) === 'object') ? test.needThrow[n]:test.needThrow;
					
					self.run(test.func, _params, _needThrow, _expectedResult);
				}
			} else {
				self.run(test.func, test.params, needThrow);
			}
		}
	}

	this._formatTestResult = function (TestName)
	{
		/*
			Class SooEasyTest method printResults;

			desc: format all result of function test;
			param:
				TestName - name of function were tested.

		*/

		var node     = self.results[TestName],
			response = '\nFunction: ' + TestName;

		for (n in node.Test)
		{
			let test = node.Test[n],
				str  = '\n\tTest: ' + n + '\n\tParams: ' + test.params + '\n\tResult: ' + test.result + '\n',
				line = '-'.repeat(40); 
			
			response += str + line;
		}

		return response;
	}

	this.printResults = function ()
	{
	    /*  Class SooEasyTest method printResults;
			
			desc: print in cionsole results of test;

		*/

		for (key in self.results)
		{
			console.log(self._formatTestResult(key));
		}
	}

	this.__init__();
}

function foo(arg)
{
	return arg + 1; 
}

function boo(arg1, arg2)
{
	return arg1 + arg2
}