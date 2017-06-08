 // Decorator
// 修饰器  不允许修改 只读
 {
 	let readonly = function (target, name, descriptor) {
 		descriptor.writable = false;
 		return descriptor
 	}
 	class Test{
 		@readonly
 		time() {
 			return '2017-03-11'
 		}
 	}

 	let test = new Test();

 	/*test.time = function() {
 		console.log('reset time')
 	}*/
 	console.log(test.time());
 }


// 属性修饰器
 {
 	let typename = function (target,name,descriptor) {
 		target.myname = 'hello'
 	}
 	@typename
 	class Test {

 	}
 	console.log('类修饰器', Test.myname)

 	//第三方修饰器的js 库 core-decorators ; npm install core-decorators
 	// 使用方法 import '' 然后直接@readonly
 }

// 例子 好处 1、把埋点系统抽离出来  可复用   2、 从业务逻辑中拆离出来，提高代码简洁性，可维护性
 {
 	let log = (type) => {
 		return function(target,name,descriptor) {
 			let src_method = descriptor.value;
 			descriptor.value = (...arg) => {
 				src_method.apply(target.arg);
 				//换业务逻辑
 				console.log(`log ${type}`);
 			}
 		}
 	}

 	class AD{
 		@log('show')
 		show() {
 			console.log('ad is show');
 		}
 		@log('click')
 		click() {
 			console.log('ad is click');
 		}
 	}

 	let ad = new AD();
 	ad.show();
 	ad.click();
 }