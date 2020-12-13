<template>
	<view class="user-list u-f-ac animated fadeIn fast">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view class="user-list-info">
			<view class="user-list-name">{{item.username}}</view>
			<view style="display: inline-block;">
				<tag-sex-age class="sex" :age="item.age" :sex="item.sex"></tag-sex-age>
			</view>
		</view>
		<view class="icon iconfont u-f-ajc" :class="[item.isguanzhu?'icon-xuanze-yixuan':'icon-zengjia1']">
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../../components/common/tag-sex-age.vue';
	export default {
		name:'UserList',
		props: {
			item:Object,
			index:Number
		},
		components: {
			tagSexAge
		},
		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>
	.user-list{
		margin: 0 20upx;
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin-right: 20upx;
			flex-shrink: 0;
		}
		.user-list-info{
			flex: 1;
			.user-list-name{
				font-size: 35upx;
			}
			// .sex{
				
			// }
		}
		.icon-xuanze-yixuan {
			// width: 100upx;
			width: 80upx;
			color: #CCCCCC;
		}
		.icon-zengjia1 {
			// width: 100upx;
			width: 80upx;
			color: #F8791B;
		}
	}
</style>
