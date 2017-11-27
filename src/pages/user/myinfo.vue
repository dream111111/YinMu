<template>
	<div class="userinfo">
		<div class="userinfo-head" v-bind:style="{backgroundImage: 'url('+userinfo.backgroundUrl+')'}">
			<div class="usericon">
				<router-link to="/index/yinmu" tag="span" class="fanhui"></router-link>
				<span class="fenxiang"></span>
			</div>
			<img class="userpic" :src="userinfo.userImg" alt="" />
			<span class="user_name">{{userinfo.userName}}</span>
			<div class="fans">
				<span class="guanzhu">关注{{userinfo.attention}}</span>
				<span class="fans">粉丝{{userinfo.fans}}</span>
			</div>
			<div class="bianji">
				<router-link to="/user/userinfo/bianji" class="bj">我的资料</router-link>
			</div>
		</div>
		<div class="usercon">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">音乐</mt-tab-item>
				<mt-tab-item id="2">动态</mt-tab-item>
				<mt-tab-item id="3">关于我</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="yinyue-gedan">
						<div class="yinyue-gedan-left">歌单(1)</div>
						<div class="yinyue-gedan-right">共被收藏0次</div>
					</div>
					<div class="mylove">
						<div class="smlogo">
							<img src="../../assets/images/footer.png" />
							<div class="smlogo-cover">
								<img src="../../assets/images/xihuan.png" alt="" />
							</div>
						</div>
						<div class="ml-info">
							<span class="title">我的听歌排行</span>
							<span class="total">168首</span>
						</div>
					</div>
					<div class="mylove">
						<div class="smlogo">
							<img src="../../assets/images/mine/gedan_03.png" />
							<div class="smlogo-cover">
								<img src="../../assets/images/paihang.png" alt="" />
							</div>
						</div>
						<div class="ml-info">
							<span class="title">我喜欢的音乐</span>
							<span class="total">168首</span>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="dongtai">暂时还没有动态哦</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="userinformation">
						<p class="gerenxinxi">个人信息</p>
						<div>
							<p class="gerenxinxi-info">等级：</p>
							<p>{{userinfo.level}}</p>
						</div>
						<div>
							<p class="gerenxinxi-info">性别：</p>
							<p>{{userinfo.gender}}</p></div>
						<div>
							<p class="gerenxinxi-info">年龄：</p>
							<p>{{userinfo.age}}</p></div>
						<div>
							<p class="gerenxinxi-info">地区：</p>
							<p>{{userinfo.area}}</p>
						</div>
						<p class="jieshao">个人简介</p>
						<div class="intruduce">{{userinfo.introduce}}</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
//	import userdata from '../../assets/data/userinfo.json';
	export default {
		name: "userinfo",
		data() {
			return {
				selected: '1',
				userinfo: [{
					"age":22,
					"backgroundUrl":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1479801845,3872710611&fm=27&gp=0.jpg",
					"userImg":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2391766524,3356885949&fm=27&gp=0.jpg",
					"userName":"Remon",
					"attention":"30",
					"fans":"99",
					"level":"LV11",
					"gender":"女",
					"area":"湖北",
					"introduce":"..."
				}]
			}
		}
		,
		created(){
			var currentUrl = this.HOST + "/yinmu/dynamic.json";
			this.$axios.get(currentUrl)
			.then(res => {
					this.userinfo = this.userinfo[0];
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
</script>

<style lang="less" scoped>
	.userinfo {
		width: 100%;
		.userinfo-head{
			width: 100%;
			background-size: 100% 100%;
			.usericon{
				height: 0.88rem;
				padding: 0.24rem;
				box-sizing: border-box;
				.fanhui,.fenxiang{
					display: inline-block;
					float: left;
					width: 0.4rem;
					height: 0.4rem;
					background: url(../../assets/images/fanhui.png);
					background-size: 0.4rem 0.4rem;
				}
				.fenxiang {
					float: right;
					background: url(../../assets/images/fenxiang.png);
					background-size: 0.4rem 0.4rem;
				}
			}
			.userpic {
				display: block;
				width: 1.5rem;
				height: 1.5rem;
				border-radius: 50%;
				margin: 0 auto;
			}
			.user_name {
				font-size: 30/100rem;
				height: 0.5rem;
				line-height: 0.5rem;
				display: block;
				text-align: center;
			}
			.fans {
				width: 100%;
				height: 0.5rem;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: center;
			}
			.bianji {
				padding: 0.6rem 0;
				.bj {
					display: block;
					text-align: center;
					margin: 0 auto;
					line-height: 0.35rem;
					width: 1.6rem;
					height: 0.35rem;
					border-radius: 0.2rem;
					border: 1px solid #1F1E1F;
					font-size: 0.24rem;
					&:before {
						content: "";
						display: inline-block;
						width: 0.3rem;
						height: 0.3rem;
						background: url(../../assets/images/bianji.png);
						background-size: 0.3rem 0.3rem;
					}
				}
			}
		}
		.usercon {
			.mint-tab-container {
				.mint-tab-container-wrap {
					.mint-tab-container-item {
						margin-top: 3px;
						font-size: 24/100rem;
						.yinyue-gedan {
							width: 100%;
							height: 0.5rem;
							background: #DFDFDF;
							padding: 0 0.3rem;
							line-height: 0.5rem;
							&>div {
								width: 25%;
								float: left;
								font-size: 0.24rem;
							}
							.yinyue-gedan-right {
								float: right;
							}
						}
						.mylove {
							width: 100%;
							height: 1.365rem;
							position: relative;
							border-bottom: 1px solid #e6ebf5;
							&>div {
								float: left;
							}
							.smlogo {
								width: 1.365rem;
								height: 1.365rem;
								position: relative;
								img {
									width: 100%;
									height: 100%;
								}
								.smlogo-cover {
									width: 1.365rem;
									height: 1.365rem;
									background: #1F1E1F;
									opacity: 0.8;
									position: absolute;
									left: 0;
									top: 0;
									img {
										position: absolute;
										left: 0.3rem;
										top: 0.3rem;
										display: block;
										width: 50%;
										height: 50%;
									}
								}
							}
							.ml-info {
								height: 1.2rem;
								padding: 0 0 0 0.3rem;
								span {
									display: block;
								}
								.title {
									font-size: 0.3rem;
									font-weight: 100;
									line-height: 0.7rem;
								}
								.total {
									font-size: 0.2rem;
									line-height: 0.5rem;
								}
							}
						}
					}
				}
				&:nth-child(2){
					.dongtai{
						width: 100%;
						height: 4rem;
						line-height: 4rem;
						text-align: center;
					}
				}
				&:nth-child(2){
					.userinformation{
						width: 100%;
						.gerenxinxi,.jieshao{
							display: block;
							width: 100%;
							height: 0.9rem;
							line-height: 0.9rem;
							text-indent: 0.5rem;
							font-size: 0.30rem;
							color: #000000;
							font-family: bold;
						}
						.jieshao{
							margin-top: 0.3rem;
						}
						&>div{
							width: 100%;
							height: 0.7rem;
							line-height: 0.7rem;
							padding-left: 0.5rem;
							&>p{
								display: block;
								float: left;
							}
							&>p.gerenxinxi-info{
								width: 12%;
							}
						}
					}
				}
			}
		}
	}
</style>