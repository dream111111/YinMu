<template>
<div class="party">
  <div class="selected">
  		<div class="wrapper">
	  		<div class="fanhui">
	  			<router-link to="/index/yinmu">
	  			<img src="http://127.0.0.1:8080/src/assets/images/images/fanhui_03.png" alt="">
	  			</router-link>
	  		</div>
	  		<div class="inputSong">
	  			 <span class="search"></span> 
	  			<input type="text" placeholder="请输入歌曲名/歌手名">	
	  			 <span class="luyin"></span>
	  		</div>
  		</div>
  		
  </div>
  <Banner/>
  <div class="modules">
	  	<div class="singer"><span></span><a href="#">歌手</a></div>
	  	<div class="category"><span></span><a href="#">分类</a></div>
	  	<div class="already"><span></span><a href="#">已点</a></div>
  </div>
  <mt-navbar class="page-part" v-model="selected"> 
	  <mt-tab-item id="1">热歌推荐</mt-tab-item>
	  <mt-tab-item id="2">猜你喜欢</mt-tab-item>
	  <mt-tab-item id="3">新歌首发</mt-tab-item>
	</mt-navbar>

  	<mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
         <div class="KGE">
    	<div class="Kge" v-for='(list,index) in listData' :key='index'>
    		<div class="touxiang">
    			<img :src="list.authortouxiang" alt="">
    		</div>
    		<div class="text">
    			<h3>{{list.name}} <span>评分</span></h3>
    			<span>{{list.singer}}</span>
    			<p>大家都爱唱</p>
    		</div>
    		<div class="KK">
    			<a href="#">K歌</a>
    		</div>
    	
    	</div>
    </div>
      </mt-tab-container-item>  
      <mt-tab-container-item id="2"> 
      <div class="KGE">
    	<div class="Kge" v-for='(list,index) in listData1' :key='index'>
    		<div class="touxiang">
    			<img :src="list.authortouxiang" alt="">
    		</div>
    		<div class="text">
    			<h3>{{list.name}} <span>评分</span></h3>
    			<span>{{list.singer}}</span>
    			<p>大家都爱唱</p>
    		</div>
   
    	
    	</div>
    </div> 
        
      </mt-tab-container-item>  
      <mt-tab-container-item id="3"> 

      <div class="KGE">
    	<div class="Kge" v-for='(list,index) in listData' :key='index'>
    		<div class="touxiang">
    			<img :src="list.authortouxiang" alt="">
    		</div>
    		<div class="text">
    			<h3>{{list.name}} <span>评分</span></h3>
    			<span>{{list.singer}}</span>
    			<p>大家都爱唱</p>
    		</div>
 
    	
    	</div>
    </div> 
         
      </mt-tab-container-item>  
    </mt-tab-container>
    
</div>
</template>

<script>
 import Banner from '../common/banner'
export default {
  name: 'party',
  data () {
    return {
    	status:false,
    	selected:'1',
    	listData: [
    			{
		            "id": "7216370",
		            "name": "王妃",
		            "singer": "萧敬腾",
		            "playtime": "558",
		            "authortouxiang": "http://p4.music.126.net/q1NrWVdK9sFmizOoL0pI7w==/109951163025047328.jpg?param=200y200"
		        },
		        {
		            "id": "1071114",
		            "name": "Set Fire to the Rain",
		            "singer": "阿黛尔",
		            "playtime": "242",
		            "authortouxiang": "http://p3.music.126.net/1hPWZO3vplESvBLx9Y0l3w==/109951162999256532.jpg?param=200y200"
		        },
		        {
		            "id": "106291303",
		            "name": "龙卷风 (Live)",
		            "singer": "周杰伦",
		            "playtime": "244",
		            "authortouxiang": "http://p4.music.126.net/RdCx3U88R7lxi0rKd4DDJQ==/109951162979415987.jpg?param=200y200"
		        },
		        {
		            "id": "641521",
		            "name": "如果没有你",
		            "singer": "萧敬腾",
		            "playtime": "276",
		            "authortouxiang": "http://p4.music.126.net/-rwZ7JkArtmLYvfs6N25RQ==/109951163064276469.jpg?param=200y200"
		        },
		        {
		            "id": "104869416",
		            "name": "Skyfall",
		            "singer": "阿黛尔",
		            "playtime": "286",
		            "authortouxiang": "http://p3.music.126.net/iRGlHZ-UETH2FAhB54LEYA==/109951162978134264.jpg?param=200y200"
		        },
		        {
		            "id": "641520",
		            "name": "新不了情",
		            "singer": "萧敬腾",
		            "playtime": "264",
		            "authortouxiang": "http://p3.music.126.net/Q8TSId8B_ML13GvAjD1rEw==/109951163061064073.jpg?param=200y200"
		        }
					
		],
		listData1: [
		    	{
		            "id": "107192078",
		            "name": "告白气球",
		            "singer": "周杰伦",
		            "playtime": "215",
		            "authortouxiang": "http://p3.music.126.net/Q8TSId8B_ML13GvAjD1rEw==/109951163061064073.jpg?param=200y200"
		        },
		         {
		            "id": "102174489",
		            "name": "多远都要在一起",
		            "singer": "G.E.M. 邓紫棋",
		            "playtime": "217",
		            "authortouxiang": "http://p4.music.126.net/q1NrWVdK9sFmizOoL0pI7w==/109951163025047328.jpg?param=200y200"
		        },
		         {
		            "id": "204363498",
		            "name": "今天雨",
		            "singer": "李宇春",
		            "playtime": "232",
		            "authortouxiang": "http://p3.music.126.net/1hPWZO3vplESvBLx9Y0l3w==/109951162999256532.jpg?param=200y200"
		        },
		        {
		            "id": "101369814",
		            "name": "算什么男人",
		            "singer": "周杰伦",
		            "playtime": "289",
		            "authortouxiang": "http://p3.music.126.net/iRGlHZ-UETH2FAhB54LEYA==/109951162978134264.jpg?param=200y200"
		        },
		        {
		            "id": "204672190",
		            "name": "流行",
		            "singer": "李宇春",
		            "playtime": "197",
		            "authortouxiang": "http://p4.music.126.net/-rwZ7JkArtmLYvfs6N25RQ==/109951163064276469.jpg?param=200y200"
		        },
		        {
		            "id": "3585884",
		            "name": "明明就",
		            "singer": "周杰伦",
		            "playtime": "260",
		            "authortouxiang": "http://p4.music.126.net/RdCx3U88R7lxi0rKd4DDJQ==/109951162979415987.jpg?param=200y200"
		        }
					
		],
		listData2: [
				{
		            "id": "7168586",
		            "name": "喜欢你",
		            "singer": "G.E.M. 邓紫棋",
		            "playtime": "239",
		            "authortouxiang": "http://p4.music.126.net/RdCx3U88R7lxi0rKd4DDJQ==/109951162979415987.jpg?param=200y200"
		        },
		        
		        {
		            "id": "1189657",
		            "name": "Rolling In The Deep",
		            "singer": "阿黛尔",
		            "playtime": "228",
		            "authortouxiang": "http://p4.music.126.net/q1NrWVdK9sFmizOoL0pI7w==/109951163025047328.jpg?param=200y200"
		        },
		        {
		            "id": "102701006",
		            "name": "你不是真正的快乐",
		            "singer": "G.E.M. 邓紫棋",
		            "playtime": "312",
		            "authortouxiang": "http://p3.music.126.net/iRGlHZ-UETH2FAhB54LEYA==/109951162978134264.jpg?param=200y200"
		        },
		         {
		            "id": "102385704",
		            "name": "怎么说我不爱你",
		            "singer": "萧敬腾",
		            "playtime": "275",
		            "authortouxiang": "http://p4.music.126.net/-rwZ7JkArtmLYvfs6N25RQ==/109951163064276469.jpg?param=200y200"
		        }, 
		        {
		            "id": "459684",
		            "name": "和你一样",
		            "singer": "李宇春",
		            "playtime": "309",
		            "authortouxiang": "http://p3.music.126.net/Q8TSId8B_ML13GvAjD1rEw==/109951163061064073.jpg?param=200y200"
		        },
		        {
		            "id": "4814942",
		            "name": "珍惜",
		            "singer": "李宇春",
		            "playtime": "300",
		            "authortouxiang": "http://p3.music.126.net/1hPWZO3vplESvBLx9Y0l3w==/109951162999256532.jpg?param=200y200"
		        }
					
		]
    }
  },
  components:{
  	Banner,
  
  },
  methods:{
  
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
				width: 0.28rem;
				height:0.6rem;
				left: 0.1rem;
				top: 0; 
				background: url(http://127.0.0.1:8080/src/assets/images/search.png) no-repeat 0 0.15rem;
				background-size: 0.28rem 0.28rem;
			}
			.luyin{
				position: absolute;
				width: 0.16rem;
				height:0.6rem;
				right: 0.2rem;
				top: 0; 
				background: url(http://127.0.0.1:8080/src/assets/images/maikefeng.png) no-repeat 0 0.15rem;
				background-size: 0.16rem 0.28rem;
			}
			input{
				width: 100%;
				float: left;
				outline: none;
				border: none;
				height: 0.55rem;
				border-radius: 5px;
				color: #fff;
				text-indent: 0.6rem;
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
	.modules{
		width: 100%;
		font-size: 0.34rem;
		overflow: hidden;
		height: 0.9rem;
		border-top: 1px solid #eee;
		border-bottom: 2px solid #eee;
		&>div{
			float:left;
			width: 33%;
			position: relative;
			padding: 0.34rem 0;
			box-sizing: border-box;
			a{
				display: inline-block;
				margin-left: 1.4rem;
				width: 1.2rem;
				box-sizing: border-box;
				border-right: 1px solid #c5c5c6;
				
			}
			span{
					width: 0.4rem;
					height: 0.4rem;
					margin-right: 0.26rem;
					position: absolute;
					left: 0.7rem;
					top: 0.26rem;
					background: url(../../assets/images/geshou.png) no-repeat;
					background-size: 0.4rem 0.4rem;
				}
		}
		.category{

			span{
				background: url(../../assets/images/fenlei.png) no-repeat;
				background-size: 0.4rem 0.4rem;
			}
		}
		.already{

			span{
				background: url(../../assets/images/yidian.png) no-repeat;
				background-size: 0.4rem 0.4rem;
			}
		}
	}
	.KGE{
		width: 100%;
		margin-top: 2px;
		font-size: 0.3rem;
		.Kge{
			border-top: 1px solid #dfdfe0;
			padding: 0.2rem;
			box-sizing: border-box;
			overflow: hidden;
			&>div{
				float: left;
			}
			.touxiang{
				img{
					width: 1.2rem;
					height: 1.2rem;
				}
			}
			.text{
				margin-left: 0.2rem;
				color: #7d7c7c;
				h3{
					color: #222222;
					font-size:0.36rem;
					span{
						font-size: 0.3rem;
						border: 1px solid #ccc;
						font-weight: bold;
					}
				}
				&>span{
					display: inline-block;
					margin: 0.15rem 0 0.12rem 0;
					font-size: 0.24rem;
					color: #111000;
				}
				p{
					font-size: 0.28rem;
					color: #111000;
				}
			}
			.KK{
				float: right;
				a{
					display: inline-block;
					text-align: center;
					line-height: 0.34rem;
					width: 1.1rem;
					height: 0.34rem;
					border:1px solid #e94c8b;
					border-radius: 5px;
					color: #e94c8b;
					margin: 0.48rem 0.2rem 0 0 ; 
				}
			}
		}
	}
</style>