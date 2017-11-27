<template>
	<div class="banner">
		<swiper :options="swiperOption">
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/1.png">
			</swiper-slide>
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/2.png">
			</swiper-slide>
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/3.png">
			</swiper-slide>
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/4.png">
			</swiper-slide>
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/5.png">
			</swiper-slide>
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/6.png">
			</swiper-slide>
			<swiper-slide>
				<img src="http://yingmus.oss-cn-beijing.aliyuncs.com/yinmu/banner/7.png">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: "banner",
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev',
					nextButton: '.swiper-button-next',
					mousewheelControl: true,
					observeParents: true,
					loop: true
				}

			}
		}
	}
</script>

<style lang="less" scoped>
.banner{
	margin-top: 3px;
	width: 100%;
	height: 3rem;
	.swiper-slide{
		width: 100%;
		height: 300/100rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>