// 函数扩展

//函数默认值 
{
	function test(x,y = 'world') {
		console.log('默认值', x, y)
	}
	test('hello');
	test('hello', 'kill');
}

//作用域

{
	let x = 'test';
	function test2(x,y = x) {
		console.log('作用域',x,y)
	}
	test2('kill');
}

//把参数转成数组

{
	function test3(...arg) {
		for(let v of arg) {
			console.log('rest', v)
		}
	}
	test3(1,2,3,4,'a');
}

// 扩展运输符

{
	console.log(...[1,2,3,4]);
}

//箭头函数
{
	let arrow = v => v * 2;
	let arrow2 = () => 5;
	console.log('arrow',arrow(3))
	console.log('arrow2',arrow2())
}

//尾调用  目的 提升性能 性能优化

{
	function tail(x) {
		console.log('tail', x);
	}

	function fx(x) {
		return tail(x);
	}

	fx(123)
}