<template>
	<view>
		<!-- 操作菜单 -->
		<view class="papar-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="paper-left-popup"  v-show="show">
			<view class="up u-f-ac" hover-class="paper-left-popup-hover" @tap="pipeOff">
				<view class="up-left icon iconfont icon-sousuo"></view>
				<view class="up-right">拉黑</view>
			</view>
			<view class="up u-f-ac" hover-class="paper-left-popup-hover"  @tap="remarks">
				<view class="up-left icon iconfont icon-qingchu"></view>
				<view class="up-right">备注</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'UserSpacePopup',
		props:{
			show:Boolean
		},
		components: {
		},
		methods: {
			hidepopup(){
				this.$emit('hidepopup');
			},
			pipeOff(){
				this.$emit('pipeOff');
			},
			remarks(){
				this.$emit('remarks');
			}
		},
	}
</script>

<style lang="scss" scoped>
	.paper-left-popup{
		position: fixed;
		right: 0;
		// top: 10upx;
		top:80upx;
		background: #FFFFFF;
		z-index: 9999;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
		.paper-left-popup-hover{
			background-color: #EEEEEE;
		}
		.up{
			padding: 15upx 13upx;
			font-size: 35upx;
			.up-left{
				margin-right: 10upx;
				font-weight: bold;
			}
			.up-right{
				
			}
		}
		
	}
	.papar-left-popup-mask{
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		// background-color: #BEBEBE;
		// box-shadow: 0 0 0 50vmax rgba(0,0,0,0.8);
		// 比操作菜单低一级别
		z-index: 999;
	}
</style>
