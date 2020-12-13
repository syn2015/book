<template>
	<view>
		<view class=" tag-sex icon iconfont " :class="sex==1?'icon-nv':'icon-nan'">{{age}}</view>
	</view>
</template>

<script>
	export default {
		name:'TagSexAge',
		props:{
			sex:Number,
			age:Number
		},
		data() {
			return {
				
			}
		},
		components: {
			
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
	.tag-sex {
		background: #007AFF;
		color: #FFFFFF;
		font-size: 23upx;
		padding: 5upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		line-height: 22upx;
	}
	.icon-nv{
		background-color: #FF698D;
	}
</style>
