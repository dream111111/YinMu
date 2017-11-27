<template>
	<div class="login">
		<div class="return"></div>
		<img src="http://127.0.0.1:8080/src/assets/images/firstlogo.png" alt="" class="logo" />
		<div class="np">
			<div class="um">
				<input type="text" placeholder="请输入手机号" v-model="username" @keydown='keydownName' />
				<p :class="className1" ></p>
			</div>
			<div class="pw">
				<input type="password" placeholder="密码" v-model="password" 
				@keydown='keydownPwd'/>
				<p :class="className2" >{{pwdTips}}</p>
			</div>

		</div>
		<div class="denglu">
			<a  href="javascript:;" @click="submitUser">{{registerTips}}</a>
		</div>
		<div class="wenti">
			<span>忘记密码?</span>
			<router-link to="/login" tag='span' class='goLogin'>去登录→</router-link>
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
				className1:'',
				className2:'',
				currentStatusName:'',
				currentStatusPwd:'',
				pwdTips:'',
				registerState:false,
				registerTips:'注册'
			}
		},
		methods:{
		submitUser(event){
			if (this.username && this.password) {
				this.$axios.post("http://localhost:3000/adduser",qs.stringify({username:this.username,
				password:this.password
				}))
				.then(res => {
					console.log(res.data);
					if (res.data == 'ok') {
						this.registerState = true;
						this.registerTips = this.registerState ? '注册成功,去登陆↓':'注册'
					}
					
				})
				.catch(error =>{
					console.log(error);
				})
				}
			},
			keydownName(){
				this.currentStatusName = /^1\d{9}$/g.test(this.username);
				this.className1 = this.currentStatusName ? 'success' : 'error'
			},
			keydownPwd(){
				this.currentStatusPwd = /^\S{5,9}$/g.test(this.password);
				this.className2 = this.currentStatusPwd ? 'success' : 'error';
				this.pwdTips = this.currentStatusPwd ? 'OK':'6-10位';
			}
		}
	}
</script>

<style lang="less" scoped>
	.login {
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
			.um{
				position: relative;
				.error{
					position: absolute;
					top: 0;
					right: 0;
					width: 0.36rem;
					height: 0.36rem;
					background: url(http://127.0.0.1:8080/src/assets/images/login/error.png) no-repeat;
					background-size: 0.36rem 0.36rem;
				}
				.success{
					position: absolute;
					top: 0;
					right: 0;
					width: 0.36rem;
					height: 0.36rem;
					background: url(http://127.0.0.1:8080/src/assets/images/login/green.png) no-repeat;
					background-size: 0.36rem 0.36rem;

				}
			}
			.pw{
				.error{
					position: absolute;
					top: 0.9rem;
					right: 0;
					color: red;
					font-size: 0.3rem;
				}
				.success{
					position: absolute;
					top: 0.9rem;
					right: 0;
					color: green;
					font-size: 0.3rem;

				}
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
			.pw{
				margin-top: 0.2rem;
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