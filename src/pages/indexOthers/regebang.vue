<template>
	<div class="regebang">
		<img src="http://127.0.0.1:8080/src/assets/images/images/hotbang_01.png" alt="" />
		<router-link class="back" tag="span" to="/index/yinmu"></router-link>
		<div class="content">
			<div class="left">
				<p>播放全部</p>
			</div>
			<div class="right">
				<p>多选</p>
			</div>
		</div>
		<GeDan/>
	</div>
</template>

<script>
	import GeDan from "../yinmu/yinmu-child/music_gedan.vue"
	export default{
		name:"regebang",
		data(){
			return{
				
			}
		},
		components:{
			GeDan
		}
	}
</script>

<style scoped lang="less">
.regebang{
	width: 100%;
	position: relative;
	img{
		width: 100%;
		height: 5rem;
	}
	.back{
		width: 0.5rem;
		height: 0.5rem;
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		background: url(http://127.0.0.1:8080/src/assets/images/fanhui.png)no-repeat;
		background-size:0.5rem 0.5rem;
	}
	.content{
		font-size: 28/100rem;
		overflow: hidden;
		border-bottom: 1px solid #E3E4E8;
		.left{
			float: left;
			position: relative;
			padding: 0.4rem 1.4rem;
			&>:before{
				content: "";
				position: absolute;
				width: 0.5rem;
				height: 0.5rem;
				left: 0.65rem;
				top: 0.3rem;
				background: url(http://127.0.0.1:8080/src/assets/images/playAll.png) no-repeat;
				background-size: 0.5rem 0.5rem;
			}
		}
		.right{
			float: right;
			position: relative;
			padding: 20px 40px;
			&>:before{
				content: "";
				position: absolute;
				width: 0.5rem;
				height: 0.5rem;
				background: url(http://127.0.0.1:8080/src/assets/images/choseAll.png)no-repeat;
				background-size: 0.5rem 0.5rem;
				left: 0.1rem;
				top: 0.3rem;
			}
		}
	}
}
</style>