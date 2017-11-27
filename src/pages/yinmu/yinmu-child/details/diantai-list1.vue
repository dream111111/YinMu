<template>
	<div class="diantaiList">
		<img :src="image" alt="" />
		<router-link tag='span' class="back"  :to="{ name: 'yinmu', params: { selected: '2' }}"></router-link>
		<div class="content">
			<div class="left">
				<p>播放全部</p>
			</div>
			<div class="right">
				<p>多选</p>
			</div>
		</div>
		<div class="bangdan">
			<div class="bangdanCon">
				<div class="bangbanBox">
					<a class="m-sgitem" href="#" v-for="(list,index) in listData">
						<div class="sgfl sgfl-cred">{{index+1}}</div>
						<div class="sgfr f-bd f-bd-btm">
							<div class="sgchfl">
								<div class="f-thide sgtl">{{list.name}}</div>
								<div class="f-thide sginfo">
									<i class="u-hmsprt sghot"></i> {{list.name}}-{{list.singer}}
								</div>
							</div>
							<div class="sgchfr">
								<router-link tag="span" class="u-hmsprt sgchply" :to="{ name: 'player', params: { Id: list.id,Index:index ,Route:address ,Time:list.playtime }}" ></router-link>
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
		name: "diantaiList",
		data() {
			return {
				listData: "",
				image: "",
				num: "3",
				address:''
			}
		},
		created(){
			this.address=this.$route.path;
			var currentUrl = this.HOST + "/yinmu/diantai.json";
			this.$axios.get(currentUrl)
			.then(res => {
					var str = this.$route.path;
					var str1 = str.substring(str.length - 1);
					this.listData = res.data.result[str1].music;
					this.image = res.data.result[str1].url;
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
</script>

<style scoped lang="less">
	.diantaiList {
		width: 100%;
	position: relative;
	img{
		width: 100%;
		height: 5rem;
	}
	.back{
		width: 0.5rem;
		height: 0.5rem;
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		background: url(http://127.0.0.1:8080/src/assets/images/fanhui.png)no-repeat;
		background-size:0.5rem 0.5rem;
	}
	.content{
		font-size: 28/100rem;
		overflow: hidden;
		border-bottom: 1px solid #E3E4E8;
		.left{
			float: left;
			position: relative;
			padding: 0.4rem 1.4rem;
			&>:before{
				content: "";
				position: absolute;
				width: 0.5rem;
				height: 0.5rem;
				left: 0.65rem;
				top: 0.3rem;
				background: url(http://127.0.0.1:8080/src/assets/images/playAll.png) no-repeat;
				background-size: 0.5rem 0.5rem;
			}
		}
		.right{
			float: right;
			position: relative;
			padding: 20px 40px;
			&>:before{
				content: "";
				position: absolute;
				width: 0.5rem;
				height: 0.5rem;
				background: url(http://127.0.0.1:8080/src/assets/images/choseAll.png)no-repeat;
				background-size: 0.5rem 0.5rem;
				left: 0.1rem;
				top: 0.3rem;
			}
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