<template>
	<div class="wodexiaoxi">
		<div class="wodexiaoxi-head">
			<router-link class="fanhui" tag="a" to="/index/yinmu">
			</router-link>
			<p class="mymsg">我的消息</p>
		</div>
		<div class="massage">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">私信</mt-tab-item>
				<mt-tab-item id="2">评论</mt-tab-item>
				<mt-tab-item id="3">@我</mt-tab-item>
				<mt-tab-item id="4">通知</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="msg-sixin">
						<img src="../../assets/images/footer.png" alt="" />
						<div class="msg-info">
							<span>Bailuc</span>
							<span>单曲：los</span>
						</div>
					</div>
					<div class="msg-sixin">
						<img src="../../assets/images/mine/gedan_06.png" alt="" />
						<div class="msg-info">
							<span>追光者</span>
							<span>单曲：追</span>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="mes">暂时还没有收到评论</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="mes">暂时还没有收到评论</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<div class="mes">暂时还没有收到评论</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: "wodexiaoxi",
		data() {
			return {
				selected: '1'
			}
		}
	}
</script>

<style lang="less" scoped>
	.wodexiaoxi {
		.wodexiaoxi-head {
			width: 100%;
			height: 1.28rem;
			box-sizing: border-box;
			padding-left: 1rem;
			position: relative;
			background: linear-gradient(to right,#6d2ada , #af24a5, #e51f7e);
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
						font-size: 24/100rem;
						.msg-sixin{
							height: 1.8rem;
							width: 100%;
							position: relative;
							border:1px solid #e6ebf5;
							img{
								position: absolute;
								top: 0.16rem;
								left:0.2rem;
								width:1.5rem;
								height: 1.5rem;
								border-radius: 50%;
							}
						.msg-info{
							position: absolute;
							left: 2rem;
							top: 0;
							span{
								font-size: 0.3rem;
								display: block;
								line-height: 0.9rem;
							}
						}
						}
					}
				}
				&:nth-child(2),&:nth-child(3) {
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