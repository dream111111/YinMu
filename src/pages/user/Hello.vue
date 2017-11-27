<template>
	<div class="login">
		<div class="return">
		</div>
		<img src="http://127.0.0.1:8080/src/assets/images/firstlogo.png" alt="" class="logo" />
		<div class="dl">
			<router-link class="denglu" to="/login">登录</router-link>
		</div>
		<div class="dl">
			<router-link class="zhuce" to="/register">注册</router-link>
		</div>
		<router-link class="youke" to="/index/yinmu">游客登录</router-link>

		<div class="other-load">
			<div class="line1"></div>
			<p>其他登录方式</p>
			<div class="line2"></div>
		</div>
		<div class="other-log">
			<div class="qq">
				<img src="http://127.0.0.1:8080/src/assets/images/qq.png" alt="" />
			</div>
			<div class="wx">
				<img src="http://127.0.0.1:8080/src/assets/images/weixin.png" />
			</div>
			<div class="wb">
				<img src="http://127.0.0.1:8080/src/assets/images/weibo.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.login {
		width: 596/100rem;
		margin: 2.3rem auto 0;
		position: relative;
		text-align: center;
		.return {
			position: absolute;
			top: -1.2rem;
			left: -0.4rem;
			background: url(http://127.0.0.1:8080/src/assets/images/fanhui.png);
			background-size: 0.35rem 0.5rem;
			width: 35/100rem;
			height: 50/100rem;
		}
		img {
			margin: 0 auto 1.4rem;
			display: block;
			width: 2rem;
			height: 190/100rem;
		}
		.dl {
			display: block;
			width: 4.8rem;
			margin: 0.3rem auto 0;
			.denglu,
			.zhuce {
				font-size: 36/100rem;
				line-height: 0.8rem;
				width: 100%;
				height: 0.8rem;
				background: #FFFFFF;
				color: #8859ef;
				display: block;
				text-align: center;
				border: 1px solid #8859ef;
			}
		}
		.youke {
			display: inline-block;
			color: grey;
			font-size: 30/100rem;
			border-bottom: 0.1/100rem solid grey;
			padding-bottom: 6/100rem;
		}
		.other-load {
			margin-top: 2rem;
			text-align: center;
			font-size: 30/100rem;
			height: 30/100rem;
			color: grey;
			p {
				display: inline-block;
			}
			.line1,
			.line2 {
				margin-top: 0.125rem;
				display: inline-block;
				width: 33%;
				height: 1/100rem;
				background: grey;
				float: left;
			}
			.line2 {
				float: right;
			}
		}
		.other-log {
			margin-top: 0.7rem;
			height: 120/100rem;
			overflow: hidden;
			&>div {
				width: 33%;
				float: left;
				img {
					width: 90/100rem;
					height: 120/100rem;
				}
			}
		}
	}
</style>