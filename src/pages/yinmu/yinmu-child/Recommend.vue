<template>
	<div class="recommend">
		<div class='re_info'>
			<p>
				<router-link to="/introDetail/intro">每日推荐</router-link>
				<b></b>
				<router-link to="/regebang">音沐热歌榜</router-link>
				<b></b>
				<router-link to="/party">音乐Party</router-link>
			</p>
		</div>
		<div class="re_content">
			<p class="title">推荐</p>
			<router-link tag='div' :to="'/introDetail/'+value.id" v-for="(value,index) in listData" :key="index">
			<img :src="value.url">
			<p>{{value.title}}</p>
		</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'recommend',
		data() {
			return {
				listData: [],
				num: ""
			}
		},
		created: function() {
			var currentUrl = this.HOST + "/yinmu/recommend.json";
			this.$axios.get(currentUrl)
				.then(res => {
					this.listData = res.data.result

				})
				.catch(error => {
					console.log(error)
				})
		}
	}
</script>

<style lang='less' scoped>
	.recommend {
		padding-bottom: 1rem;
		.re_info {
			width: 100%;
			height: 140/100rem;
			margin-top: 20/100rem;
			p {
				box-sizing: border-box;
				width: 100%;
				margin-left: 15/50rem;
				a {
					font-size: 30/100rem;
					width: 26%;
					line-height: 140/100rem;
					padding-top: 50/100rem;
					text-align: center;
					display: inline-block;
					position: relative;
					&:before {
						content: '';
						width: 70/100rem;
						height: 70/100rem;
						position: absolute;
						top: 20/100rem;
						left: 50%;
						margin-left: -60/200rem;
						background: url(../../../assets/images/recommend/rem1.png) no-repeat;
						background-size: 60/100rem 70/100rem;
					}
					&:nth-of-type(2) {
						&:before {
							background: url(../../../assets/images/recommend/rem2.png) no-repeat;
							background-size: 70/100rem 70/100rem;
						}
					}
					&:nth-of-type(3) {
						&:before {
							background: url(../../../assets/images/recommend/rem3.png) no-repeat;
							background-size: 60/100rem 70/100rem;
						}
					}
				}
				b {
					width: 1/100rem;
					display: inline-block;
					height: 100/100rem;
					background: #aaa;
					box-sizing: border-box;
					margin-top: -3/100rem;
				}
			}
		}
		.re_content {
			width: 100%;
			overflow: hidden;
			margin-top: 20/100rem;
			div {
				width: 31%;
				text-align: center;
				padding-bottom: 20/100rem;
				float: left;
				&:nth-of-type(2),
				&:nth-of-type(5) {
					margin: 0 10/100rem;
				}
				&:nth-of-type(1),
				&:nth-of-type(4) {
					margin-left: 16/100rem;
				}
				&:nth-of-type(3),
				&:nth-of-type(6) {
					margin-right: 16/100rem;
				}
				img {
					width: 230/100rem;
					height: 230/100rem;
					border-radius: 5/100rem;
				}
				p {
					text-align: left;
					font-size: 24/100rem;
					line-height: 38/100rem;
					font-family: "PingFang";
					color: #404040;
				}
			}
			.title {
				font-size: 30/100rem;
				margin-left: 10/100rem;
				padding-left: 10/100rem;
				border-left: 3px solid #9844a1;
				margin-bottom: 20/100rem;
			}
		}
	}
</style>