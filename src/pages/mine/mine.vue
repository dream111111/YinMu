<template>
	<div class="mine">
		<!--<Tabs />-->
		<mt-navbar class="page-part" v-model="selected">
			<mt-tab-item id="1">我喜欢</mt-tab-item>
			<mt-tab-item id="2">全部</mt-tab-item>
			<mt-tab-item id="3">下载</mt-tab-item>
			<mt-tab-item id="4">最近播放</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<Woxihuan />
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<Quanbu />
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<Xiazai />
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<Zuijinbofang />
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>

	import Woxihuan from './mine-child/woxihuan'
	import Quanbu from './mine-child/quanbu'
	import Xiazai from './mine-child/xiazai'
	import Zuijinbofang from './mine-child/zuijinbofang'
	export default {
		name: 'layout',
		data() {
			return {
				selected: '1'
			};
		},
		components: {
			Woxihuan,
			Quanbu,
			Xiazai,
			Zuijinbofang
		}

	}
</script>

<style lang='less' scoped>

</style>