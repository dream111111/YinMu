<template>
	<div class="changxiaobang">
		<div class="ksong-head">
			<router-link :to="{ name: 'yinmu', params: { selected: '2' }}" class="fanhui"></router-link>
			</router-link>
			<p class="mymsg">音沐精品</p>
			<span class="fenxiang"></span>
		</div>
		<div class="type">
			<div>
				<ul>
					<li class="active">最新上架</li>
					<li>热门专辑</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="active">最新上架</li>
					<li>热门专辑</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="active">全部</li>
					<li>港台</li>
					<li>内地</li>
					<li>日韩</li>
					<li>欧美</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="active">全部</li>
					<li>音沐精品</li>
					<li>白金唱片</li>
					<li>钻石唱片</li>
					<li>殿堂唱片</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="active">全部</li>
					<li>流行</li>
					<li>民谣</li>
					<li>嘻哈说唱</li>
					<li>流行</li>
					<li>QST</li>
				</ul>
			</div>
		</div>
		<p>最新上架-音沐精品</p>
		<div class="changxiaoCon" v-for="(list,index) in listData">
			<div class="left">
				<img :src="list.authorimg" alt="" />
			</div>
			<div class="right">
				<a href="javascript:;" class="musicTitle">{{list.musicTitle}}</a>
				<a href="javascript:;" class="musicauthor">{{list.musicauthor}}</a>
				<a href="javascript:;" class="musicCount">{{list.musicCount}}</a>
				<i class="price">{{list.price}}</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'changxiaobang',
		data() {
			return {
				listData: ""
			}
		},
		created: function() {
			var currentUrl = this.HOST + "/yinmu/changxiaobang.json";
			this.$axios.get(currentUrl)
				.then(res => {
					this.listData = res.data.result
					console.log(this.listData)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
</script>

<style lang='less' scoped>
	.changxiaobang {
		width: 100%;
.ksong-head {
			width: 100%;
			height: 1.28rem;
			box-sizing: border-box;
			position: relative;
			background:linear-gradient(to right,#6d2ada,#af24a5,#e51f7e);
			.fanhui {
				position: absolute;
				left: 0.25rem;
				top: 0.325rem;
				display: inline-block;
				width: 0.6rem;
				height: 0.6rem;
				background: url(http://127.0.0.1:8080/src/assets/images/fanhui.png);
				background-size: 0.6rem 0.6rem;
			}
			.mymsg {
				line-height: 1.28rem;
				font-size: 0.36rem;
				color: #FFFFFF;
				text-align: center;
			}
			.fenxiang {
				position: absolute;
				right: 0.2rem;
				top: 0.4rem;
				display: inline-block;
				float: right;
				width: 0.45rem;
				height: 0.45rem;
				background: url(http://127.0.0.1:8080/src/assets/images/share.png);
				background-size: 0.45rem 0.45rem;
			}
		}
		.type{
			width: 100%;
			height: 150/50rem;
			font-size: 14/50rem;
			padding: 5/50rem;
			ul{
				height: 30/50rem;
				li{
					float: left;
					padding: 5/50rem 10/50rem;
				}
				.active{
					background: #CCCCCC;
					border-radius: 10/50rem;
				}
			}
		}
		p{
			font-size:14/50rem;
			padding-left: 20/50rem;
		}
		.changxiaoCon {
			overflow: hidden;
			.left,
			.right {
				float: left;
			}
			.left {
				padding: 15/50rem;
				img {
					width: 120/50rem;
					height: 100/50rem;
				}
			}
			.right {
				font-size: 16/50rem;
				padding: 20/50rem 100/50rem 10/50rem 20/50rem;
				position: relative;
				&>a {
					display: block;
					margin-bottom: 20/50rem;
				}
				.price {
					position: absolute;
					top: 80/50rem;
					right: 5/50rem;
					color: red;
				}
				
			}
		}
	}
</style>