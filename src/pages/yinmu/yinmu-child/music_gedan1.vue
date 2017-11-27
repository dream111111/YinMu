<template>
	<div class="bangdan">
		<div class='re_info'>
			<p>
				<router-link to="/yinmu/changxiaobang1">畅销榜</router-link>
				<b></b>
				<router-link to="/yinmu/yinmujingpin1">音沐精品</router-link>
				<b></b>
				<router-link to="/yinmu/yinmujingpin1">全部</router-link>
			</p>
		</div>
		<div class="re_content">
			<p class="title">最近上架</p>
			<router-link class="fenlei-list-con" tag='div' :to="'/tuijian/'+item.id" v-for="(item,index) in listData" :key='index'>
				<img :src="item.image" />
				<p>{{item.alt_title}}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
//	import dt from '../../../assets/data/diantai1.json'
	export default {
		name: 'music_gedan',
		data() {
			return {
				listData: [],
				num: ""
			}
		},
		created: function() {
			var currentUrl = this.HOST + "/yinmu/diantai1.json";
			this.$axios.get(currentUrl)
				.then(res => {
					this.listData = res.data.result

				})
				.catch(error => {
					console.log(error)
				})
		},
		methods: {
			getList(data) {
				this.num = data
				console.log(111)
			}

		}
	}
</script>

<style lang="less" scoped>
	.bangdan {
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
						background: url(../../../assets/images/songList/changxiao.png)no-repeat;
						background-size: 60/100rem 70/100rem;
					}
					&:nth-of-type(2) {
						&:before {
							background: url(../../../assets/images/songList/jingpin.png) no-repeat;
							background-size: 70/100rem 70/100rem;
						}
					}
					&:nth-of-type(3) {
						&:before {
							background: url(../../../assets/images/songList/quanbu.png)no-repeat;
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