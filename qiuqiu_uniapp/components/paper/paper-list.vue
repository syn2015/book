<template>
	<view class="paper-list u-f-ac animated fadeIn fast" @tap="openUserChat">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view class="u-f-ac u-f-jsb">{{item.username}} <view class="time">10:21</view></view>
			<view class="u-f-ac u-f-jsb">{{item.data}}
			<template v-if="item.noreadnum>0">
				<uni-badge :text="item.noreadnum" type="error"></uni-badge>
			</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	export default {
		name:'PaperList',
		props: {
			item:Object,
			index:Number
		},
		components: {
			uniBadge
		},
		data() {
			return {
				
			}
		},
		methods: {
			openUserChat() {
				uni.navigateTo({
					url:'../../pages/user-chat/user-chat'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.paper-list{
		border-bottom: 1upx solid #EEEEEE;
		padding: 20upx 0;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 20upx;
			// 不挤压
			flex-shrink: 0;
		}
		&>view{
			flex: 1;
			color: #CBCBCB;
			&>view:nth-child(1){
			  color: #010101;
			  font-size: 35upx;
			  .time{
				  color: #CBCBCB;
			  }
			}
			&>view:nth-child(2){
				color: #999999;
			}
		}
	}
</style>
