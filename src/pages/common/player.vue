<template>
	<div class="player">

		<router-link tag='i' to='/index/yinmu' class="fanhui"></router-link>
		<transition name="change">
			<div v-if="show">
				<div class="bfy-head">
					<p class="music-name">{{name}}</p>
					<p class="music-singer">{{singer}}</p>
					<i class="fenxiang"></i>
				</div>
				<img :class="{circleplayer:isCir}" class="playerpic" src="http://img5.imgtn.bdimg.com/it/u=3503847974,1484530069&fm=27&gp=0.jpg" />

				<div class="song-com">
					<p class="sc-lg like"></p>
					<p class="sc-lg dl" @click="download"></p>
					<p class="sc-lg com"></p>
					<p class="sc-lg more" @click="hidplayer"></p>
				</div>
			</div>
		</transition>
		<div class="lyric" v-if='!show'>{{this.lyric}}</div>
		<div class="playlogo">
			<audio id="audio" :src="url"></audio>

			<div class="playTime">
				{{start}}
				<div class="bottom">
					<p id="time"></p>
				</div>
				{{end}}
			</div>

			<p :class="{circle:isCircle}" class="bf" @click="loop"></p>
			<div class="playchange">
				<p class="last" @click="prev"></p>
				<p :class="{stop:isPlaying}" class="stoporplay" @click="play"></p>
				<p class="next" @click="next"></p>
			</div>
			<p class="download"></p>
		</div>

	</div>
</template>

<script>
	import Lyric from 'lyric-parser'
	export default {
		name: "player",
		data() {
			return {
				url: "http://ws.stream.qqmusic.qq.com/203466851.m4a?fromtag=46",
				num: 0,
				isPlaying: false,
				start: "00:00",
				end: "04:01",
				song: [],
				name: '青花瓷',
				singer: '周杰伦',
				isCircle: false,
				isCir: true,
				total: 0,
				inter: 1,
				show: true,
				lyric: ''
			}
		},
		methods: {

			loop() {
				this.isCircle = !this.isCircle;
				var audio = document.querySelector('#audio');
				if(audio.loop) {
					audio.removeAttribute("loop");
				} else {
					audio.setAttribute("loop", "loop");;
				}
			},
			prev() {
				if(this.song.length == 0) {
					return;
				} else {
					var ind = this.num;
					ind--;
					if(ind < 0) {
						ind = 0;
					}
					var audio = document.querySelector('#audio');
					audio.setAttribute("autoplay", "autoplay");
					this.url = "http://ws.stream.qqmusic.qq.com/" + this.song[ind].id + ".m4a?fromtag=46";

					this.num = ind;
					this.name = this.song[this.num].name;
					this.singer = this.song[this.num].singer;
					if(this.show) {
						var ti = parseInt(this.song[ind].playtime);
						console.log(ti)
						var bai = parseInt(ti / 60);
						var shi = ti - parseInt(ti / 60);
						this.name = this.song[this.num].name;
						this.singer = this.song[this.num].singer;
						if(shi < 10) {
							this.end = "0" + parseInt(ti / 60) + ":0" + shi % 10;
						} else {
							this.end = "0" + parseInt(ti / 60) + ":" + parseInt(shi / 10);
						}
					}

				}

			},
			play() {
				//
				if(!this.total) {
					this.total = 241;
					this.inter = 241 / 580;
				}
				this.isCir = !this.isCir;
				var self = this;
				var audio = document.querySelector('#audio');
				if(!this.isPlaying) {
					audio.play();
					this.isPlaying = !this.isPlaying;
				} else {
					audio.pause();
					this.isPlaying = !this.isPlaying;
				}
				var timer = setInterval(function() {
					time(audio.currentTime, self);
					console.log(1)
				}, 1000)

				function time(x, self) {
					//计算步长
					var Time = document.querySelector('#time');
					Time.style.width = audio.currentTime / 100 * (self.inter) + "rem";
					var time = Math.ceil(x) - 1,
						bai, shi, gei;
					if(0 <= time && time < 10) {
						self.start = "00:0" + time;
					} else if(time < 60) {
						shi = parseInt(time / 10);
						gei = parseInt(time % 10);
						self.start = "00:" + shi + gei;
					} else {
						bai = parseInt(time / 60);
						var inte = time - bai * 60;
						if(inte < 10) {
							gei = parseInt(inte % 10);
							self.start = "0" + bai + ":0" + gei;

						} else {
							shi = parseInt(inte / 10);
							gei = parseInt(inte % 10);
							self.start = "0" + bai + ":" + shi + gei;
						}
					}

				}

				setTimeout(function() {
					clearInterval(timer);

				}, this.total)
			},
			next() {
				if(this.song.length == 0) {
					return;
				} else {
					var idx = this.num;
					var audio = document.querySelector('#audio');
					idx++;
					console.log(this.song.length)
					if(idx >= this.song.length) {
						idx = this.song.length-1;
					}
					audio.setAttribute("autoplay", "autoplay");
					this.url = "http://ws.stream.qqmusic.qq.com/" + this.song[idx].id + ".m4a?fromtag=46";
					this.num = idx;
					if(this.show) {
						var ti = parseInt(this.song[idx].playtime);
						console.log(ti)
						var bai = parseInt(ti / 60);
						var shi = ti - parseInt(ti / 60);
						this.name = this.song[this.num].name;
						this.singer = this.song[this.num].singer;
						if(shi < 10) {
							this.end = "0" + parseInt(ti / 60) + ":0" + shi % 10;
						} else {
							this.end = "0" + parseInt(ti / 60) + ":" + parseInt(shi / 10);
						}
					}

				}

			},
			download() {
				var audio = document.querySelector('#audio');
				console.log("下载地址：" + audio.src);
			},
			hidplayer() {
				this.show = !this.show;
				// 	var lyric = new Lyric(this.lyric, handler)

				// 	 function hanlder({lineNum, txt}){
				// 	   lyric.play()
				// 	 }
			}
		},
		created: function() {
			if(!this.$route.params.Id) {
				return;
			} else {
				this.url = "http://ws.stream.qqmusic.qq.com/" + this.$route.params.Id + ".m4a?fromtag=46";
				var ti = parseInt(this.$route.params.Time);
				console.log(ti);
				this.total = this.$route.params.Time * 1000;
				this.inter = 580 / ti;
				console.log(ti, this.inter);
				var bai = parseInt(ti / 60);
				var shi = ti - parseInt(ti / 60);
				if(shi < 10) {
					this.end = "0" + parseInt(ti / 60) + ":0" + shi % 10;
				} else {
					this.end = "0" + parseInt(ti / 60) + ":" + parseInt(shi / 10);
				}
				this.num = this.$route.params.Index;

				if(this.$route.params.name) {
					this.name = this.$route.params.name;
					this.singer = this.$route.params.singer;
				}
			}

			if(!this.$route.params.Route) {
				return;
			} else {
				var par = this.$route.params.Route.split("/");
				var len = par.length,
					add, state;
				if(len == 3) {
					if(par[1] == "introDetail") {
						if(par[2].length == 1) {
							add = "recommend.json";
							state = 0;
						} else {
							state = 1;
							add = "intro.json";
						}
					} else if(par[1] == "diantai") {
						add = "diantai.json";

						state = 0;
					} else if(par[1] == "listDetail") {
						add = "bangdan.json";
						state = 0;
					} else {

					}
					//数据请求
					var currentUrl = this.HOST + "/yinmu/" + add;
					this.$axios.get(currentUrl)
						.then(res => {
							if(state == 0) {
								console.log(res.data);
								
								var xiabiao = parseInt(par[2]);
								this.song = res.data.result[xiabiao].music;
								this.name = this.song[this.num].name;
								this.singer = this.song[this.num].singer;

							} else if(state == 1) {
								this.song = res.data.result;
								this.name = this.song[this.num].name;
								this.singer = this.song[this.num].singer;
							} else if(state == 2) {
								console.log(res.data);
							}
						})
						.catch(error => {
							console.log(error)
						})
				}

				//歌词处理
				// let lyric;
				//      var curl=this.COST+"/miniportal/static/lyric/"+this.$route.params.Id%100+"/"+this.$route.params.Id+".xml";
				//      this.$axios.get(curl)
				//      .then(res => {
				//         console.log(res.data)
				// this.lyric =res.data;

				//      })
				//      .catch(error => {
				//          console.log(error)
				//      })
			}
		}
	}
</script>

<style lang="less" scoped>
	.player {
		position: relative;
		width: 100%;
		background: url(../../assets/images/playbg.png) no-repeat bottom center;
		background-size: 7.5rem 3.5rem;
		.change-enter-active {
			animation: fadeInUp 1.5s;
		}
		.change-leave-active {
			animation: fadeOut 0.8s;
		}
		.fanhui {
			position: absolute;
			left: 0.25rem;
			top: 0.45rem;
			display: inline-block;
			width: 0.5rem;
			height: 0.5rem;
			background: url(../../assets/images/return.png);
			background-size: 0.5rem 0.5rem;
		}
		.bfy-head {
			text-align: center;
			width: 100%;
			height: 1.28rem;
			border-bottom: 1px solid #E6EBF5;
			padding-top: 0.4rem;
			box-sizing: border-box;
			.fenxiang {
				position: absolute;
				right: 0.25rem;
				top: 0.45rem;
				display: inline-block;
				width: 0.4rem;
				height: 0.4rem;
				background: url(../../assets/images/fenxiang.png);
				background-size: 0.4rem 0.4rem;
			}
			.music-name {
				font-size: 22/100rem;
			}
			.music-singer {
				font-size: 18/100rem;
				margin-top: 18/100rem;
			}
		}
		audio {
			width: 100%;
			background: red;
		}
		.playerpic {
			display: block;
			border-radius: 50%;
			width: 5rem;
			height: 5rem;
			margin: 0.8rem auto 3rem;
			animation: myfirst 10s linear infinite;
			@keyframes myfirst {
				from {
					transform: rotate(0deg)
				}
				to {
					transform: rotate(360deg)
				}
			}
			@-moz-keyframes myfirst/* Firefox */
			{
				from {
					transform: rotate(0deg)
				}
				to {
					transform: rotate(360deg)
				}
			}
			@-webkit-keyframes myfirst/* Safari 和 Chrome */
			{
				from {
					transform: rotate(0deg)
				}
				to {
					transform: rotate(360deg)
				}
			}
			@-o-keyframes myfirst/* Opera */
			{
				from {
					transform: rotate(0deg)
				}
				to {
					transform: rotate(360deg)
				}
			}
		}
		.circleplayer {
			animation: myfirst 0;
		}
		/*#DEBFDC,#EFE0EE*/
		.song-com {
			width: 100%;
			height: 1.5rem;
			overflow: hidden;
			&>p {
				float: left;
				display: block;
				width: 0.45rem;
				height: 0.45rem;
				background: url(../../assets/images/player/xihuan1.png) no-repeat center center;
				background-size: 0.45rem 0.45rem;
				margin: 0.45rem 0.685rem;
			}
			.dl {
				background: url(../../assets/images/player/xiazai1.png) no-repeat center center;
				background-size: 0.45rem 0.45rem;
			}
			.com {
				width: 0.55rem;
				height: 0.45rem;
				background: url(../../assets/images/player/pinglun1.png) no-repeat center center;
				background-size: 0.55rem 0.45rem;
			}
			.more {
				width: 0.55rem;
				height: 0.45rem;
				background: url(../../assets/images/slide.png) no-repeat center center;
				background-size: 0.55rem 0.45rem;
			}
		}
		.playlogo {
			overflow: hidden;
			position: fixed;
			bottom: 0rem;
			left: 0rem;
			background: #8946CA;
			z-index: 1;
			&>p {
				display: inline-block;
				width: 0.45rem;
				float: left;
				height: 0.45rem;
				background: url(../../assets/images/player/danquxunhuan.png) no-repeat center center;
				background-size: 0.45rem 0.45rem;
				margin: 0.7rem 0.375rem;
				box-sizing: border-box;
			}
			.circle {
				background: url(../../assets/images/player/liebiaoxunhuan.png) no-repeat center center;
				background-size: 0.55rem 0.7rem;
			}
			.download {
				background: url(../../assets/images/player/list.png) no-repeat center center;
				background-size: 0.45rem 0.45rem;
			}
			.playchange {
				float: left;
				display: inline-block;
				width: 68%;
				height: 1.75rem;
				overflow: hidden;
				&>p {
					display: block;
					float: left;
					background: url(../../assets/images/player/last.png) no-repeat center center;
					background-size: 0.5rem 0.55rem;
					width: 0.5rem;
					height: 0.55rem;
					margin: 0.7rem 0.6rem;
				}
				.next {
					background: url(../../assets/images/player/next.png) no-repeat center center;
					background-size: 0.5rem 0.55rem;
				}
				.stoporplay {
					background: url(../../assets/images/player/play.png) no-repeat center center;
					background-size: 0.9rem 0.9rem;
				}
				.stop {
					background: url(../../assets/images/player/stop.png) no-repeat center center;
					background-size: 0.7rem 0.7rem;
				}
			}
		}
		.playTime {
			font-size: 15/100rem;
			height: 10/100rem;
			width: 715/100rem;
			margin: 10 auto;
			color: #FFFFFF;
			position: absolute;
			top: 20/100rem;
			.bottom {
				width: 580/100rem;
				height: 4/100rem;
				background: #FFFFFF;
				margin: 0 auto;
				vertical-align: middle;
				display: inline-block;
				position: relative;
				p {
					position: absolute;
					top: 0rem;
					left: 0rem;
					width: 0/100rem;
					height: 4/100rem;
					display: inline-block;
					background: red;
				}
			}
		}
	}
</style>