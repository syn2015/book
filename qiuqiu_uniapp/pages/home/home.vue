<template>
	<view>
		<template v-if="islogin">
			<!-- 未登录 -->
			<view class="u-f-ajc">登陆仿糗百，体验更多功能</view>
			<!-- 第三方登陆 -->
			<other-login></other-login>
			<!-- 账号密码登陆 -->
			<view class="u-f-ajc" @tap="openLogin">账号密码登陆 <view class="icon iconfont icon-jinru"></view> </view>
		</template>
		<!-- 登录 -->
		<template v-else>
			<home-info :homeinfo="homeinfo"></home-info>
		</template>
		<!-- 数据 -->
		<view class="home-data u-f-ac">
			<block v-for="(data,index) in homedata" :key="index">
				<home-data :data="data"></home-data>
			</block>
		</view>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc" >
			<image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item,index) in list" :key="index">
				<home-list-item :item="item"></home-list-item>
			</block>
		</view>
		
	</view>
</template>

<script>
	import homeListItem from "../../components/home/home-list-item.vue";
	import homeInfo from "../../components/home/home-info.vue";
	import homeData from "../../components/home/home-data.vue";
	import otherLogin from "../../components/home/other-login.vue";
	export default {
		name:'Home',
		data() {
			return {
				islogin:false,
				homeinfo:{
					userpic:"../../static/demo/userpic/11.jpg",
					username:"昵称",
					totalnum:0,
					todaynum:0,
				},
				homedata:[
					{ name:"糗事", num:0 },
					{ name:"动态", num:0 },
					{ name:"评论", num:0 },
					{ name:"收藏", num:0 },
				],
				list:[
					{ icon:"liulan",name:"浏览历史",clickType:"",url:"" },
					{ icon:"huiyuanvip",name:"糗百认证",clickType:"",url:"" },
					{ icon:"keyboard",name:"审核糗事",clickType:"",url:"" },
				]
			};
		},
		components: {
			homeListItem,
			homeInfo,
			homeData,
			otherLogin
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				console.log('点击menu')
				uni.navigateTo({
					url:'../user-set/user-set'
				})
			}
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url:'../login/login'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

.icon-jinru{
	color: #CCCCCC;	
}

.home-data{
	padding: 20upx 40upx;
}
.home-adv{
	padding: 20upx;
	image{
		border-radius: 20upx;
		height: 150upx;
	}
}
.home-list{
	padding: 20upx;
	
}
</style>
