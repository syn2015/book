<template>
	<view class="uni-comment-list" :class="{'u-comment-list-child':(item.fid>0)}">
			<view class="uni-comment-face"><image :src="item.userpic" mode="widthFix"></image></view>
			<view class="uni-comment-body">
				<view class="uni-comment-top"><text>{{item.username}}</text>
				</view>
				<view class="uni-comment-content">{{item.data}}</view>
				<view class="uni-comment-date">
					<view>{{item.time}}</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		name:'CommentList',
		props: {
			item:Object,
			index:Number
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
	.u-comment-list-child{
		padding: 20upx;
		background: #F4F4F4;
		border-bottom: 1upx solid #EEEEEE;
		box-sizing: border-box;
		// 去掉外边距
		margin: 0;
		// 修改外边距 
		margin-left: 70upx;
		// 修改宽度，避免超出
		width: auto;
	}
</style>
