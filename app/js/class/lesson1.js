// 解构赋值

// 变量 交换

{
	let a =1;
	let b =2;
	[a,b] = [b,a];
	console.log(a,b);
}
// 适用场景 
{
	function f() {
		return [1, 2]
	}
	let a,b;
	[a,b] = f();
	console.log(a,b)
}

// 返回多个值 选择性接收变量

{
	function f() {
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b] = f();
	console.log(a,b);
}

// 展开数组

{
	function f() {
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,...b] = f();
	console.log(a,b);
}


//对象解构赋值

{
	let o = {p:42,q:true};
	let {p,q} = o;
	console.log(p, q);
}


// 默认值

{
	let {a=10,b=5} ={a:3}
	console.log(a,b)
}

// 嵌套对象和数组的赋值

{
	let metaData = {
		title: 'abc',
		test:[{
			title:'test',
			desc: 'description'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]} = metaData;
	console.log(esTitle, cnTitle)
}