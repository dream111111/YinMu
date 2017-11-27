<template>
	<div class="radio">
		<div class="diantai">
			<span class="fenlei">电台分类</span>
			<span class="paihang">电台排行</span>
		</div>
		<div class="fenleipaihang">
			<div class="fenlei-list">
				<router-link  class="fenlei-list-con"  tag='div' :to="'/diantai/'+item.id" v-for="(item,index) in diantai" :key='index'>
					<img :src="item.url"/>
					<p>{{item.title}}</p>
				</router-link>	
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
		name: "yinmu",
		data() {
			return {
				diantai:"",
				num:""
			}
		},
		created(){
			
			var currentUrl = this.HOST + "/yinmu/diantai.json";
			this.$axios.get(currentUrl)
			.then(res => {
					this.diantai = res.data.result;
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
</script>

<style lang="less" scoped>
.radio{
	background: #FFFFFF;
	padding-bottom: 1rem;
	.diantai{
		width: 100%;
		height: 140/100rem;
		padding: 40/100rem 0 40/100rem 1rem ;
		box-sizing: border-box;

		span{
			float: left;
			display: inline-block;
			text-align: center;
			font-size: 24/100rem;
			line-height: 58/100rem;
		}
		.fenlei{
			width: 42%;
			border-right: 1px solid #ccc;
		}
		.paihang{
			width: 265/100rem;
			margin-left: 40px;
		}
		.fenlei,.paihang{
			position: relative;
		}
		.fenlei:before,.paihang:after{
			content: "";
			display:inline-block;
			position: absolute;
			top: 0;
			left: 0;
			background-image: url(../../../assets/images/diantaifenlei.png);
			background-size: 0.6rem 0.6rem;
			width: 0.6rem;
			height: 0.6rem;
		}
		.paihang:after{
			background-image: url(../../../assets/images/diantaipaihang.png);
			background-size: 0.6rem 0.6rem;
		}
		
	}
	.fenleipaihang{
		width: 100%;
		background: #FFFFFF;
		overflow: hidden;
		.fenlei-list{
			width: 710/100rem;
			margin: 0 auto;
			.fenlei-list-con{
				width: 33%;
				padding: 0 5/100rem;
				box-sizing: border-box;
				background: #FFFFFF;
				float: left;
				img{
					border-radius: 5/100rem;
					width: 225/100rem;
					height: 225/100rem;
				}
				p{
					font-size: 24/100rem;
					color: #1f1e1f;
					line-height: 36/100rem;
					margin-bottom: 10/100rem;
				}
			}
		}
	}

}
	
</style>