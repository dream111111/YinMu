<template>
	<div class="userinfo">
		<div class="userinfo-head" v-bind:style="{backgroundImage: 'url('+userinfo.backgroundUrl+')'}">
			<div class="usericon">
				<router-link to="/index/dynamic" tag="span" class="fanhui"></router-link>
				<span class="fenxiang"></span>
			</div>
			<img class="userpic" :src="userinfo.userImg" alt="" />
			<span class="user_name">{{userinfo.userName}}</span>
			<div class="fans">
				<span class="guanzhu">关注{{userinfo.attention}}</span>
				<span class="fans">粉丝{{userinfo.fans}}</span>
			</div>
			<div class="bianji">
				<router-link to="/user/userinfo/bianji" class="bj">我的资料</router-link>
			</div>
		</div>
		<div class="usercon">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">音乐</mt-tab-item>
				<mt-tab-item id="2">动态</mt-tab-item>
				<mt-tab-item id="3">关于我</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="yinyue-gedan">
						<div class="yinyue-gedan-left">歌单(1)</div>
						<div class="yinyue-gedan-right">共被收藏0次</div>
					</div>
					<div class="mylove">
						<div class="smlogo">
							<img src="../../assets/images/footer.png" />
							<div class="smlogo-cover">
								<img src="../../assets/images/xihuan.png" alt="" />
							</div>
						</div>
						<div class="ml-info">
							<span class="title">我的听歌排行</span>
							<span class="total">168首</span>
						</div>
					</div>
					<div class="mylove">
						<div class="smlogo">
							<img src="../../assets/images/mine/gedan_03.png" />
							<div class="smlogo-cover">
								<img src="../../assets/images/paihang.png" alt="" />
							</div>
						</div>
						<div class="ml-info">
							<span class="title">我喜欢的音乐</span>
							<span class="total">168首</span>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="dongtai">
						<div class="dy_info">
							<div class="user">
								<img :src="userinfo.userImg">

								<div class="userInfo">
									<h4>{{userinfo.userName}}</h4>
									<p>{{userinfo.time}}</p>
								</div>
							</div>

							<div class="content">
								<div v-if='userinfo.text'>
									<p>{{userinfo.desc}}</p>
									<div class="quanwen" @click='spread(userinfo.id)'>全文</div>
								</div>
								<div v-else>
									<p>{{userinfo.content}}</p>
									<div class="life" @click='spread(userinfo.id)'>收起↑</div>
								</div>
								<ul>
									<li v-for='(value,index) in userinfo.contentImg' :key='index'>
										<img :src="value">
									</li>
								</ul>
							</div>

							<div class="comment">
								<a href="javascript:;">
									<span class="share"></span> {{ userinfo.share}}
								</a>
								<a href="javascript:;">
									<span class="talk"></span> {{ userinfo.talk }}
								</a>
								<a href="javascript:;">
									<span class='like' v-on:click.once='dianzan(userinfo.id)'></span> {{ userinfo.like }}
								</a>
							</div>
							<div class="line"></div>
						</div>
					</div>
		
				
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="userinformation">
						<p class="gerenxinxi">个人信息</p>
						<div>
							<p class="gerenxinxi-info">等级：</p>
							<p>{{userinfo.level}}</p>
						</div>
						<div>
							<p class="gerenxinxi-info">性别：</p>
							<p>{{userinfo.gender}}</p>
						</div>
						<div>
							<p class="gerenxinxi-info">年龄：</p>
							<p>{{userinfo.age}}</p>
						</div>
						<div>
							<p class="gerenxinxi-info">地区：</p>
							<p>{{userinfo.area}}</p>
						</div>
						<p class="jieshao">个人简介</p>
						<div class="intruduce">{{userinfo.introduce}}</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	//	import userdata from '../../assets/data/userinfo.json';
	export default {
		name: "userinfo",
		data() {
			return {
				selected: '1',
				userinfo: [{
					"age": 22,
					"backgroundUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1479801845,3872710611&fm=27&gp=0.jpg",
					"userImg": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2391766524,3356885949&fm=27&gp=0.jpg",
					"userName": "Remon",
					"attention": "30",
					"fans": "99",
					"level": "LV11",
					"gender": "女",
					"area": "湖北",
					"introduce": "..."
				}]
			}
		},
		created() {
			this.address = this.$route.path;
			var currentUrl = this.HOST + "/yinmu/dynamic.json";
			this.$axios.get(currentUrl)
				.then(res => {
					var str = this.$route.path;
					var str1 = str.substring(str.length - 1);
					this.userinfo = this.userinfo[0];
					this.userinfo = res.data.userinfo[str1]
				})
				.catch(error => {
					console.log(error);
				})
		},
  methods:{
    spread(event){
     this.userinfo.text = !this.userinfo.text;
    },
    dianzan(event){
       this.userinfo.like++;
     }
  }
	}
</script>

<style lang="less" scoped>
	.userinfo {
		width: 100%;
		.userinfo-head {
			width: 100%;
			background-size: 100% 100%;
			.usericon {
				height: 0.88rem;
				padding: 0.24rem;
				box-sizing: border-box;
				.fanhui,
				.fenxiang {
					display: inline-block;
					float: left;
					width: 0.4rem;
					height: 0.4rem;
					background: url(../../assets/images/fanhui.png);
					background-size: 0.4rem 0.4rem;
				}
				.fenxiang {
					float: right;
					background: url(../../assets/images/fenxiang.png);
					background-size: 0.4rem 0.4rem;
				}
			}
			.userpic {
				display: block;
				width: 1.5rem;
				height: 1.5rem;
				border-radius: 50%;
				margin: 0 auto;
			}
			.user_name {
				font-size: 30/100rem;
				height: 0.5rem;
				line-height: 0.5rem;
				display: block;
				text-align: center;
			}
			.fans {
				width: 100%;
				height: 0.5rem;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: center;
			}
			.bianji {
				padding: 0.6rem 0;
				.bj {
					display: block;
					text-align: center;
					margin: 0 auto;
					line-height: 0.35rem;
					width: 1.6rem;
					height: 0.35rem;
					border-radius: 0.2rem;
					border: 1px solid #1F1E1F;
					font-size: 0.24rem;
					&:before {
						content: "";
						display: inline-block;
						width: 0.3rem;
						height: 0.3rem;
						background: url(../../assets/images/bianji.png);
						background-size: 0.3rem 0.3rem;
					}
				}
			}
		}
		.usercon {
			.mint-tab-container {
				.mint-tab-container-wrap {
					.mint-tab-container-item {
						margin-top: 3px;
						font-size: 24/100rem;
						.yinyue-gedan {
							width: 100%;
							height: 0.5rem;
							background: #DFDFDF;
							padding: 0 0.3rem;
							line-height: 0.5rem;
							&>div {
								width: 25%;
								float: left;
								font-size: 0.24rem;
							}
							.yinyue-gedan-right {
								float: right;
							}
						}
						.mylove {
							width: 100%;
							height: 1.365rem;
							position: relative;
							border-bottom: 1px solid #e6ebf5;
							&>div {
								float: left;
							}
							.smlogo {
								width: 1.365rem;
								height: 1.365rem;
								position: relative;
								img {
									width: 100%;
									height: 100%;
								}
								.smlogo-cover {
									width: 1.365rem;
									height: 1.365rem;
									background: #1F1E1F;
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
				&:nth-child(2) {
					.dongtai {
								.dy_info{
      margin-top: 1px;
      overflow: hidden;
      margin:0.25rem 0.16rem;
      .line{
          width: 100%;
          height: 1px;
          background: #dfdfe0;
          margin-top: 40px;
        }
			
				.user{
          height: 0.9rem;
          overflow: hidden;
            img{
              width: 0.9rem;
              height: 0.9rem;
              float: left;
              border-radius: 50%;
            }
            .userInfo{
              float: left;
              margin-top: 0.1rem;
              overflow: hidden;
              margin-left: 0.2rem;
              h4{
                font-size: 0.38rem;
                margin-bottom: 0.1rem;
              }
              p{
                color:#aaa;
              }
            }
            a{
                display: inline-block;
                margin-top: 0.1rem;
                float: right;
                font-size: 0.38rem;
                color: #e73e32;
              }
				}
        .content{
          margin-top: 0.15rem;
          letter-spacing:1px;
          line-height: 20px;
          .life{
            color: #995fdd;
          }
          .quanwen{
            color: #995fdd;
          }

          ul{
              margin-top: 0.16rem;
              width: 7.5rem;
              overflow: hidden;
            li{
              float: left;
              img{
                width: 230/100rem;
                height:230/100rem; 
                margin-right: 0.1rem;
              }
            }
          }

        }
        .comment{
          margin-top: 0.16rem;
          float: right;
          a{
              float: right;
              width: 0.5rem;
              height: 0.4rem;
              line-height: 0.4rem;
              position: relative;
              margin-right: 70/100rem;
              span{
                content: '';
                width: 42/100rem;
                height: 40/100rem;
                position: absolute;
                left: -50/100rem;
                bottom: 0;
                background: url(../../assets/images/fenxiang.png) no-repeat;
                background-size: 42/100rem 40/100rem;
              
              }
              &:nth-of-type(1){
                margin-right: 8/100rem;
               span{
                  background: url(../../assets/images/pinglun.png) no-repeat;
                  background-size: 42/100rem 40/100rem;
                  
                }
              }
              &:nth-of-type(3){
                span{
                  background: url(../../assets/images/dianzan.png) no-repeat;
                  background-size: 42/100rem 40/100rem;
                }
              }
           
          }
        }
		}
					}
				}
				&:nth-child(2) {
					.userinformation {
						width: 100%;
						.gerenxinxi,
						.jieshao {
							display: block;
							width: 100%;
							height: 0.9rem;
							line-height: 0.9rem;
							text-indent: 0.5rem;
							font-size: 0.30rem;
							color: #000000;
							font-family: bold;
						}
						.jieshao {
							margin-top: 0.3rem;
						}
						&>div {
							width: 100%;
							height: 0.7rem;
							line-height: 0.7rem;
							padding-left: 0.5rem;
							&>p {
								display: block;
								float: left;
							}
							&>p.gerenxinxi-info {
								width: 12%;
							}
						}
					}
				}
			}
		}
	}
</style>