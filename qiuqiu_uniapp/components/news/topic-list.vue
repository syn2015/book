<template>

	<view class="topic-list u-f animated fadeIn fast" @tap="openDetail">
		<image :src="item.titlepic" mode="widthFix" lazy-load></image>
		<view>
			<view class="topic-name">#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			openDetail() {
				uni.navigateTo({
					url: '../../pages/topic-detail/topic-detail'

				});
			}
		},

	}
</script>

<style lang="scss" scoped>
	.topic-list {
		padding: 10upx 0;
		border-bottom: 1upx solid #EEEEEE;
		color: #a4a4a4;

		image {
			width: 150upx;
			height: 150upx;
			border-radius: 10upx;
			margin-right: 20upx;
		}

		.topic-name {
			font-size: 32upx;
			color: #333333;
		}
	}
</style>
