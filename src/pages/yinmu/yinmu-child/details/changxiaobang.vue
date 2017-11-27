<template>
	<div class="changxiaobang">
		<div class="ksong-head">
			<router-link :to="{ name: 'regebang', params: { selected: '1' }}" class="fanhui"></router-link>
			</router-link>
			<p class="mymsg">畅销榜</p>
			<span class="fenxiang"></span>
		</div>
		<img src="http://127.0.0.1:8080/src/assets/images/changxiaobang.png" alt="" />
		<div class="info">
			<a href="javacscript:;">今日排行</a>
			<a href="javacscript:;">本周排行</a>
			<a href="javacscript:;">累计排行</a>
		</div>
		<div class="changxiaoCon" v-for="(list,index) in listData">
			<div class="left">
				<img :src="list.authorimg" alt="" />
			</div>
			<div class="right">
				<a href="javascript:;" class="musicTitle">{{list.musicTitle}}</a>
				<a href="javascript:;" class="musicauthor">{{list.musicauthor}}</a>
				<a href="javascript:;" class="musicCount">{{list.musicCount}}</a>
				<i class="order">{{list.order}}</i>
				<a href="javascript:;" class="dabang">打榜</a>
			</div>
		</div>
	</div>
</template>

<script>
//	import changxiaobang from "../../../assets/data/changxiaobang.json"
	export default {
		name: 'changxiaobang',
		data() {
			return {
				listData: ""
			}
		},
		created: function() {
			var currentUrl = this.HOST + "/yinmu/changxiaobang.json";
			this.$axios.get(currentUrl)
				.then(res => {
					this.listData = res.data.result

				})
				.catch(error => {
					console.log(error)
				})
			

			//			var currentUrl = this.HOST + "/yinmu/changxiaobang.json";
			//			this.$axios.get(currentUrl)
			//				.then(res => {
			//					var str = this.$route.path;
			//					var str1 = str.substring(str.length - 1);
			//					this.listData = res.data.result[str1].tracks;
			//					this.image = res.data.result[str1].image;
			//
			//				})
			//				.catch(error => {
			//					console.log(error);
			//				})
		}
	}
</script>

<style lang='less' scoped>
	.changxiaobang {
		width: 100%;
		.ksong-head {
			width: 100%;
			height: 1.28rem;
			box-sizing: border-box;
			position: relative;
			background:linear-gradient(to right,#6d2ada,#af24a5,#e51f7e);
			.fanhui {
				position: absolute;
				left: 0.25rem;
				top: 0.325rem;
				display: inline-block;
				width: 0.6rem;
				height: 0.6rem;
				background: url(http://127.0.0.1:8080/src/assets/images/fanhui.png);
				background-size: 0.6rem 0.6rem;
			}
			.mymsg {
				line-height: 1.28rem;
				font-size: 0.36rem;
				color: #FFFFFF;
				text-align: center;
			}
			.fenxiang {
				position: absolute;
				right: 0.2rem;
				top: 0.4rem;
				display: inline-block;
				float: right;
				width: 0.45rem;
				height: 0.45rem;
				background: url(http://127.0.0.1:8080/src/assets/images/share.png);
				background-size: 0.45rem 0.45rem;
			}
		}
		img {
			width: 100%;
			height: 5rem;
		}
		.info {
			width: 100%;
			text-align: center;
			a {
				width: 30%;
				font-size: 30/100rem;
				line-height: 80/100rem;
				display: inline-block;
				border-radius: 20/50rem;
				background: #6091E0;
				color: #EEF3F0;
			}
			&>:nth-child(2) {
				background: #56BCC0;
			}
			&>:nth-child(3) {
				background: #CA748C;
			}
		}
		.changxiaoCon {
			overflow: hidden;
			.left,
			.right {
				float: left;
			}
			.left {
				padding: 15/50rem;
				img {
					width: 120/50rem;
					height: 100/50rem;
				}
			}
			.right {
				font-size: 16/50rem;
				padding: 20/50rem 100/50rem 30/50rem 20/50rem;
				position: relative;
				&>a {
					display: block;
					margin-bottom: 10/50rem;
				}
				.order {
					position: absolute;
					top: 30px;
					right: 10px;
				}
				.dabang {
					position: absolute;
					bottom: 20px;
					right: -10px;
					padding: 10px;
					border-radius: 10/50rem;
					background: #4BCDA0;
					color: #FFFFFF;
				}
			}
		}
	}
</style>