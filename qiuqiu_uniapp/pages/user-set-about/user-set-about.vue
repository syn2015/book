<template>
	<view style="padding: 20upx;">
		<view class="user-set-about-t u-f-ajc u-f-column">
			<image src="../../static/common/logo.png" 
			mode="widthFix" lazy-load></image>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item"
			:index="index"></home-list-item>
		</block>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	export default {
		name:'UserSetAbout',
		components: {
			homeListItem
		},
		data() {
			return {
				list:[
					{ icon:"",name:"新版本检测",clicktype:"",url:"" },
					{ icon:"",name:"糗糗用户协议",clicktype:"",url:"" },
				]
			};
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
.user-set-about-t{
	padding: 40upx 0;
	image{
		margin-top: 50upx;
		margin-bottom: 30upx;
		width: 65%;
	}
	view{
		color: #CCCCCC;
	}
}
</style>
