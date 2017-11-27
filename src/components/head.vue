<template>
  <div class="head">
  		<span class="menu" @click='pushAside'></span>
		<ul>
			<li><router-link active-class='active' to="/index/yinmu">音沐</router-link> </li>
			<li><router-link active-class='active' to="/index/mine">我的</router-link ></li>
			<li><router-link active-class='active' to="/index/dynamic">动态</router-link ></li>
		</ul>
		<span class="search" @click='search'></span>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
    	status:false,
    	active:true,
    	showAside:true
    }
  },
  methods:{
  	search(){

  		this.$emit('sendInfo',this.status);

  	},
  	pushAside(){
  		this.$emit('sendAside',this.showAside);


  	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	.head{
		width: 100%;
		height: 1.28rem;
		overflow: hidden;
		background:linear-gradient(to right,#6d2ada,#af24a5,#e51f7e);
		position: relative;
		.menu{
			position:absolute;
			left: 0.25rem;
			top: 50%;
			margin-top: -0.25rem;
			width:0.5rem;
			height:0.5rem;
			background: url(../assets/images/menu.png) no-repeat;
			background-size: 0.5rem 0.5rem;
		
			}
		.search{
			position:absolute;
			right: 0.25rem;
			top: 50%;
			transform:translateY(-0.25rem);
			width:0.5rem;
			height:0.5rem;
			background: url(../assets/images/search.png) no-repeat;
			background-size: 0.5rem 0.5rem;
			
		}
		ul{
			width:3.8rem;
			margin-top:0.44rem;
			margin-left: 1.85rem;
			overflow: hidden;
			line-height: 0.37rem;
			li{
				float: left;
				&:nth-of-type(2){
					margin: 0rem 0.67rem;
				}
				a{
					height:0.4rem;
					font-size: 0.4rem;
					color:rgba(255, 255, 255,0.5);
					vertical-align: middle;
					display: inline-block;
				}
				.active{
					color:#fff;
				}
			}
		}
	}
</style>