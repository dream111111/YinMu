<template>
	<div class="tinggeshiqu">
		<div class="tgsq-head">
			<router-link tag="a" to="/index/yinmu"></router-link>
			<p>听歌识曲</p>
		</div>
		<div class="shibie">
			<p class="sb">正在识别</p>
			<p class="sh">小沐正在努力识别中，请稍后</p>
		</div>
		<img class="biglogo" src="../../assets/images/tinggeshiqu1.png"/>
		<div class="lishi">
			<span class="shiqu">听歌识曲</span>
			<span class="bsls">辨识历史</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "tinggeshiqu",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
.tinggeshiqu{
	width: 100%;
	.tgsq-head{
		width: 100%;
		height: 128/100rem;
		background: linear-gradient(to right, #6d2ada, #af24a5, #e51f7e);
		position:relative;
		a{
			width: 0.6rem;
			height: 0.6rem;
			position: absolute;
			top: 0.3rem;
			left: 0.3rem;
			background: url(../../assets/images/fanhui.png);
			background-size: 0.6rem 0.6rem;
		}
		p{	
			text-align: center;
			width: 100%;
			height: 1.28rem;
			font-size: 0.4rem;
			line-height:1.28rem;
			color: #FFFFFF;
			font-weight: 100;
		}
	}
	.shibie{
		padding: 0.7rem 2rem;
		.sb{
			text-align: center;
			font-size: 0.36rem;
			line-height: 0.6rem;
			color: #000000;
		}
		.sh{
			text-align: center;
			font-size: 0.24rem;
			line-height: 0.6rem;
			color: #1F1E1F;
		}
	}
	.biglogo{
		padding-bottom: 2.35rem;
		display: block;
		width: 5.6rem;
		height: 5.7rem;
		margin: 0 auto;
	}
	.lishi{
		margin:0 auto 0.3rem;
		width: 5.1rem;
		height: 1.05rem;
		span{
			display: inline-block;
			width: 47%;
			font-size: 0.32rem;
			text-align: center;
			line-height: 0.65rem;
			position: relative;
		}
		.shiqu:after{
			content: "";
			display: block;
			width: 0.5rem;
			height: 0.5rem;
			position: absolute;
			left: 0.9rem;
			top: -0.45rem;
			background: url(../../assets/images/tinggeshiqu.png);
			background-size: 0.5rem 0.5rem;
		}
		.bsls:after{
			content: "";
			display: block;
			width: 0.5rem;
			height: 0.5rem;
			position: absolute;
			left: 0.9rem;
			top: -0.45rem;
			background: url(../../assets/images/dingshibofang.png);
			background-size: 0.5rem 0.5rem;
		}
	}
}
</style>