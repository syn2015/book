<template>
	<view class="user-chat-bottom u-f-ac animated fadeInDown fast">
		<input type="text" v-model="text" placeholder="文明发言" />
		<view class="icon iconfont icon-fabu" @tap="submit" ></view>
	</view>
</template>

<script>
	export default {
		name:'UserChatBottom',
		data() {
			return {
				text: ""
			}
		},
		methods: {
			submit(){
				this.$emit('submit',this.text)
				this.text='';
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.user-chat-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120upx;
		padding: 0 20upx;
		background: #FFFFFF;
		border-top: 1upx solid #EEEEEE;
		input{
			flex: 1;
			margin-right: 20upx;
			padding: 10upx 20upx;
			border-radius: 10upx;
			background: #F7F7F7;
		}
		view{
			width: 80upx;
			font-size: 45upx;
		}
	}
</style>
