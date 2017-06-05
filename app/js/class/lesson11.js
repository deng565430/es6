// 类

{
	//基本定义和生成实例
	class Parent{
		constructor(name = 'xiaoming') {
			this.name = name;
		}
	}

	let v_parent = new Parent('v');
	console.log('构造函数和实例',v_parent)
}

{
	//继承 extends
	class Parent{
		constructor(name = 'xiaoming') {
			this.name = name;
		}
	}

	class Child extends Parent {

	}

	console.log('继承', new Child('vs'))
}

{
	//继承  传递参数
	class Parent{
		constructor(name = 'xiaoming') {
			this.name = name;
		}
	}

	class Child extends Parent {
		constructor(name='child') {
			//如果传递所有参数  则设为 空 super();
		  super(name);
		  this.type = 'child';
		}
	}

	console.log('继承传递参数', new Child('asdd'))
}


{
	// getter, setter
	class Parent{
		constructor(name = 'xiaoming') {
			this.name = name;
		}
		get longName() {
			return 'mk' + this.name
		}
		set longName(value) {
			this.name = value;
		}
	}

	let v = new Parent();
	console.log('getter', v.longName);

	v.longName = 'hello'; 
	console.log('setter', v.longName);

}


{
	//静态方法 static 通过类去调用而不是通过类的实例去调用
	class Parent{
		constructor(name = 'xiaoming') {
			this.name = name;
		}
		static tell() {
			console.log('tell')
		}
	}

	Parent.tell();
}

{
	// 静态属性
	class Parent{
		constructor(name = 'xiaoming') {
			this.name = name;
		}
		static tell() {
			console.log('tell')
		}
	}

	Parent.type = 'test';

	console.log('静态属性', Parent.type);

}