<template>
	<div class="userinfo-bianji">
		<div class="bianji-head">
			<router-link class="fanhui" tag="a" to="/user/myinfo">
			</router-link>
			<p class="wodeziliao">我的资料</p>
		</div>
		<div class="bianji-con">
			<div class="touxiang">头像
				<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2391766524,3356885949&fm=27&gp=0.jpg" alt="" />
			</div>
			<div class="zhuyebeijing">个人主页背景
				<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1479801845,3872710611&fm=27&gp=0.jpg"/>
			</div>
			<div class="nicheng">昵称
				<span>remon</span>
			</div>
			<div class="gender">性别
				<span>女</span>
			</div>
			<div class="erweima">二维码
				<img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58"/>
			</div>
			<div class="birthday">生日
				<span>1995-10-20</span>
			</div>
			<div class="area">地区
				<span>北京</span>
			</div>
			<div class="univercity">大学
				<span>北京大学</span>
			</div>
			<div class="introduce">介绍
				
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:"userinfo-bianji",
	data(){
		return{
			
		}
	}
}
</script>

<style lang="less" scoped>
.userinfo-bianji{
	.bianji-head{
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
		.wodeziliao{
			line-height: 1.28rem;
			font-size: 0.36rem;
			color: #FFFFFF;
		}
	}
	.bianji-con{
		width: 100%;
		&>div{
			font-size: 0.3rem;
			height: 1.28rem;
			line-height:1.28rem;
			width: 100%;
			border-bottom: 1px solid #e6ebf5;
			padding: 0 0.3rem;
			box-sizing: border-box;
		}
		.introduce{
			border-bottom: none;
		}
		.touxiang,.zhuyebeijing,.erweima{
			position: relative;
			img{
				position: absolute;
				top: 0.1rem;
				right: 0.1rem;
				float: right;
				width: 1.08rem;
				height: 1.08rem;
			}
		}
		.touxiang{
			img{
				border-radius: 50%;
			}
		}
		.nicheng,.birthday,.univercity,.area,.gender{
			span{
				float: right;
			}
		}
		
	}
}
</style>