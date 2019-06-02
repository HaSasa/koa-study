<template>
	<div id="app">
		<!--头部-->
		<vkHeader :scrollOver="scrollOver" v-if="$route.name !== '404'"/>
		<!--主路由页面-->
		<main class="vk-main clearfix" id="vkMain">
			<section class="vk-main__left"
					 :class="[$route.meta.isFull ? 'full-width' : 'fl']">
				<router-view name="content"/>
			</section>
			<section class="vk-main__right fr"
					 v-if="!$route.meta.isFull"
					 ref="vkMainRight">
				<router-view name="aside"/>
			</section>
		</main>
		<!--返回顶部按钮-->
		<vkBackTop transition-name="easeOutQuint"/>
	</div>
</template>

<script>

	import renderCan_2 from 'src/lib/js/canvas_2';
	export default {
		name: 'App',
		data(){
			return{
				newScrollPos:0,
				lastScrollPos:null,
				scrollOver:false,
			}
		},
		methods:{
			handleScroll() {
				this.lastScrollPos = window.scrollY;
				let mainRight = this.$refs.vkMainRight;
				if (this.newScrollPos < this.lastScrollPos && this.lastScrollPos > 80) {
					// mainRight.style.transform = `translateY(${window.scrollY - 60}px)`;
					this.scrollOver = true;
				} else if (this.newScrollPos > this.lastScrollPos) {
					// mainRight.style.transform = `translateY(${window.scrollY}px)`;
					this.scrollOver = false;
				}
				this.newScrollPos = this.lastScrollPos;
			},
			handleMouseAnimate(){
				let a_idx = 0;
				jQuery(document).ready(function($) {
					$("body").click(function(e) {
						let a = ["❤坚持", "❤活泼", "❤坦荡", "❤浪漫", "❤宽容", "❤热情", "❤朴实" ,"❤温柔", "❤细腻", "❤真心", "❤理解", "❤机智","❤小冰心"];
						let $i = $("<span/>").text(a[a_idx]);
						a_idx = (a_idx + 1) % a.length;
						let x = e.pageX,
							y = e.pageY;
						$i.css({
							"z-index": 9999999999,
							"top": y - 20,
							"left": x,
							"position": "absolute",
							"font-weight": "bold",
							"font-size":"14px",
							"font-family":"幼圆",
							"color": "#ff6651"
						});
						$("body").append($i);
						$i.animate({
								"top": y - 180,
								"opacity": 0
							},
							1500,
							function() {
								$i.remove();
							});
					});
				});
			}
		},
		mounted () {
			renderCan_2();
			window.addEventListener('scroll', this.handleScroll);
			this.handleMouseAnimate();

		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		components:{
			vkHeader  :()=>import(/* webpackChunkName: "vk-header" */ 'src/components/vk-header/vk-header'),
			vkBackTop :()=>import(/* webpackChunkName: "vk-back" */ 'src/components/vk-back/vk-back'),
		}
	}
</script>

<style lang="scss">
	@import "src/assets/sass/base.scss";
	.vk-main{
		width: 1200px;
		margin: 80px auto 0;
		.vk-main__left{
			width: 70%;
			&.full-width{
				width: 100%;
			}
		}
		.vk-main__right{
			width: 28%;
			/*transition: all .2s linear;*/
		}

	}
</style>
