<template>
	<div class="silde">
		<div class="slide-left">
			<div class="userlogo">
				<router-link tag="a" to="/user/myinfo">
					<img  src="../../assets/images/footer.png"  alt="" />
				</router-link>
				<span class="dengji">LV.10</span>
				<span class="name">音沐音乐</span>
			</div>
			<div class="more">
				<router-link to="/user/wodexiaoxi">我的消息</router-link>
				<router-link to="">会员中心</router-link>
				<router-link to="">商场</router-link>
				<router-link to="/user/wodehaoyou">我的好友</router-link>
				<router-link to="">附近的人</router-link>
				<router-link to="/user/gexinghuanfu">个性换肤</router-link>
				<router-link to="/user/tinggeshiqu">听歌识曲</router-link>
				<router-link to="">定时播放</router-link>
				<router-link to="">夜间模式</router-link>
				<router-link to="/user/shezhi">设置</router-link>
			</div>
		</div>
		<div class="slde-right">
		</div>
	</div>
</template>

<script>
	export default {
		name: "slide",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.silde {
		width: 260/100rem;
		height: 1334/100rem;
		position: absolute;
		top:0;
		z-index: 100;
		overflow: hidden;
		.slide-left {
			background: #fff;
			height: 1334/100rem;
			float:left;
			.userlogo {
				width: 100%;
				height: 280/100rem;
				text-align: center;
				padding: 68/100rem 72/100rem;
				box-sizing: border-box;
				background: linear-gradient(to top, #6d2ada, #af24a5, #e51f7e);
				a{
					img{
						width: 110/100rem;
						height: 110/100rem;
						border-radius: 50%;
					}
				}
				.dengji {
					margin: 0 auto;
					display: block;
					width: 90/100rem;
					font-size: 12/100rem;
					box-sizing: border-box;
					border: 1/100rem solid #1F1E1F;
					border-radius: 24/100rem;
					font-weight: 100;
					color: #1F1E1F;
				}
				.name {
					padding-top: 0.2rem;
					display: block;
					font-size: 24/100rem;
					color: #1F1E1F;
				}
			}
			.more {
				width: 100%;
				a {
					font-size: 24/100rem;
					display: block;
					line-height: 1.05rem;
					padding-left: 0.9rem;
					position: relative;
					&:before {
						content: "";
						display: block;
						width: 35/100rem;
						height: 35/100rem;
						background: url(../../assets/images/wodexiaoxi.png);
						background-size: 0.35rem 0.35rem;
						position: absolute;
						left: 0.45rem;
						top: 0.275rem;
					}
					&:nth-child(2):before {
						background: url(../../assets/images/huiyuanzhongxin.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(3):before {
						background: url(../../assets/images/shangcheng.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(4):before {
						background: url(../../assets/images/wodehaoyou.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(5):before {
						background: url(../../assets/images/fujinderen.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(6):before {
						background: url(../../assets/images/pifu.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(7):before {
						background: url(../../assets/images/tinggeshiqu.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(8):before {
						background: url(../../assets/images/dingshibofang.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(9):before {
						background: url(../../assets/images/yejianmoshi.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(10):before {
						background: url(../../assets/images/shezhi.png);
						background-size: 0.35rem 0.35rem;
					}
				}
			}
		}
		.slide-right{
			float: left;
			width: 66%;
			
		}
	}
</style>