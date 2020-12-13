<template>
	<view class="home-info u-f-ac" @tap="ToUserSpace">
		<image :src="homeinfo.userpic" mode="widthFix" lazy-load></image>
		<view class="u-f1">
			<view class="home-info-name">{{homeinfo.username}}</view>
			<view class="home-info-number">总访客 {{homeinfo.totalnum}}  今日 {{homeinfo.todaynum}}</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		name:'HomeInfo',
		props: {
			homeinfo:{
				type:Object,
				default:null
			}
		},
		methods: {
			ToUserSpace() {
				uni.navigateTo({
					url:'../../pages/user-space/user-space'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.home-info{
		padding: 20upx 40upx;
		image{
			flex-shrink: 0;
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 15upx;
		}
		.u-f1{
			
			.home-info-name{
				font-size: 32upx;
			}
			.home-info-number{
				color: #BBBBBB;
			}
		}
		.icon-jinru{
			color: #010101;
			height: 100%;
		}
		
	}
</style>
