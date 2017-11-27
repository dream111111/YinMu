<template>
	<div class="woxihuan">
		<el-collapse v-model="activeNames">
			<el-collapse-item title="自建歌单" name="1">
				<div>
					<img src="http://127.0.0.1:8080/src/assets/images/mine/gedan_03.png" />
				</div>
				<div>
					<img src="http://127.0.0.1:8080/src/assets/images/mine/gedan_10.png" />
				</div>
				<div>
					<img src="http://127.0.0.1:8080/src/assets/images/mine/gedan_06.png" />
				</div>
				<div>
					<img src="http://127.0.0.1:8080/src/assets/images/mine/gedan_12.png" />
				</div>
			</el-collapse-item>
			<el-collapse-item title="收藏歌单" name="2">
				<div>
					<img src="http://127.0.0.1:8080/src/assets/images/mine/shoucang_03.png" />
				</div>
				<div>
					<img src="http://127.0.0.1:8080/src/assets/images/mine/shoucang_05.png" />
				</div>
			</el-collapse-item>
			<el-collapse-item title="我喜欢" name="3">
				<div class="mylove">
					<div class="smlogo">
						<img src="http://127.0.0.1:8080/src/assets/images/footer.png" />
						<div class="smlogo-cover">
							<img src="http://127.0.0.1:8080/src/assets/images/xihuan.png" alt="" />
						</div>
					</div>
					<div class="ml-info">
						<span class="title">我喜欢的音乐</span>
						<span class="total">168首</span>
					</div>
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default {
		name: "woxihuan",
		data() {
			return {
				activeNames: ['1']
			}
		}
	}
</script>

<style  lang="less">
	.woxihuan {
		margin-top:3/50rem;
		.el-collapse {
			border-bottom: none;
			.el-collapse-item {
				&>div {
					border-bottom: none;
					.el-collapse-item__header {
						height: 0.5rem;
						line-height: 0.5rem;
						background: #F9F9F9;
						padding-left: 0.3rem;
						border-bottom: none;
						font-size: 24/100rem;
						i {
							float: left;
							height: 0.5rem;
							margin-left: 0.1rem;
							position: relative;
							&:before {
								position: absolute;
								left: -8/100rem;
								top: 0;
								line-height: 0.5rem;
							}
						}
					}
				}
				.el-collapse-item__wrap {
					.el-collapse-item__content {
						overflow: hidden;
						&>div {
							padding: 0.05rem 0.08rem;
							box-sizing: border-box;
							width: 50%;
							height: 355/100rem;
							float: left;
							&>img {
								width: 100%;
								height: 100%;
								border-radius: 5/100rem;
							}
						}
						.mylove {
							width: 100%;
							height: 1.365rem;
							position: relative;
							background: #e6ebf5;
							border-bottom: 1/50rem solid #e6ebf5;
							&:before {
								content: "";
								display: block;
								position: absolute;
								top: 0.55rem;
								right: 0.3rem;
								width: 0.35rem;
								height: 0.3rem;
								background: url(http://127.0.0.1:8080/src/assets/images/yinliang.png);
								background-size: 0.35rem 0.3rem;
							}
							&>div {
								float: left;
							}
							.smlogo {
								width: 1.2rem;
								height: 1.2rem;
								position: relative;
								img {
									width: 100%;
									height: 100%;
								}
								.smlogo-cover {
									width: 1.2rem;
									height: 1.2rem;
									background: #333333;
									opacity: 0.8;
									position: absolute;
									left: 0;
									top: 0;
									img {
										position: absolute;
										left: 0.3rem;
										top: 0.3rem;
										display: block;
										width: 50%;
										height: 50%;
									}
								}
							}
							.ml-info {
								height: 1.2rem;
								padding: 0 0 0 0.3rem;
								span {
									display: block;
								}
								.title {
									font-size: 0.3rem;
									font-weight: 100;
									line-height: 0.7rem;
								}
								.total {
									font-size: 0.2rem;
									line-height: 0.5rem;
								}
							}
						}
					}
				}
			}
		}
	}
</style>