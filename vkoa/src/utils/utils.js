/**
 * @description 工具函数
 * @author han
 */
const Utils	 = {
	/**
	 * @description 获取节点位置
	 * @param el
	 * @returns {{top: number, left: number, width: number, height: number}}
	 */
	getRectPos (el) {
		if (el instanceof window.SVGElement) {
			let rect = el.getBoundingClientRect()
			return {
				top: rect.top,
				left: rect.left,
				width: rect.width,
				height: rect.height
			}
		} else {
			return {
				top: el.offsetTop,
				left: el.offsetLeft,
				width: el.offsetWidth,
				height: el.offsetHeight
			}
		}
	},

	/**
	 * @description 节流函数
	 * @param method 事件触发的操作
	 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
	 * @returns {loop}
	 */
	throttle (method, mustRunDelay) {
		console.log(method, '000')
		let timer,
			args = arguments,
			start
		return function loop () {
			let self = this
			let now = Date.now()
			if (!start) {
				start = now
			}
			if (timer) {
				clearTimeout(timer)
			}
			if (now - start >= mustRunDelay) {
				method.apply(self, args)
				start = now
			} else {
				timer = setTimeout(function () {
					loop.apply(self, args)
				}, 50)
			}
		}
	},

	/**
	 * @description 生成唯一的guid/uuid
	 * @returns {string}
	 */
	generateUUID () {
		let d = new Date().getTime()
		let t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
		let uuid = t.replace(/[xy]/g, function (c) {
			let r = (d + Math.random() * 16) % 16 | 0
			d = Math.floor(d / 16)
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
		})
		return uuid
	},
	/**
	 * @description 对象或者数组深拷贝
	 * @param obj 传入的对象或者数组
	 * @returns {*}
	 */
	deepCopy(obj) {
		let newObj;
		if(typeof obj === 'object'){
			newObj = obj.constructor === Array ? [] : {};
			for(let key in obj){
				if(typeof obj[key] === 'object'){
					newObj[key] = this.deepCopy(obj[key]);
				}else{
					newObj[key] = obj[key];
				}
			}
		}else{
			newObj = obj;
		}
		return newObj;
	}
}
export default Utils;
/**
 * @description 对象深浅拷贝
 * @param {data}  传入的数据
 * @param {deep}  true:深拷贝 false：浅拷贝
 */
//
// function deeps (data, deep ) {
// 	// 根据deep传入的布尔值类型进行深true浅false拷贝
// 	// deep = deep || true
// 	let obj = {}
// 	// 对传入的data进行判断是传入的对象还是数组
// 	data instanceof Array ? obj = [] : {}
// 	// if (data instanceof Array) {
// 	// 	// 传入的是数组
// 	// 	obj = []
// 	// }
// 	for (let key in data) {
// 		let value = data[key]
// 		// 确认value是不是引用行数据/前提是传入的deep是true
// 		// deep不传就是undefined,默认是浅拷贝,双重取反为布尔值false,
// 		// typeof value不管是数组还是对象返回的都是object
// 		// function不用管,并且value不能等于null 因为typeof valueye也是object
// 		if(!!deep && typeof value === 'object' && value !== null){
// 			obj[key] = deeps(value, deep)
// 		}else{
// 			obj[key] = value
// 		}
//
// 		// obj[key]  = !!deep && typeof value === 'object' && value !== null ? deeps(value, deep) : value
// 	}
// 	// 把拷贝的对象return出去
// 	return obj
// }
