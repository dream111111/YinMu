<template>
  <div class="songList">
	<ul>
		<li v-for='(song,index) in songList' :key='index' >
			<router-link :to="'/listDetail/'+song.id">
				<img :src="song.imgUrl" alt="">
				<h3>{{song.title}}</h3>
				<div class="song_title">
					<div>
						<p v-for='(info,index) in song.songInfo'>{{info}}</p>
					</div>
				</div>
			</router-link>
		</li>
	</ul>
  </div>
</template>

<script>

export default {
  name: 'songList',
  data () {
    return {
    	songList:''
    	
    }
  },
  created(){
  	var currentUrl = this.HOST+"/yinmu/songList.json";
  	this.$axios.get(currentUrl).
  		then(res =>{
  	 		this.songList = res.data.songList;
  		})
  		.catch(error =>{
  			console.log(error);
  		})
  }
}
</script>


<style lang='less' scoped>
.songList{
	ul{
		
		padding: 0.1rem;
		overflow: hidden;
		li{
			float: left;
			width: 3.6rem;
			height: 3.5rem;
			margin-bottom: 0.1rem;
			&:nth-of-type(1),&:nth-of-type(3){
				margin-right:0.1rem;
				 
			}
			a{
				height: 3.5rem;
				position: relative;
				display: block;
				color:3e3a39;
				font-size:0.24rem;
				font-family: 'PingFang';
				img{
					width: 100%;
					height: 3.5rem;
				}
				h3{
					width: 100%;
					text-align: center;
					font-size: 0.3rem;
					position: absolute;
					left: 0;
					top: 48%;
					color: #fff;
					
				}
				.song_title{
					width: 100%;
					height: 1.2rem;
					background: #fff;
					position: absolute;
					bottom: 0;
					left: 0;
					&>div{
						padding: 0.30rem 0.1rem;
						box-sizing: border-box;
						p{
							margin-bottom: 0.15rem;
						}

					}
				}

				}
		}
	}
}
	
</style>