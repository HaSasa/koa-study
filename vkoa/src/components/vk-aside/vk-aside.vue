<template>
	<aside class="vk-aside">
		<!--最新文章-->
		<div class="vk-aside__item">
			<div class="item-title">最新文章</div>
			<ul class="item-cont">
				<li class="one">
					<router-link to ='/' tag="a" target="_blank">
						<img src="https://avatars3.githubusercontent.com/u/43238460?s=460&v=4" alt="">
					</router-link>
				</li>
				<li class="others clearfix" v-for="n in 5" :key="n">
					<div class="image fl">
						<img src="https://avatars3.githubusercontent.com/u/43238460?s=460&v=4" alt="">
					</div>
					<div class="title">
						<h3>设置设置设置设置设置设置设置设置设置设置设置设置设置设置设置设置</h3>
						<span>2017-10-25</span>
					</div>
				</li>
			</ul>
		</div>

	</aside>
</template>

<script>
  export default {
    name: 'vk-aside',
    data () {
      return {}
    },
    props: {},
    components: {}
  }
</script>

<style lang="scss" scoped>
	@import "src/assets/sass/base.scss";
	.vk-aside{
		.vk-aside__item{
			margin-bottom: 20px;
			position: relative;
			overflow: hidden;
			background: #FFF;
			box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
			padding: 35px 30px;
			border-radius: 10px;
			.item-title{
				font-size: 18px;
				color: #282828;
				font-weight: 600;
				text-transform: uppercase;
				padding-bottom: 15px;
				margin-bottom: 25px;
				position: relative;
				&:after{
					content: "";
					background-color: #282828;
					left: 1px;
					width: 50px;
					height: 2px;
					bottom: -2px;
					position: absolute;
					transition:all 0.5s ease-in;
				}
			}
			/*关于我*/
			.item-cont__abMe{

			}
			/*文章*/
			.item-cont{
				li{
					position: relative;
					margin-top: 20px;
					overflow: hidden;
					&.one{
						a{
							display: block;
						}
						img{
							width: 100%;
							height: auto;
						}
					}
					&.others{
						height: 75px;
						.image{
							width: 100px;
							height: auto;
							max-height: 75px;
							position: relative;
							img{
								width: 100px;
								height: auto;
							}
						}
						.title{
							margin-left: 115px;
							height: 100%;
							position: relative;
							h3{
								font-size: 15px;
								@include mult-txt-hidden(2);
							}
							span{
								font-size: 12px;
								color: #9A9A9A;
								position: absolute;
								bottom: 0;
							}
						}
					}
				}
			}
			&:hover{
				.item-title{
					&:after{
						width: 70px;
					}
				}
			}
		}
	}
</style>
