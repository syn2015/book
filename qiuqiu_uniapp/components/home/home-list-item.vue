<template>
	<view class="home-list-item u-f-ac u-f-jsb" hover-class="home-list-hover" @tap="clickEvent">
		<view class="u-f-ac">
			<view class="icon iconfont  icon-first" :class="['icon-'+item.icon]"></view>{{item.name}}
		</view>
		<view class="icon iconfont icon-jinru icon-last"></view>
	</view>
</template>

<script>
	export default {
		name:'HomeListItem',
		props: {
			item: {
				type: Object,
				default: null
			},
		},
		methods: {
			clickEvent() {
				switch (this.item.clickType){
					case "navigateTo":
					if (this.item.url) {
						uni.navigateTo({
							url:this.item.url
						})
					} 
						break;
					case "switchTab":
					if (this.item.url) {
						uni.switchTab({
							url:this.item.url
							// url:'../../pages/user-set-repassword/user-set-repassword'
						})
					};
						break;
					case "clear":
					uni.showModal({
						title:'提示',
						content:'是否要清除缓存?',
						confirmText:'立即清除',
						success: (res) => {
							if(res.confirm){
								uni.clearStorage();
								uni.showToast({
									title:'清除缓存成功！',
									icon:'none'
								})
							}
						}
					})
						break;
					default:
						break;
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.home-list-item{
		padding: 20upx;
		border-bottom: 1upx solid #F4F4F4;
		// &:first-child{
		// 	border-top: 1upx solid #F4F4F4;
		// }
		&:first-of-type{
			border-top: 1upx solid #F4F4F4 ;
		}
		.icon-first{
			margin-right: 10upx;
			color: #44B3FF;
		}
		.icon-last{
			color: #CCCCCC;
		}
		.icon-huiyuanvip{
			color:#FF7434 ;
		}
	}
	.home-list-hover{
		background-color: #f4f4f4;
	}
</style>
