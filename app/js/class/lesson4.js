// 数值扩展

// 二进制 八进制 表示方法  b o  无视大小写
{
	console.log(0b111110111);
	console.log(0o767);
}

// 判断有穷数 
{
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN));
	console.log('1/0',Number.isFinite('true'/0));
	console.log('1/0',Number.isFinite(1/0));
	console.log('NaN',Number.isNaN(NaN));
}

// 判断是不是整数 
{
	console.log('25',Number.isInteger(25));
	console.log('25.0',Number.isInteger(25.0));
	console.log('25.1',Number.isInteger(25.1));
	console.log('25',Number.isInteger('25'));
}

// 2的53次方 最大上限 最小下线 判断是不是有效数
{
	console.log(Number.MAX_SAFE_INTEGER);
	console.log(Number.MIN_SAFE_INTEGER);
	console.log('10',Number.isSafeInteger(10));
	console.log('a',Number.isSafeInteger('a'));
}

// 取有效数的整数部分

{
	console.log('4.1',Math.trunc(4.1));
	console.log('4.9',Math.trunc(4.9));
}

//判断一个数是正数 负数 还是0

{
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('+5',Math.sign(5));
	console.log('50',Math.sign('5'));
	console.log('a',Math.sign('a'));
}


//立方根
{
	console.log('-1',Math.cbrt(-1));
	console.log('8',Math.cbrt(8));
}