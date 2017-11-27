<template>
	<div class="shezhi">
		<div class="shezhi-head">
			<router-link class="fanhui" tag="a" to="/index/yinmu">
			</router-link>
			<p class="mymsg">设置</p>
		</div>
		<div class="one">
			<ul>
				<li class="nav">试听与下载</li>
				<li>在线听歌品质
					<el-switch v-model="value1" active-color="#13ce66" inactive-color="#ccc" active-text="2G/3G/4G" inactive-text="WiFi" class="switch">
					</el-switch>
				</li>
				<li>歌曲自动下载</li>
				<li>边听边存</li>
				<li>歌曲存储位置设置</li>
				<li>被系统中断后继续播放
					<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ccc" class="switch">
					</el-switch>
				</li>
			</ul>
		</div>
		<div class="two">
			<ul>
				<li class="nav">功能与服务</li>
				<li>自动进入播放页
					<el-switch v-model="value3" active-color="#13ce66" inactive-color="#ccc" class="switch">
					</el-switch>
				</li>
				<li>桌面歌词</li>
				<li>桌面插件</li>
				<li>锁屏歌词</li>
				<li>传歌到手机</li>
				<li>Qplay与车载音乐</li>
				<li>添加跑步电台到"我的"页面</li>
				<li>铃声管理</li>
			</ul>
		</div>
		<div class="three">
			<ul>
				<li class="nav">通用设置</li>
				<li>接收消息通知</li>
				<li>隐私设置</li>
				<li>流畅度设置</li>
				<li>免费WI-FI</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "shezhi",
		data() {
			return {
				value1: false,
				value2: false,
				value3: false
			}
		}
	}
</script>

<style lang="less" scoped>
	.shezhi {
		.shezhi-head {
			width: 100%;
			height: 1.28rem;
			box-sizing: border-box;
			padding-left: 1rem;
			position: relative;
			background: linear-gradient(to right, #6d2ada, #af24a5, #e51f7e);
			.fanhui {
				position: absolute;
				left: 0.25rem;
				top: 0.325rem;
				display: inline-block;
				width: 0.6rem;
				height: 0.6rem;
				background: url(../../assets/images/fanhui.png);
				background-size: 0.6rem 0.6rem;
			}
			.mymsg {
				line-height: 1.28rem;
				font-size: 0.36rem;
				color: #FFFFFF;
			}
		}
		.one,
		.two,
		.three {
			width: 100%;
			ul {
				li {
					border-bottom: 1px solid #E6EBF5;
					padding-left: 0.25rem;
					font-size: 0.36rem;
					height: 1rem;
					line-height: 1rem;
					position: relative;
					.switch {
						position: absolute;
						right: 10px;
						top: 15px;
						overflow: hidden;
					}
				}
				.nav {
					background: #E6EBF5;
					height: 0.6rem;
					line-height: 0.6rem;
					font-size: 0.3rem;
				}
			}
		}
		.three{
			ul>li{
				position: relative;
			}
		}
	}
</style>