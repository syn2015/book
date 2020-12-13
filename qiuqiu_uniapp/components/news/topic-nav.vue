<template>
	<view class="topic-nav">
		<view class="u-f-ac u-f-jsb ">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="openTopicNav">更多<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
		<view class="u-f-ac ">
			<block v-for="(item,index) in nav" :key="index">
				<view class="u-f-ajc ">{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name:'TopicNav',
		props: {
			nav:Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			openTopicNav(){
				uni.navigateTo({
					url:'../../pages/topicnav/topicnav'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.topic-nav {
		border-bottom: 1upx solid #EEEEEE;
		border-top: 1upx solid #EEEEEE;
		padding: 20upx;
	
		&>view {
			&:first-child {
				margin-bottom: 10upx;
	
				&>view {
					color: #9E9E9E;
	
					&:first-child {
						color: #333333;
						font-size: 32upx;
					}
	
					// &:last-child{
					// 	view{
	
					// 	}
					// }
				}
			}
	
			&:last-child {
				view {
					flex: 1;
					background: #EEEEEE;
					color: #9E9E9E;
					border-radius: 10upx;
					margin: 0 10upx;
				}
			}
		}
	}
</style>
