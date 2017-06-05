 // Proxy Reflect

 // Proxy
 {
 	let obj = {
 		time: '2017-03-11',
 		name: 'net',
 		_r:123
 	};

 	let monitor = new Proxy(obj, {
 		//����/����������ԵĶ�ȡ
 		get(target,key) {
 			return target[key].replace('2017','2018')
 		},
 		//���ض�����������
 		set(target,key,value) {
 			if(key === 'name') {
 				return target[key] = value;
 			} else {
 				return target[key];
 			}
 		},
 		// ���� key in object ����
 		has(target,key) {
 			if(key === 'name' ) {
 				return target[key]
 			} else {
 				return false;
 			}
 		},
 		// ����ɾ�� delete
 		deleteProperty(target,key) {
 			if(key.indexOf('_') > -1) {
 				delete target[key];
 				return true
 			} else {
 				return target[key]
 			}
 		},
 		// ����Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyName
 		ownKeys(target) {
 			return Object.keys(target).filter(item => item != 'time')
 		}
 	});

 	console.log('get',monitor.time);
 	monitor.time = '2018';
 	monitor.name = '22223';
 	console.log('set',monitor.time,monitor.name);
 	console.log('has','name'in monitor,'time'in monitor);

 	//delete monitor.time;
 	//console.log('delete',monitor);

 	//delete monitor._r;
 	//console.log('delete',monitor);

 	console.log('ownKeys',Object.keys(monitor));
 }

 // Reflect

 {
 	let obj = {
 		time: '2017-03-11',
 		name: 'net',
 		_r:123
 	};

 	console.log('Reflect get',Reflect.get(obj,'time'))
 	Reflect.set(obj, 'name', 'ccc');
 	console.log(obj);

 	console.log('has',Reflect.has(obj, 'name'));
 }


 //�÷�  ����У��
 {
 	function validator(target, validator) {
 		return new Proxy(target, {
 			_validator: validator,
 			set(target,key,value,proxy) {
 				if(target.hasOwnProperty(key)) {
 					let va = this._validator[key];
 					if(!!va(value)) {
 						return Reflect.set(target,key,value,proxy)
 					} else {
 						throw Error(`��������${key}��${value}`)
 					}
 				} else {
 					throw Error(`${key} ������`)
 				}
 			}
 		});
 	}

 	const personVallidators = {
 		name(val) {
 			return typeof val === 'string'
 		},
 		age(val) {
 			return typeof val === 'number'  && val > 18
 		}
 	}

 	class Person{
 		constructor(name,age) {
 		  this.name = name;
 		  this.age = age;
 		  return validator(this,personVallidators)
 		}
 	}

 	const person = new Person('lilei',30);

 	console.info(person);

 	person.name = 'Hahs';

 	console.info(person);

 }