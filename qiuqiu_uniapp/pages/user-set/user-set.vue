<template>
	<view class="body">
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item"
			:index="index"></home-list-item>
		</block>
		<view class="body-button">
			<button class="user-set-btn" type="primary">退出登陆</button>
		</view>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	export default {
		name:'UserSet',
		data() {
			return {
				list: [{
						icon: "",
						name: "账号与安全"
						,clickType:"navigateTo",url:'../../pages/user-set-repassword/user-set-repassword'
					},
					{
						icon: "",
						name: "绑定邮箱"
						,clickType:"navigateTo",url:"../../pages/user-set-email/user-set-email"
					},
					{
						icon: "",
						name: "资料编辑"
						,clickType:"navigateTo",url:"../../pages/user-set-userinfo/user-set-userinfo"
					},
					{
						icon: "",
						name: "小纸条"
						,clickType:"navigateTo",url:"../../pages/user-set-help/user-set-help"
					},
					{
						icon: "",
						name: "清除缓存"
						,clickType:"clear",url:""
					},
					{
						icon: "",
						name: "意见反馈"
						,clickType:"navigateTo",url:"../../pages/user-set-help/user-set-help"
					},
					{
						icon: "",
						name: "关于糗糗"
						,clickType:"navigateTo",url:"../../pages/user-set-about/user-set-about"
					},
				]
			};
		},
		components: {
			homeListItem
		},
	}
</script>

<style lang="scss" scoped>
@import "../../common/form.scss";
</style>
