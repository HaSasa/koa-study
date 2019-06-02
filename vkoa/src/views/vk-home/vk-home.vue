<template>
    <section class="vk-home clearfix">
		<main class="vk-home__main fl">
			<ul class="main-list">
				<li class="main-list__item"
					data-scroll-reveal="enter bottom over 0.33s"
					v-for="n in 20"
					:key="n">
					<i class="item-mask">
						<router-link to="/" tag="a">
							<img src="http://www.yangqq.com/d/file/jstt/bj/2018-06-29/3f0b6da48a6fd4e626a021ff7bd0d74f.jpg" alt="">
						</router-link>
					</i>
					<h3 class="item-tit">
						<router-link to="/" tag="a" class="item-tit__span">
							抄袭门过后——丢掉心结，重拾自己
						</router-link>
					</h3>
					<p class="item-cont">
						我所知道的比较流行的博客系统有我所知道的比较流行的博客系统有我所知道的比较流行的博客系统有我所知道的比较流行的博客系统有，
						wordpress，Z-Blog，emlog等，最流行的是worpress，主题多，插件多，所以选择wp的个人站长也很多。以上三个博客系统我都用过，用的时间最
					</p>
					<div class="item-meta">
						<div class="meta-label">
							<span class="meta-label__span">标签一</span>
							<span class="meta-label__span">时间</span>
						</div>
						<el-button type="primary" size="small">阅读全文</el-button>
					</div>
				</li>
			</ul>
		</main>
	</section>
</template>

<script>
	import scrollReveal from 'src/lib/js/scrollReveal';
	import Utils from 'src/utils/utils';

    export default {
        name: "vk-home",
		data(){
        	return{
        		arr:['1','3','5'],
				obj:{
        			time:1,
					data:2
				}
			}
		},
		mounted(){
			this.$nextTick(()=>{
				!(/msie [6|7|8|9]/i.test(navigator.userAgent)) && (window.scrollReveal = new scrollReveal({reset:true}))
			});

			console.log(Utils.deepCopy(this.arr))

		}
    }
</script>

<style lang="scss" scoped>
	@import "src/assets/sass/base.scss";
	.vk-home__main{
		/*width: 68%;*/
		overflow: hidden;
		display: block;
		.main-list__item{
			background: rgba(255,255,255,0.9);
			padding: 15px;
			overflow: hidden;
			color: #797b7c;
			margin-bottom: 20px;
			box-shadow: 1px 2px 6px rgba(63,74,105,.16);
			border-radius: 10px;
			.item-mask{
				width: 200px;
				display: block;
				overflow: hidden;
				float: right;
				margin-left: 20px;
				cursor: pointer;
				img{
					display: block;
					width: 100%;
					transition: all .3s ease-in;
				}
			}
			.item-tit{
				font-size: 16px;
				line-height: 25px;
				text-shadow: #FFF 1px 1px 1px;
				color: #de4949;
				font-weight: bold;
				.item-tit__span{
					color: #222;
					cursor: pointer;
					transition: all .2s ease-in;
					&:hover{
						text-decoration: underline;
					}
				}
			}
			.item-cont{
				margin: 20px 0 0 0;
				font-size: 15px;
				line-height: 22px;
				@include mult-txt-hidden(2);
			}
			.item-meta{
				margin-top:15px;
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				.meta-label{
					.meta-label__span{
						display: inline-flex;
						align-self: flex-end;
						margin-right: 10px;
						color: #000;
					}
				}

			}
			&:hover{
				.item-mask{
					img{
						transform: scale(1.1);
					}
				}
				.item-tit{
					.item-tit__span{
						color: $base-color;
					}
				}
			}
		}
	}
</style>
