<template>
  <div class="foot">
  	<div class="footer_img">
  		<router-link tag='img' src="http://127.0.0.1:8080/src/assets/images/footer.png" to="/player"></router-link>
  	</div>
  	<div class="footer_title">
  		<p>Volar</p>
  		<p>Alvaro Soler</p>
  	</div>
  	<div class="footer_play">
  		<img src="../assets/images/play.png">
  		<img src="../assets/images/liebiao.png">
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	.foot{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.98rem;
		background: #f4f4f4;
		overflow: hidden;
			&>div{
				float: left;
			}
			.footer_img{
				img{
					width:0.9rem;
					height:0.9rem;
					margin: 0rem 0.21rem 0.16rem 0.16rem;
				}
			}
			.footer_title{
				margin-top:0.1rem;
				p{
					font-size: 0.3rem;
					color: rgba(0,0,0,0.7);
					&:nth-of-type(2){
						font-size:0.24rem;
						color: rgba(133,131,132,0.7);
						margin-top:0.14rem;
					}
				}
			}
			.footer_play{
				float:right;
				margin: 0rem 0.21rem 0.16rem 0.16rem;
				img{
					width:0.50rem;
					height:0.50rem;
					margin-bottom:0.16rem;
					&nth-of-type(1){
						margin-right: 0.37rem;
					}
				}
			}

	}
</style>