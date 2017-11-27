<template>
<div>
  <div class="selected">
  		<div class="wrapper">
	  		<div class="fanhui">
	  			<img @click='fanhui' src="../../assets/images/images/fanhui_03.png" alt="">
	  		</div>
	  		<div class="inputSong">
	  			 <input type="text" placeholder="请输入歌曲名/歌手名"  v-model="searchSongInfo">
	  			 <span  class="search" @click='requestInfo'></span>
	  		</div>
  		</div>
  		
  </div>
  <div class="xiamianInfo" v-if='xmInfo'>
		  <router-link to='/search/singerCotegory' tag='div' class="singerCategory">
			  <p>歌手分类</p><span>＞</span>
		  </router-link>

		  <div class="hotSearch">
		  	<span>热门搜索</span>
		  	<ul>
		  		<li v-for='(hot,index) in hotSongList'>{{hot.name}}</li>
		  	</ul>

		  </div>
   </div>
	<div class="bangdan" v-else>
			<div class="bangdanCon">
				<div class="bangbanBox">
					<a class="m-sgitem" href="#" v-for="(list,index) in result">
						<div class="sgfl sgfl-cred">{{index+1}}</div>
						<div class="sgfr f-bd f-bd-btm">
							<div class="sgchfl">
								<div class="f-thide sgtl">{{list.name}}</div>
								<div class="f-thide sginfo">
									<i class="u-hmsprt sghot"></i> {{list.name}}-{{list.singer}}
								</div>
							</div>
							<div class="sgchfr">
								<router-link tag='span' :to="{ name: 'player', params: { Id: list.id,Time:list.playtime,name:list.name,singer:list.singer}}" class="u-hmsprt sgchply" ></router-link>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
</div>
</template>

<script>
export default {
  name: 'selected',
  data () {
    return {
    	status:false,
    	xmInfo:true,
    	hotSongList:'',
    	searchSongInfo:'',
    	keywords:'',
    	result:''
    }
  },
  created(){
  	var currentUrl = this.HOST+'/yinmu/hotSongList.json';
  	this.$axios.get(currentUrl)
  		.then(res =>{
  			 res.data.hotSongList.splice(5,12)
  			this.hotSongList = res.data.hotSongList;  
  		})
  		.catch(error =>{
  			console.log(error);
  		})
  },
  components:{
  
  },
  methods:{
  		fanhui(){

  			this.$emit('selectPage',this.status)
  		},
  		requestInfo(){
  			this.xmInfo = false;
  			this.keywords = this.searchSongInfo;
  			var currentUrl = this.$host + "fcgi-bin/music_search_new_platform?t=0&n=20&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=" + this.keywords
  			this.$axios.get(currentUrl)
  				.then(res => {
  					//处理数据
  					var lists =  res.data.data.song.list;
  					var arr = [];
  					var arrNew = [];
  					for(var i in lists){
  						var obj = {};
  						arr = lists[i].f.split('|');
  						obj.id = arr[0];
  						obj.name = arr[1];
  						obj.playtime = arr[7];
  						obj.imgId = arr[4];
  						obj.singer = arr[3];
  						arrNew.push(obj)
  					}
  					this.result = arrNew;
  				})
  				.catch(error => {
  					console.log(error);
  				})
  		}
  },
  watch:{

  }
}

</script>


<style lang='less' scoped>
	.selected{
		width: 100%;
		height: 1.28rem;
		overflow: hidden;
		background:linear-gradient(to right,#6d2ada,#af24a5,#e51f7e);
		position: relative;
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
			height: 0.6rem;
			position: relative;
			.search{
				position: absolute;
				width: 0.4rem;
    		height: 0.6rem;
				right: 0.2rem;
				top: 0; 
				background: url(../../assets/images/search.png) no-repeat 0 0.15rem;
				background-size: 0.3rem 0.3rem;
			}
			input{
				width: 100%;
				float: left;
				outline: none;
				border: none;
				height: 0.55rem;
				border-radius: 5px;
				color: #fff;
				text-indent: 0.2rem;
				font-size: 0.30rem;
				font-family: 'Times New Roman';
				background: rgba(255, 255, 255, 0.2);
				
			}
			input::-webkit-input-placeholder{
					color: rgba(255, 255, 255, 0.8);
				}
		}
		}
		
	}
	.singerCategory{
		font-family: 'PingFang';
		font-size: 0.3rem;
		height: 0.9rem;
		line-height: 0.9rem;
		border-bottom: 0.5px solid #ccc;
		margin-bottom: 0.4rem;
		p{
			float: left;
			margin-left: 3.3rem;
			position: relative;
			&:before{
				content: '';
				position: absolute;
				top: 0.28rem;
				left: -0.5rem;
				width: 0.3rem;
				height: 0.4rem;
				background: url(../../assets/images/geshou.png);
				background-size: 0.3rem 0.4rem;
			}
			span{
				display: inline-block;
				width: 0.4rem;
				height: 0.4rem;
				font-size: 0.4rem;
				font-weight: normal;
				color: #666;
			}
			
		}
	}
	.hotSearch{
		font-size: 0.3rem;
		span{
			margin-left: 0.2rem;
			font-size: 0.26rem;
			color: #666;
		}
		ul{
			padding: 0 0.2rem;
			box-sizing: border-box;
			width: 7.5rem;
			margin-top: 0.16rem;
			overflow: hidden;
			li{
				float: left;
				padding: 0.16rem 0.3rem;
				border: 0.4px solid #ccc;
				border-radius: 40/100rem;
				margin-right: 0.18rem;
				margin-bottom: 0.2rem;
			}
		}
	}
	.bangdan {
		width: 100%;
		margin-top: 8/100rem;
		.bangdanCon {
			.bangbanBox {
				margin: 0 auto;
				a {
					color: #333333;
					padding: 0.1rem 0;
					box-sizing: border-box;
				}
				.m-sgitem,
				.m-sgitem .sgfl {
					display: -webkit-box;
					display: flex;
				}
				.m-sgitem .sgfl-cred {
					color: #df3436;
				}
				.m-sgitem .sgfl {
					-webkit-box-align: center;
					align-items: center;
					width: 28/50rem;
					font-size: 17px;
					color: #999;
					font-family: geneva;
					padding-left: 0.4rem;
					text-align: center;
				}
				.m-sgitem .sgfr {
					-webkit-box-flex: 1;
					flex: 1 1 auto;
					display: -webkit-box;
					display: flex;
					position: relative;
					padding-left: 0.2rem;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				}
				.m-sgitem .sgchfl {
					-webkit-box-flex: 1;
					flex: 1 1 auto;
					padding: 6px 0;
					width: 0;
				}
				.m-sgitem .sgtl {
					font-size: 0.32rem;
					line-height: 0.6rem
				}
				.f-thide {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					word-break: normal;
				}
				.m-sgitem .sginfo {
					font-size: 12px;
					color: #888;
					margin-top: 5px;
				}
				.f-thide {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					word-break: normal;
				}
				.m-sgitem .sghot {
					display: inline-block;
					width: 12/50rem;
					height: 8/50rem;
					margin-right: 4px;
				}
				.u-hmsprt {
					background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%20%E2%80%A6) no-repeat;
					background-size: 166px 97px;
				}
				.m-sgitem .sgchfr {
					display: -webkit-box;
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					padding: 0 20px 0 0;
				}
				.m-sgitem .sgchply {
					display: inline-block;
					width: 22/50rem;
					height: 22/50rem;
					background-position: -24/50rem 0;
				}
				.u-hmsprt {
					background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28 
 …) no-repeat;
					background-size: 166/50rem 97/50rem;
				}
			}
		}
	}
</style>