<template>
	<div class="quanbu">
		<div class="quanbuCon">
			<div class="sousuo">
				<i class="search"></i>
				<input type="text" placeholder="搜索本地歌曲"/>
			</div>
			<div class="content">
				<div class="left">
					<p>随机播放全部</p>
				</div>
				<div class="right">
					<p>管理</p>
				</div>
			</div>
			<a class="m-sgitem" href="#" v-for="(list,index) in listData">
				<div class="sgfl sgfl-cred">{{list.musicNum}}</div>
				<div class="touxiang">
					<img :src="list.authortouxiang" alt="" />
				</div>
				<div class="sgfr f-bd f-bd-btm">
					<div class="sgchfl">
						<div class="f-thide sgtl">{{list.name}}</div>
						<div class="f-thide sginfo">
							<i class="u-hmsprt sghot"></i> {{list.singer}}-{{list.musicTag}}
						</div>
					</div>
					<div class="sgchfr">
						<router-link tag="span" class="u-hmsprt sgchply" :to="{ name: 'player', params: { Id: list.id,Index:index ,Route:address ,name:list.name,singer:list.singer,Time:list.playtime}}" >
						</router-link>
					</div>
				</div>
			</a>
		</div>
	</div>

</template>

<script>
	export default {
		name: "quanbu",
		data() {
			return {
				listData:"",
				address:""
			}
		},
		created: function() {
			var currentUrl = this.HOST + "/yinmu/quanbu.json";
			this.$axios.get(currentUrl)
				.then(res => {
					this.listData = res.data.result
//					console.log(this.listData)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
</script>

<style scoped lang="less">
	.quanbu {
		width: 100%;
		.quanbuCon {
			.sousuo {
				position: relative;
				padding: 5/50rem 10/50rem;
				.search {
					position: absolute;
					left: 22/50rem;
					top: 22/50rem;
					z-index: 1;
					width: 13/50rem;
					height: 13/50rem;
					background: url(../../../assets/images/search1.png)no-repeat;
					background-position: 0 0;
					background-size: contain;
				}
				input {
					background: #ebecec;
					margin: 10/50rem auto 0;
					display: block;
					width: 300/50rem;
					height: 30/50rem;
					outline: none;
					border: medium;
					padding: 0 30/50rem;
					border-radius: 30/50rem;
				}
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
			a {
				color: #333333;
				.touxiang {
					img {
						width: 1rem;
						height: 1rem;
					}
				}
			}
			.m-sgitem,
			.m-sgitem .sgfl {
				display: -webkit-box;
				display: flex;
			}
			.m-sgitem {
				padding-left: 10/50rem;
				border-bottom: 1px solid #ccc;
    			margin: 0.18rem 0 0 0;
			}
			.m-sgitem .sgfl-cred {
				color: #df3436;
			}
			.m-sgitem .sgfl {
				-webkit-box-align: center;
				align-items: center;
				width: 28/50rem;
				font-size: 17/50rem;
				color: #999;
			}
			.m-sgitem .sgfr {
				-webkit-box-flex: 1;
				flex: 1 1 auto;
				display: -webkit-box;
				display: flex;
				position: relative;
				padding-left: 0.5rem;
			}
			.m-sgitem .sgchfl {
				-webkit-box-flex: 1;
				flex: 1 1 auto;
				padding: 6/50rem 0;
				width: 0;
			}
			.m-sgitem .sgtl {
				font-size: 17/50rem;
			}
			.f-thide {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: normal;
			}
			.m-sgitem .sginfo {
				font-size: 12/50rem;
				color: #888;
				margin-top: 5/50rem;
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
				margin-right: 4/50rem;
			}
			.u-hmsprt {
				background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
				background-size: 166/50rem 97/50rem;
			}
			.m-sgitem .sgchfr {
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				padding: 0 10/50rem;
				margin-right: 10/50rem;
			}
			.m-sgitem .sgchply {
				display: inline-block;
				width: 22/50rem;
				height: 22/50rem;
				background-position: -24/50rem 0;
			}
			.u-hmsprt {
				background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
				background-size: 166/50rem 97/50rem;
			}
		}
	}
</style>