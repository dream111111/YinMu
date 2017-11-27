<template>
  <div class="main">
     <transition name="logo">
        <div class="logo1" v-if='show'></div>
     </transition>
    <div class="banner" v-if='bannershow'>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/images/recommend/loader1.png">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/recommend/loader2.png">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/recommend/loader3.png">
        <div class="start" @click='change'></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <!-- <Login v-if='!bannershow' /> -->
  <Hello v-if='!bannershow' />
  </div>
</template>

<script>
import Hello from './user/Hello'
import LoginReg from './user/login-reg'

export default {

  data () {
    return {
        show:true,
        bannershow:true,
        swiperOption: {
              grabCursor: true,
              setWrapperSize: true,
              autoHeight: true,
              pagination: '.swiper-pagination',
              paginationClickable: true,
              prevButton: '.swiper-button-prev',
              nextButton: '.swiper-button-next',
              observeParents: true
        }

    }
  },
  components:{
    Hello,
    LoginReg 
  },
  methods:{
    change(){
        this.bannershow=!this.bannershow;
    }

  },
    mounted:function(){
        var self=this;
        setTimeout(function(){
            hide(self);
        }, 3000)
        
        function hide(self){
            self.show=false;
        }
    }
}
</script>

<style lang='less'>
.main{
    position: relative;
        .logo-leave-active {
          animation: fadeOutUp 1.5s ;
        }
 
    .logo1{
        position: absolute;
        width: 100%;
        height: 1334/100rem;
        background: url(../assets/images/recommend/logo.png) no-repeat; 
        background-size: 750/100rem 1334/100rem;
        z-index: 10;  
    }
    .swiper-pagination-bullet{
        background: #fff !important;
    }
    .banner{
        height: 300/100rem;
            .swiper-slide{
                width: 100%;
                height: 1334/100rem;
                position: relative;
                    .start{
                        width: 400/100rem;
                        height: 65/100rem;
                        background: transparent;
                        position: absolute;
                        top:80%;
                        left:28%;
                        z-index: 10;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
            }
    }
}

</style>
