<template>
  <div class="index">
    <div :class=" aside ? 'ATiem' : '' ">
        <Heads @sendInfo='getNewPage'  @sendAside='getAside' v-if='fadeOut'/>
        <router-view v-if='fadeOut'/>
        <Foots v-if='fadeOut'/>
        <Search @selectPage='getSelectPage' v-if='fadeIn'/>
           
    </div>
    <transition  name='blacks'> 
        <div class="cover"  v-if='aside' @click='Adisp'></div> 
    </transition>
    <transition  name='trans'> 
      <Asides v-if='aside' />
    </transition>
  </div>
</template>

<script>
import Heads from '../components/head';
import Foots from '../components/foot';
import Search from './indexOthers/Search';
import Asides from './indexOthers/aside';


export default {
  name: 'index',
  data () {
    return {
    	fadeOut:true,
    	fadeIn:false,
      aside:false
    }

  },
  components:{
  	Heads,
  	Foots,
  	Search,
    Asides,
  },
   methods:{
    	getNewPage(data){
    		this.fadeOut = data;
    		this.fadeIn = !this.fadeIn;
    	},
    	getSelectPage(data){
    		this.fadeIn = data;
    		this.fadeOut = !this.fadeOut;
    	},
      getAside(data){
        this.aside=data;
      },
      Adisp(){
        if(this.aside){
            this.aside=!this.aside;
        }
      }
    }
}

</script>


<style lang='less' scoped>
.index{
  position: relative;
    .ATiem{
        height: 1334/100rem;
        overflow: hidden;
      }
    .cover{
        width: 100%;
        height: 1334/100rem;
        position: absolute;
        top:0;
        background:rgba(0,0,0,0.5);
        z-index: 99;
    }
    .blacks-enter-active {
      animation: fadeIn 1s ;
    }
    .blacks-leave-active {
        animation: fadeOut 1.5s ;
    }
    .trans-enter-active {
        animation: fadeInLeft 1s ;
    }
    .trans-leave-active {
        animation: fadeOutLeft 1.5s ;
    }
}



</style>