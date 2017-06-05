// promise

{
	// 基本定义
	let ajax = function(callback) {
		console.log('执行')
		setTimeout(() => {
			callback && callback.call()
		}, 1000)
	};
	ajax(() => {
		console.log('timeout1');
	})
}

{
	let ajax = function() {
		console.log('执行2')
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			},1000)
		})
	}

	ajax().then(() => {
		console.log('promise', 'timeout2');
	})
}

{
	let ajax = function() {
		console.log('执行3')
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			},1000)
		})
	}
	ajax()
		.then(() => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				},2000)
			})
		})
		.then(() => {
			console.log('timeout3')
		})
}

{
	let ajax = function(num) {
		console.log('执行4');
		return new Promise((resolve, reject) => {
			if(num > 5) {
				resolve()
			} else {
				throw new Error('出错了')
			}
		})
	}

	ajax(6).then( ()=> {
		console.log('log', 6)
	}).catch((err) => {
		console.log('catch',err)
	})

	ajax(4).then( ()=> {
		console.log('log', 6)
	}).catch((err) => {
		console.log('catch',err)
	})
}

{
	// 所有图片加载完再加载到页面
	function loadImg(src) {
		return new Promise((resolve,reject) => {
			let img = document.createElement('img')
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				reject(err);
			}
		})
	}

	function showImgs(imgs) {
		imgs.forEach(function(img) {
			document.body.appendChild(img)
		})
	}
	//所有对象都完毕之后才出发 all
	Promise.all([
		loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs)
}


{
	//有一个图片加载完就添加到页面 其他忽略
	function loadImg(src) {
		return new Promise((resolve,reject) => {
			let img = document.createElement('img')
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				reject(err);
			}
		})
	}

	function showImgs(img) {
		let p = document.createElement('p')
		p.addendChild(img)
		document.body.addendChild(p)

	}

	Promise.race([
		loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs)
}