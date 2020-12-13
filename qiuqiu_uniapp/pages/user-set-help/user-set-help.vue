<template>
	<view class="body">
		<uni-collapse>
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :showAnimation=true :contentdata="item.content"></uni-collapse-item>
			</block>
		</uni-collapse>
		<view class="body-button">
			<button class="user-set-btn" type="primary">意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		name:'UserSetHelp',
		data() {
			return {
				list:[
					{
						title:"客服什么时候上线？",
						content:"亲爱的仿糗友，客服的工作时间为：周一至周六10：00-12：00，14：00-19：：00，非工作时间的咨询反馈会自动转为留言，客服上班后会第一时间回复哦~"
					},
					{
						title:"忘记账号/昵称/密码怎么办？",
						content:"如果忘记的账号绑定手机或者邮箱的话，可以联系客服查询"
					},
					{
						title:"怎么搜索/查找/关注/取关用户？",
						content:"搜索，查找，关注，取关用户"
					},
					]
			};
		},
		components: {
			uniCollapse,
			uniCollapseItem
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
@import '../../common/form.scss';
</style>
