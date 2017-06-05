// 数组的扩展

// Array.of  把数据变量转换成数组
{
	let arr = Array.of(3,4,7,9,11);
	console.log('arr= ', arr);

	let empty = Array.of();
	console.log('empty= ', empty);
}

// 集合 转换成真正的数组
{
	let p = document.querySelectorAll('p')
	let pArr = Array.from(p);
	pArr.forEach( (item, index) => {
		console.log(item.textContent); //textContent 获取节点文本内容
	});
	//映射
	console.log(Array.from([1,3,5], (item) => {
		return item * 2;
	}))
}

//替换

{
	console.log('fill-7', [1, 'a', undefined].fill(7));
	console.log('fill, pos', ['a', 'b', 'c'].fill(7, 1,3));  //第一个参数是替换的内容  第二个参数是起始位置
}

//遍历  有兼容性问题
{
	for(let index of ['1', 'c', 'ks'].keys()) {
		console.log('keys', index);
	}
	for(let value of ['1', 'c', 'ks'].values()) {
		console.log('values', value);
	}
	for(let [index, value] of ['1', 'c', 'ks'].entries()) {
		console.log('values', index, value);
	}
}

// 复制指定成员

{
	console.log([1,2,3,4,5].copyWithin(1,3,4)); //参数 1、开始位置 2 、读取位置， 3 、截止位置
}

// 查找
{
	console.log([1,2,3,4,5,6].find(item => { //只找出第一个满足条件的值
		return item > 3;
	}))
	console.log([1,2,3,4,5,6].findIndex(item => { //只找出第一个满足条件的下标
		return item > 3;
	}))
}

//数组是是否包含
{
	console.log('number', [1,2,NaN].includes(1));
	console.log('number', [1,2,NaN].includes(NaN));
}