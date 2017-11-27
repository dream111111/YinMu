<template>
	<div class="gexinghuanfu">
		<div class="gexinghuanfu-head">
			<router-link class="fanhui" tag="a" to="/index/yinmu">
			</router-link>
			<p class="gxhf">个性换肤</p>
		</div>
		<div class="pifucon">
			<div class="guanfangtuijian">
				<span class="tip">官方推荐</span>
				<div class="guanfangtuijian-img">
					<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=210894863,490549391&fm=27&gp=0.jpg" alt="" />
					<span>官方红</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3485356118,288471410&fm=27&gp=0.jpg" alt="" />
					<span>官方白</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3372796238,1262811176&fm=27&gp=0.jpg" alt="" />
					<span>自选颜色</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1188954323,2879702846&fm=27&gp=0.jpg" alt="" />
					<span>自选皮肤</span>
				</div>
			</div>
			<div class="tuijian">
				<span class="tip">推荐</span>
				<div class="guanfangtuijian-img">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=970955367,1650450814&fm=27&gp=0.jpg" alt="" />
					<span>卡其色</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2922207650,1955377990&fm=27&gp=0.jpg" alt="" />
					<span>冰激凌色</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4170907254,3438050263&fm=200&gp=0.jpg" alt="" />
					<span>绿色</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2392127528,3353602354&fm=200&gp=0.jpg" alt="" />
					<span>粉色</span>
				</div>
			</div>
			<div class="huiyuanzhuanshu">
				<span class="tip">会员专属</span>
				<div class="guanfangtuijian-img">
					<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2556866974,3950952911&fm=27&gp=0.jpg" alt="" />
					<span>图片背景1</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3488945699,1385487610&fm=27&gp=0.jpg" alt="" />
					<span>图片背景2</span>
				</div>
				<div class="guanfangtuijian-img">
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4117943466,3657415489&fm=27&gp=0.jpg" alt="" />
					<span>图片背景3</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"gexinghuanfu",
		data(){
			return{
				"selected":1
			}
		}
	}
</script>

<style lang='less' scoped>
	.gexinghuanfu {
	.gexinghuanfu-head{
		width: 100%;
		height: 1.28rem;
		box-sizing: border-box;
		padding-left: 1rem;
		position:relative;
		background: linear-gradient(to right, #6d2ada, #af24a5, #e51f7e);
		.fanhui{
			position: absolute;
				left: 0.25rem;
				top: 0.325rem;
				display: inline-block;
				width: 0.6rem;
				height: 0.6rem;
				background: url(../../assets/images/fanhui.png);
				background-size: 0.6rem 0.6rem;
		}
		.gxhf{
			line-height: 1.28rem;
			font-size: 0.36rem;
			color: #FFFFFF;
		}
	}
		.pifucon{
			.guanfangtuijian,.tuijian,.huiyuanzhuanshu{
				width: 100%;
				height: 4.5rem;
				.tip{	
					display: block;	
					font-size: 36/100rem;
					margin-left: 10/100rem;
					padding-left: 10/100rem;
					border-left: 3px solid #9844a1;
					margin-bottom: 20/100rem;
				}
				.guanfangtuijian-img{
					float: left;
					width: 25%;
					height:3rem;
					padding: 0.05rem 0.05rem;
					box-sizing: border-box;
					img{
						width: 100%;
						height: 100%;
					}
					span{
						display: block;
						height: 0.4rem;
						line-height: 0.4rem;
						width: 100%;
						text-align: center;
						font-size: 0.3rem;
					}
				}
			}
			.guanfangtuijian{
				margin-top: 0.45rem;
			}
		}
	}
</style>