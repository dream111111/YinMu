<template>
  <div class="dynamic">
  	<div class="dy_info" v-for='(value,index) in result' :key='index'>
  		<div class="user">
  			<router-link tag="img" :to="'/userinfo/'+value.id" :src="value.userImg"></router-link>
  			
  			<div class="userInfo">
  				<h4>{{value.userName}}</h4>
  				<p>{{value.time}}</p>
        </div>
          <a href="javascript:;" v-if="value.guanzhu" @click='changeText(value.id)'>+关注</a>
  				<a href="javascript:;" v-else class="already" @click='changeText(value.id)'>√已关注</a>
  			
  		</div>

  		<div class="content" >
        <div  v-if='value.text'>
          <p>{{value.desc}}</p>
          <div class="quanwen" @click='spread(value.id)'>全文</div>
        </div>
  			 <div v-else>
           <p>{{value.content}}</p>
           <div class="life" @click='spread(value.id)'>收起↑</div>
         </div>
        <ul >
          <li v-for='(value,index) in value.contentImg' :key='index' >
          <img :src="value">
        </li>
        </ul>
  		</div>

  		<div class="comment">
  			<a href="javascript:;" >
          <span class="share"></span>
           {{ value.share}}
          </a>
  			<a href="javascript:;">
          <span class="talk"></span>
          {{ value.talk }}
        </a>
  			<a href="javascript:;">
          <span  class='like' v-on:click.once='dianzan(value.id)'></span>
       {{ value.like }}
        </a>
  		</div>
      <div class="line"></div>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
      result:''
    }
  },
  created(){
    var currentUrl = this.HOST+"/yinmu/dynamic.json";
    this.$axios.get(currentUrl)
      .then(res =>{
        this.result = res.data.userinfo;
//      console.log(res.data.userinfo)
      })
      .catch(error =>{
        console.log(error);
      })
    
  },
  methods:{
    changeText(event){
      this.result[event].guanzhu = !this.result[event].guanzhu;
    },
    spread(event){
     this.result[event].text = !this.result[event].text;
    },
    dianzan(event){
       this.result[event].like++;
     }
  }
}
</script>

<style lang='less' scoped>
.dynamic{
  width: 100%;
  font-size: 0.28rem;
  font-family: 'PingFang SC Regular';
  color: #1f1e1f;
  padding-bottom: 0.8rem;
	
		.dy_info{
      margin-top: 1px;
      overflow: hidden;
      .line{
          width: 100%;
          height: 1px;
          background: #dfdfe0;
          margin-top: 40px;
        }
			margin:0.25rem 0.16rem;
				.user{
          height: 0.9rem;
          overflow: hidden;
            img{
              width: 0.9rem;
              height: 0.9rem;
              float: left;
              border-radius: 50%;
            }
            .userInfo{
              float: left;
              margin-top: 0.1rem;
              overflow: hidden;
              margin-left: 0.2rem;
              h4{
                font-size: 0.38rem;
                margin-bottom: 0.1rem;
              }
              p{
                color:#aaa;
              }
            }
            a{
                display: inline-block;
                margin-top: 0.1rem;
                float: right;
                font-size: 0.38rem;
                color: #e73e32;
              }
              .already{
                font-size: 0.34rem;
                color: #aaa;
              }
				}
        .content{
          margin-top: 0.15rem;
          letter-spacing:1px;
          line-height: 20px;
          .life{
            color: #995fdd;
          }
          .quanwen{
            color: #995fdd;
          }

          ul{
              margin-top: 0.16rem;
              width: 7.5rem;
              overflow: hidden;
            li{
              float: left;
              img{
                width: 230/100rem;
                height:230/100rem; 
                margin-right: 0.1rem;
              }
            }
          }

        }
        .comment{
          margin-top: 0.16rem;
          float: right;
          a{
              float: right;
              width: 0.5rem;
              height: 0.4rem;
              line-height: 0.4rem;
              position: relative;
              margin-right: 70/100rem;
              span{
                content: '';
                width: 42/100rem;
                height: 40/100rem;
                position: absolute;
                left: -50/100rem;
                bottom: 0;
                background: url(../../assets/images/fenxiang.png) no-repeat;
                background-size: 42/100rem 40/100rem;
              
              }
              &:nth-of-type(1){
                margin-right: 8/100rem;
               span{
                  background: url(../../assets/images/pinglun.png) no-repeat;
                  background-size: 42/100rem 40/100rem;
                  
                }
              }
              &:nth-of-type(3){
                span{
                  background: url(../../assets/images/dianzan.png) no-repeat;
                  background-size: 42/100rem 40/100rem;
                }
              }
           
          }
        }
		}


}

</style>