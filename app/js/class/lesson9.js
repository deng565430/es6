// set map 数据结构

{
	let list = new Set();
	list.add(5);
	list.add(7);

	console.log('size', list.size)
}

// size 长度

{
	let arr = [1,2,3,4,5];
	let list = new Set(arr);

	console.log('size', list.size);
}

// 目的 去重
{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);
	console.log('list',list);

	let arr = [1,2,3,1,'2'];
	let list2 = new Set(arr);
	console.log('unique',list2);
}

//操作方法
{
	let arr = ['add','delete','clear', 'has'];
	let list = new Set(arr);

	console.log('has',list.has('add'));
	console.log('delete',list.delete('add'), list);
	list.clear();
	console.log('clear',list);
}

//遍历
{
	let arr = ['add','delete','clear', 'has'];
	let list = new Set(arr);

	for(let key of list.keys()) {
		console.log('key',key)
	}
	for(let value of list.values()) {
		console.log('value',value)
	}
	for(let value of list) {
		console.log('value',value)
	}

	for(let [key,value] of list.entries()) {
		console.log('entries',key,value)
	}
	list.forEach( item => console.log(item));
}

// weakset set 区别  1、支持类型不一样 weakset只支持对象， 弱引用 ，只引用地址 2、部分属性size和方法没有
{
	let weakList = new WeakSet();
	let arg = {};

	weakList.add(arg);

	// weakList.add(2);

	console.log('weakList', weakList)
}


// map
{
	let map = new Map();
	let arr = ['123']

	//map添加元素用set
	map.set(arr,456);
	console.log('map',map,map.get(arr))
}

{
	let map = new Map([['a',123],['b',456]]);
	console.log('map args', map);
	console.log('size', map.size);
	console.log('delete', map.delete('a'),map);
	console.log('clear', map.clear(),map);
}

//weakmap  
// 1 接收的值必须是对象 2、没有size属性 不能使用clear 3、不能遍历
{
	let weakmap = new WeakMap();

	let o = {};

	weakmap.set(o,123)

	console.log(weakmap.get(o))

}

//数据结构横向对比 ，增删改查

{
	let map = new Map();
	let array = [];

	//增
	map.set('t',1);
	array.push({t:1});
	console.log('map-array', map,array)

	//查
	let map_exist = map.has('t');
	let array_exist = array.find(item => item.t);

	console.log('map_exist-array_exist', map_exist,array_exist)


	//改
	map.set('t', 2);
	array.forEach( item => item.t ? item.t = 2 : '');

	console.log('map-array-modify', map,array)

	//删
	map.delete('t');
	let index = array.findIndex(item => item.t);
	array.splice(index,1);
	console.log('map-array-empty', map,array)
}


{
	// set 和array 的对比
	let set = new Set();
	let array = [];

	//增
	set.add({t:1});
	array.push({t:1});
	console.log('set-array', set,array);

	// 查
	let set_exist = set.has({t:1});
	let array_exist = array.find(item => item.t);

	console.log('set_exist-array_exist', set_exist,array_exist)

	// 改
	set.forEach(item => item.t ? item.t = 2 : '');
	array.forEach(item => item.t ? item.t = 2 : '');

	console.log('set-array-modify', set,array);

	// 删

	set.forEach(item => item.t ? set.delete(item) : '');
	let index = array.findIndex(item => item.t);
	array.splice(index,1);
	console.log('set-array-empty', set,array)

}

{
	// object set map 增删改查
	let item = {t: 1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;

	console.log('map-set-obj', map,set,obj);

	//查
	console.info({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		obj_exist: 't' in obj
	})

	//改
	map.set('t',2);
	item.t =2
	obj['t'] = 2;
	console.log('map-set-obj-modify', map,set,obj);

	//删
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('map-set-obj-empty', map,set,obj);
}

// 优先使用map  set  