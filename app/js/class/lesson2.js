// 正则扩展
{
	let regex = new RegExp('xyz', 'i');
	let regex2 = new RegExp(/xyz/i);
	console.log(regex.test('xyz123'), regex2.test('xyz123'));

	let regex3 = new RegExp(/xyz/ig, 'i');
	console.log(regex3.flags); //覆盖前面修饰符 flags 获取修饰符
}

// y 修饰符  g 修饰符区别

{
	let s = 'bbb_bb_b';
	let a1 = /b+/g;
	let a2 = /b+/y;
	// 都是全局匹配  g 从上次匹配位置继续寻找，直到找到匹配位置开始
	// y 修饰符 匹配第一个必须紧跟着下一个字符才成功
	console.log('one',a1.exec(s),a2.exec(s));
	console.log('two',a1.exec(s),a2.exec(s));

	// 判断一个对象是不是开启带 y 修饰符
	console.log(a1.sticky,a2.sticky);
}

// u修饰符 1、有大于两个字节长度的字符  .修饰符 换行 段不能识别 还有一个s修饰符

{
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'));

	console.log(`\u{20BB7}`);

	let s = '𠮷';

	console.log('u-1 ',/^.$/.test(s));
	console.log('u-2 ',/^.$/u.test(s));

	console.log('test', /𠮷{2}/.test('𠮷𠮷'));
	console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));

}

