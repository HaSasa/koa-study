<template>
	<header class="vk-header" :class="[scrollOver ? 'vk-header__slideUp' : 'vk-header__slideDown']">
		<main class="vk-header__container clearfix">
			<div class="vk-header__log fl">
				<router-link to="/">
					<span>醉~</span>
				</router-link>
			</div>
			<div class="vk-header__nav__m"></div>
			<nav class="vk-header__nav fr">
				<ul>
					<router-link to="/" tag="li">
						思~阁
					</router-link>
					<router-link to="/" tag="li">
						念~宇
					</router-link>
					<router-link to="/" tag="li">
						枉~生
					</router-link>
				</ul>
			</nav>
		</main>
	</header>
</template>

<script>
	export default {
		name: "vk-header",
		props:{
			scrollOver:{
				type:Boolean,
				default:false
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/sass/base.scss";

	.vk-header {
		width: 100%;
		height: 60px;
		@include position(fixed, top, 0, left, 0);
		line-height: 60px;
		background: rgba(255, 255, 255, .9);
		border-bottom: 1px solid #ddd;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .04);
		z-index: 9999;
	}

	.vk-header__container {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
	}

	.vk-header__log {
		font-size: 22px;
		transition: all .2s ease-in;
		> a {
			color: #555;
		}
	}

	.vk-header__nav {
		li {
			float: left;
			display: block;
			width: 104px;
			text-align: center;
			font-size: 16px;
			cursor: pointer;
			position: relative;
			transition: all .2s ease-in-out;
			&:after {
				content: '';
				width: 100%;
				height: 2px;
				background: #409EFF;
				@include position(absolute, bottom, 0, left, 0);
				transition: all .2s ease-in-out;
				transform: scale(0);
			}
			&:hover {
				color: #409EFF;
				&:after {
					transform: scale(1);
				}
			}
		}
	}

	.vk-header__slideUp {
		-webkit-transform: translateY(-100px);
		-ms-transform: translateY(-100px);
		-o-transform: translateY(-100px);
		transform: translateY(-100px);
		-webkit-transition: transform .5s ease-out;
		-o-transition: transform .5s ease-out;
		transition: transform .5s ease-out;
	}

	.vk-header__slideDown {
		-webkit-transform: translateY(0);
		-ms-transform: translateY(0);
		-o-transform: translateY(0);
		transform: translateY(0);
		-webkit-transition: transform .5s ease-out;
		-o-transition: transform .5s ease-out;
		transition: transform .5s ease-out;
	}
</style>
