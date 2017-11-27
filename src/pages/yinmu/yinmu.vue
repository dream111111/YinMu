<template>
  <div class="layout">
  	<mt-navbar class="page-part" v-model="selected"> 
	  <mt-tab-item id="1">推荐</mt-tab-item>
	  <mt-tab-item id="2">歌单</mt-tab-item>
	  <mt-tab-item id="3">电台</mt-tab-item>
	  <mt-tab-item id="4">榜单</mt-tab-item>
	</mt-navbar>
	 <Banner />
	<!-- tab-container -->
	<mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
         <Recommend/>
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
         <MusicGedan />
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
         <YinmuDiantai />
      </mt-tab-container-item>  
      <mt-tab-container-item id="4">  
         <SongList />
      </mt-tab-container-item> 
    </mt-tab-container> 
  </div>
</template>

<script>
import Banner from '../common/banner'
import Recommend from './yinmu-child/Recommend'
import MusicGedan from './yinmu-child/music_gedan1'
import YinmuDiantai from './yinmu-child/yinmu-diantai'
import SongList from './yinmu-child/songList'
  export default {
  	name:'layout',
    data() {
      return {
      		selected:'1'
      };
    },
    components:{
    	Banner,
    	Recommend,
    	MusicGedan,
    	YinmuDiantai,
    	SongList
    },
    created(){
    	this.selected = this.$route.params.selected ? this.$route.params.selected : "1";
    }
   
  };
</script>
<style lang='less' scoped>
	
</style>