// Symbol

 {
 	//声明
 	let a1 = Symbol();
 	let a2 = Symbol();
 	console.log(a1 === a2);

 	let a3 = Symbol.for('a3');
 	let a4 = Symbol.for('a3');
 	console.log(a3 === a4)
 }

 // 作用 getOwnPropertySymbols 获取Symbol值
 {
 	let a1 = Symbol.for('abc');
 	let obj = {
 		[a1]: '123',
 		'abc': 345,
 		'c':456
 	};
 	console.log('obj',obj);

 	for(let [key,val] of Object.entries(obj)) {
 		console.log('let of', key, val)
 	}

 	Object.getOwnPropertySymbols(obj).forEach( (item, i) => {
 		console.log(obj[item]);
 	});

 	Reflect.ownKeys(obj).forEach( (item) => {
 		console.log('ownKeys', item, obj[item])
 	});
 }