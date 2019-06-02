/**
 * @authors dkplus (dkplus@qq.com)
 * @date    2017-10-01 20:37:26
 * @version $1.0$
 */
function renderCan_2() {
	let temp = document.createElement('canvas');
	temp.setAttribute('id', 'J_RenderCircle');
	temp.style=`position:fixed;left:0;top:0;z-index:-100;background:#efefef;opacity:.6;`;
	document.body.appendChild(temp)

	let canvas = temp;
	if (!canvas) return;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let ctx = canvas.getContext("2d");

	let mouse = {
		x: undefined,
		y: undefined
	}
	function getRandomColor() {
		return '#'+(function(h){

			return new Array(7-h.length).join("0")+h

		})((Math.random()*0x1000000<<0).toString(16))
	}

	function makeColor(){
		let arr = []
		for(let i =0;i < 6; i++){
			let res = getRandomColor();
			arr.push(res)
		}
		return arr;
	}
	let colorArray = makeColor();
	let maxRadius = 40;
	function Circle(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius;
		this.bg = colorArray[Math.floor(Math.random() * colorArray.length)];

		this.draw = function () {
			ctx.beginPath();
			ctx.strokeStyle = "#777";
			ctx.fillStyle = this.bg;
			ctx.arc(this.x, this.y, this.radius, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
			ctx.fill();
		}
		this.update = function () {

			if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
				this.dx = -this.dx;
			}
			if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
				this.dy = -this.dy;
			}
			this.x += this.dx;
			this.y += this.dy;

			if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
				if (this.radius < maxRadius) {
					this.radius += 1;
				}
			} else if (this.radius > this.minRadius) {
				this.radius -= 1;
			}

			this.draw();

		}
	}

	let circleArray = [];
	function init() {
		circleArray = []
		for (let i = 0; i < 500; i++) {
			let x = Math.random() * window.innerWidth;
			let y = Math.random() * window.innerHeight;
			let dx = (Math.random() - 0.5);
			let dy = (Math.random() - 0.5);
			let radius = Math.random() * 3 + 1;
			circleArray.push(new Circle(x, y, dx, dy, radius));
		}
	}

	function animate() {
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		requestAnimationFrame(animate);

		for (let i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
	}

	window.addEventListener("mousemove", function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
	});
	window.addEventListener("resize", function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		init();
	})
	init();
	animate();
}


export default renderCan_2;
