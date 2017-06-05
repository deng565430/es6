// 字符串的扩展

// {} 包裹
{
	console.log('a',`\u0061`);
	console.log('s',`\u20BB7`); // 0xFFFF

	console.log('s',`\u{20BB7}`);

}


{
	let s = '𠮷';

	console.log('length',s.length);
	console.log('0',s.charAt(0)); //取第一个字符
	console.log('1',s.charAt(1)); // 取第二个字符
	console.log('at0',s.charCodeAt(0)); //取第一个字符的 编码
	console.log('at1',s.charCodeAt(1)); //取第二个字符的 编码

	let s1 = '𠮷a';
	console.log('length',s1.length);
	console.log('code0',s1.codePointAt(0)); //取4个字节 完整的字节
	console.log('code0',s1.codePointAt(0).toString(16));
	console.log('code1',s1.codePointAt(1));//取字符的后两个字节
	console.log('code2',s1.codePointAt(2));

} 
 // 处理unicode 字符
{
	console.log(String.fromCharCode('0x20bb7'));
	console.log(String.fromCodePoint('0x20bb7'));
}

//字符串遍历

{
	let str = `\u{20bb7}abc`;
	for(let i =0; i<str.length; i++) {
		console.log('es5', str[i])
	}
	for (let code of str) {
		console.log('es6', code)
	}
}

// 判断字符串是否包含某些字符
{
	let str = 'string'; 
	console.log('includes', str.includes('t'));  // 包含 **
	console.log('start', str.startsWith('str'));  //以 ** 开始
	console.log('end', str.endsWith('ng'));  // 以** 结束
}

// 重复多次 repeat  字符串复制
{
	let str = 'abc';
	console.log(str.repeat(2));
}

//模板字符串

{
	let name = 'list';
	let info = 'hello world';
	let m = `i am ${name}, ${info}`;
	console.log(m);
}


//处理日期格式 补白
{
	console.log('1'.padStart(2,'0')); //补白 第一个参数 ： 长度 ， 第二个参数： 长度不够补的 向前补白
	console.log('1'.padEnd(2,'0')); //补白 第一个参数 ： 长度 ， 第二个参数： 长度不够补的 向后补白
}

//标签模板
{
	let user = {
		name: 'List',
		info: 'Hello World'
	};
	console.log(abc`i am ${user.name}, ${user.info}`);
	function abc(s,v1,v2) {
		console.log(s);
		return s + v1 + v2;
	}

}

{
	console.log(String.raw`Hi\n${1+2}`); // 对 \ 做转义
	console.log(`Hi\n${1+2}`);
}