<template>
	<transition name="el-fade-in">
		<div class="vk-back-top" @click="handleToBackTop" v-if="showBackToTop"></div>
	</transition>
</template>

<script>
	import { scrollIt } from 'src/lib/js/scrollIt'
    export default {
        name: "vk-back-top",
		props:{
			pageY: { // 默认在哪个视图显示返回按钮
				type: Number,
				default: 400
			},
			transitionName: { // 过渡动画名称
				type: String,
				default: 'linear'
			}
		},
		data(){
        	return{
        		showBackToTop:false,
			}
		},
		methods:{
			getCurrentPageYOffset () {
				// 判断滚动区域大于多少的时候显示返回顶部的按钮
				let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scroll,'scroll')
				window.pageYOffset > this.pageY ? this.showBackToTop = true : this.showBackToTop = false;
			},
			handleToBackTop () {
				scrollIt(0, 800, this.transitionName, this.getCurrentPageYOffset);
			}
		},
		created () {
			 window.addEventListener('scroll', this.getCurrentPageYOffset)
		},
		beforeDestroy () {
			window.removeEventListener('scroll', this.getCurrentPageYOffset)
		}
    }
</script>

<style lang="scss" scoped>
	.vk-back-top{
		display: block;
		height: 40px;
		width: 40px;
		position: fixed;
		bottom: 40px;
		right: 40px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		text-indent: 100%;
		white-space: nowrap;
		background: rgba(0, 0, 0, 0.8) url('../../assets/img/top.png') no-repeat center;
		transition: all 0.3s;
		z-index: 9999999;
		cursor: pointer;
	}
</style>
