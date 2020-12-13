<template>
	<view>
		<view class="user-space-userinfo">
			<view class="user-space-userinfo-item">
				<view>账号信息</view>
				<view>糗龄：{{getRegAge}}</view>
				<view>糗百ID：{{userinfo.id}}</view>
			</view>
			<view class="user-space-userinfo-item">
				<view>个人信息</view>
				<view>星座：{{getXingZuo}}</view>
				<view>职业：{{userinfo.job}}</view>
				<view>故乡：{{userinfo.path}}</view>
				<view>情感状态：{{userinfo.qg}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import time from '../../common/time.js'
	export default {
		name:'UserSpaceUserinfo',
		props: {
			userinfo: {
				type: Object,
				default: null
			},
		},
		
		computed: {
			getRegAge(){
				return time.gettime.sumAge(this.userinfo.regtime)
			},
			getXingZuo(){
				return time.gettime.getHoroscope(this.userinfo.birthday)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-space-userinfo{
		padding: 0 30upx;
		.user-space-userinfo-item{
			padding: 20upx 0;
			border-bottom: 1upx solid #EEEEEE;
			view{
				color: #AAAAAA;
				&:first-child{
					color: #333333;
					font-size: 35upx;
					padding: 15upx 0;
				}
			}
		}
	}
</style>
