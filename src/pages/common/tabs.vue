<template>
  <div class="tabs">
  	<mt-navbar class="page-part" v-model="selected"> 
	  <mt-tab-item id="1">我喜欢</mt-tab-item>
	  <mt-tab-item id="2">全部</mt-tab-item>
	  <mt-tab-item id="3">下载</mt-tab-item>
	  <mt-tab-item id="4">最近播放</mt-tab-item>
	</mt-navbar>

  	<mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
         
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
        
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
         
      </mt-tab-container-item>  
      <mt-tab-container-item id="4">  
        
      </mt-tab-container-item> 
    </mt-tab-container>

   </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
    	selected:'1'
    }
  }
}

</script>

<style lang='less' scoped>
	
</style>