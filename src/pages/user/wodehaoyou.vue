<template>
	<div class="wodehaoyou">
		<div class="wodehaoyou-head">
			<router-link class="fanhui" tag="a" to="/index/yinmu">
			</router-link>
			<p class="mymsg">我的好友</p>
		</div>

		<div class="massage">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">关注</mt-tab-item>
				<mt-tab-item id="2">粉丝</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="addfriends">
						<p>添加好友</p>
						<div class="fri-add">
							<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1837687172,3078226332&fm=27&gp=0.jpg" alt="" /> <div>认识的人</div>
						</div>
						<div class="fri-add">
							<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=763448925,1234796363&fm=27&gp=0.jpg" alt="" /> <div>明星用户(312)</div>
						</div>
						<div class="fri-add">
							<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047948833,1872119842&fm=27&gp=0.jpg" alt="" /> <div>音乐人(33)</div>
						</div>
						<div class="fri-add">
							<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1424914663,2608476803&fm=27&gp=0.jpg" alt="" /> <div>音乐达人()121</div>
						</div>
					</div>
					<div class="mycare">
						<p>我的关注</p>
						<div class="fri-add">
							<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1837687172,3078226332&fm=27&gp=0.jpg" alt="" /> 
							<div>安琪拉</div>
						</div>
						<div class="fri-add">
							<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2238841212,2999563090&fm=27&gp=0.jpg" alt="" /> 
							<div>papi酱</div>
						</div>
						<div class="fri-add">
							<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047948833,1872119842&fm=27&gp=0.jpg" alt="" /> 
							<div>萧敬腾的小迷妹</div>
					</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="wodeguanzhu">
						<div class="fri-add">
							<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1837687172,3078226332&fm=27&gp=0.jpg" alt="" /> <div>lris</div>
						</div>
						<div class="fri-add">
							<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=763448925,1234796363&fm=27&gp=0.jpg" alt="" /> <div>一白</div>
						</div>
						<div class="fri-add">
							<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047948833,1872119842&fm=27&gp=0.jpg" alt="" /> <div>二师兄</div>
						</div>
						<div class="fri-add">
							<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1424914663,2608476803&fm=27&gp=0.jpg" alt="" /> <div>吴亦凡</div>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: "wodehaoyou",
		data() {
			return {
				selected: '1'
			}
		}
	}
</script>

<style lang="less" scoped>
	.wodehaoyou {
		.wodehaoyou-head {
			width: 100%;
			height: 1.28rem;
			box-sizing: border-box;
			padding-left: 1rem;
			position: relative;
			background: linear-gradient(to right, #6d2ada, #af24a5, #e51f7e);
			.fanhui {
				position: absolute;
				left: 0.25rem;
				top: 0.325rem;
				display: inline-block;
				width: 0.6rem;
				height: 0.6rem;
				background: url(../../assets/images/fanhui.png);
				background-size: 0.6rem 0.6rem;
			}
			.mymsg {
				line-height: 1.28rem;
				font-size: 0.36rem;
				color: #FFFFFF;
			}
		}
		.massage {
			.mint-tab-container {
				.mint-tab-container-wrap {
					.mint-tab-container-item {
						margin-top: 3px;
						font-size: 30/100rem;
						.addfriends,.mycare,.wodeguanzhu{
							&>p {
								padding-left: 0.2rem;
								width: 100%;
								height: 0.5rem;
								line-height: 0.5rem;
								background: #e6ebf5;
							}
							.fri-add{
								width: 100%;
								height: 1.6rem;
								border: 1px solid #E6EBF5;
								box-sizing: border-box;
								position: relative;
								img{
									width: 1.2rem;
									height: 1.2rem;
									border-radius: 50%;
									position: absolute;
									left: 0.26rem;
									top: 0.2rem;
								}
								&>div{
									position: absolute;
									left: 1.8rem;
									top: 0;
									display: inline-block;
									line-height: 1.6rem;
								}
							}
						}
					}
				}
				&:nth-child(2),
				&:nth-child(3) {
					.mes {
						width: 100%;
						height: 4rem;
						line-height: 4rem;
						text-align: center;
					}
				}
			}
		}
	}
</style>