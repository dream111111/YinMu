<template>
	<div class="login">
		<div class="return"></div>
		<img src="http://127.0.0.1:8080/src/assets/images/firstlogo.png" alt="" class="logo" />
		<div class="np">
			<div class="um">
				<input type="text" placeholder="请输入手机号" v-model="username"/>
			</div>
			<div class="pw">
				<input type="text" placeholder="密码" v-model="password"/>
			</div>

		</div>
		<div class="denglu">
			<router-link  :to="{path:'/index/yinmu'}">{{loginTips}}</router-link>
		</div>
		<div class="zhezhao" @click="submitUser" v-if='currentStatus'></div>
		<div class="wenti">
			<span>忘记密码?</span>
			<router-link to="/regester" tag='span' class='goLogin'>去注册→</router-link>
		</div>
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
	import qs from "qs"
	export default {
		name: "login",
		data() {
			return {
				username:"",
				password:"",
				currentStatus:true,
				loginTips:'登录'
			}
		},
		methods:{
		submitUser(event){
			if(this.username && this.password){

				this.$axios.post("http://localhost:3000/login",qs.stringify(
				{
					username:this.username,
					password:this.password
				}
			))
			.then(res => {
				console.log(res.data)
				if (res.data == '-1') {
					this.loginTips = '用户名不存在,去注册↓'
				}else if (res.data == '0') {
					this.loginTips = '用户名或密码错误'
				}else if (res.data == 'ok') {
					this.currentStatus = false;
					this.loginTips='开启音沐之旅！'
				}
				
				
			})
			.catch(error => {
				console.log(error)
			})
			}
			
		}
		}
	}
</script>

<style lang="less" scoped>
	.login {
		.zhezhao{
			width: 5rem;
			height: 1rem;
			position: absolute;
			top: 5rem;
			left: 0.6rem;
			z-index: 999;
		}
		width: 596/100rem;
		margin: 2.3rem auto 0;
		position: relative;
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
		.np {
			width: 500/100rem;
			margin: 0 auto;
			position: relative;
			input {
				font-size: 0.34rem;
				border: none;
				width: 100%;
				outline: medium;
				border-bottom: 1px solid #999999;
				padding-left: 1.2rem;
				box-sizing: border-box;
				display: block;
				margin: 0.2rem auto 0;
				height: 55/100rem;
			}
			.um:before,
			#password:before {
				content: "";
				display: block;
				width: 45/100rem;
				height: 50/100rem;
				position: absolute;
				left: 0.4rem;
				top: 0;
				background: url(http://127.0.0.1:8080/src/assets/images/shoujihao.png);
				background-size: 45/100rem 50/100rem;
			}
			.pw:before {
				content: "";
				display: block;
				width: 45/100rem;
				height: 50/100rem;
				position: absolute;
				left: 0.4rem;
				top: 0.725rem;
				background: url(http://127.0.0.1:8080/src/assets/images/mima.png);
				background-size: 45/100rem 50/100rem;
			}
		}
		.denglu {
			display: block;
			width: 4.8rem;
			margin: 0.5rem auto 0;
			a {
				font-size: 36/100rem;
				line-height: 0.7rem;
				border-radius: 0.4rem;
				width: 100%;
				height: 0.7rem;
				background: #FFFFFF;
				color: #8859ef;
				display: block;
				text-align: center;
				border: 1px solid #8859ef;
			}
		}
		.wenti {
			height: 0.3rem;
			span {
				font-size: 24/100rem;
				display: inline-block;
				text-align: center;
				width: 47%;
			}
			.goLogin{
				font-size: 36/100rem;
				color: green;
				font-weight: bold;
			}
		}
		.other-load {
			margin-top: 2.6rem;
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
			margin-top: 0.5rem;
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