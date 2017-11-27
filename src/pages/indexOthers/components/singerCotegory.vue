<template>
	<div class="singerCotegory">

	  <div class="selected">
	  		<div class="wrapper">
		  		<div class="fanhui">
		  			<router-link to='/index/yinmu'>	
		  			<img  src="http://127.0.0.1:8080/src/assets/images/images/fanhui_03.png" alt="">
		  			</router-link>	
		  		</div>
		  		<div class="inputSong">
		  			 歌手分类
		  		</div>
	  		</div>
  		</div>
		<div class="list">
			<ul v-for='(singer,index) in singerInfo' :key='index'>
				<li v-for='(sing,ind) in singer.name'>{{sing}} <span>＞</span> </li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'singerCotegory',
		data(){
			return{
				singerInfo:[
						{
							name:["华语男歌手","华语女歌手","华语乐队/组合"]
						},
						{
							name:["欧美男歌手","欧美女歌手","欧美乐队/组合"]
						},
						{
							name:["日本男歌手","日本女歌手","日本乐队/组合"]
						},
						{
							name:["韩国男歌手","韩国女歌手","韩国乐队/组合"]
						},
						{
							name:["其他男歌手","其他女歌手","其他乐队/组合"]
						}




				]
			}
		}
	}
</script>
<style scoped lang='less' >
	.singerCotegory{
		width: 100%;
		font-size: 0.38rem;
		color: #1f1e1f;
		.selected{
		width: 100%;
		height: 1.28rem;
		background:linear-gradient(to right,#6d2ada,#af24a5,#e51f7e);
		position: relative;
		overflow: hidden;
		.wrapper{
			box-sizing: border-box;
			margin-top: 0.2rem;
			height: 0.88rem;
			padding: 0.2rem;

			&>div{
			float: left;
			}
		.fanhui{
			padding: 0.1rem 0.2rem;
			box-sizing: border-box;
			width: 10%;
			height: 0.6rem;
			margin-right: 1%;
				img{
					float: left;
					width: 0.26rem;
					height: 0.44rem ;
				}
			}
			.inputSong{
				width: 88%;
				height: 1.28rem;
				text-align: center;
				color: #fff;
				margin-top: 0.16rem;
				
				}
			}
		
		}
		.list{
			border-top: 0.15rem solid #eee;
			ul{
				width: 100%;
				background: #fff;
				border-bottom: 0.1rem solid #eee;
			li{
				padding: 0.2rem;
				box-sizing: border-box;
				border-bottom: 1px solid #eee;
				span{
					float: right;
					color: #999;
				}
			}
		}
		}
		
	}
</style>