<template>
		<view class=" u-f1 u-f-ajc u-f-column"><view class="home-data-num">{{data.num}}</view>{{data.name}}</view>
</template>

<script>
	export default {
		name:'HomeData',
		props: {
			data: {
				type: Object,
				default: null
			},
			
		},
	}
</script>

<style lang="scss" scoped>
	// color: #989898;
	.home-data-num{
		font-size: 32upx;
		color: #333333;
	}
	.u-f1{
		color: #989898;
	}
</style>
