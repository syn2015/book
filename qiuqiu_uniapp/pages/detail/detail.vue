<template>
	<view>
		<detail-info :item="detail"></detail-info>
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u-comment">
			<block v-for="(item,index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<!-- 输入框占位显示 -->
		<view style="height: 120upx;"></view>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
		<!-- 分享 -->
		<more-share :show="shareShow" @togle='togle'></more-share>
		
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue'
	import commentList from '../../components/detail/comment-list.vue'
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
	import moreShare from '../../components/common/more-share.vue'
	import time from '../../common/time.js'
	export default {
		name: 'Detail',
		data() {
			return {
				shareShow:false,
				comment: {
					count: 20,
					list: [
						// 一级评论
						{
							id: 0,
							fid: 0,
							userpic: '../../static/demo/datapic/13.jpg',
							username: '111',
							data: '评论内容',
							time: '2020'
						},
						// 二级评论
						{
							id: 1,
							fid: 0,
							userpic: '../../static/demo/datapic/13.jpg',
							username: '111',
							data: '评论内容',
							time: '2020'
						},
						{
							id: 2,
							fid: 0,
							userpic: '../../static/demo/datapic/13.jpg',
							username: '111',
							data: '评论内容',
							time: '2020'
						}
					]
				},
				detail: {
					userpic: "../../static/demo/userpic/12.jpg",
					username: "哈哈",
					sex: 0, //0 男 1 女
					age: 25,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "../../static/demo/datapic/13.jpg",
					morepic: [
						"../../static/demo/datapic/13.jpg",
						"../../static/demo/datapic/14.jpg",
						"../../static/demo/datapic/15.jpg",
					],
					video: false,
					share: false,
					path: "深圳 龙岗",
					sharenum: 20,
					commentnum: 30,
					goodnum: 20
				}
			}
		},
		components: {
			detailInfo,
			commentList,
			userChatBottom,
			moreShare
		},
		onLoad(e) {
			this.initData(JSON.parse(e.detailData))
			// 获取评论
			this.getComment()
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				console.log('分享')
				this.togle();

			}
		},
		methods: {
			//取消
			togle(){
				this.shareShow=!this.shareShow
			},
			// 滚动条放置于底部
			pageToBottom() {
				// 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。
				let q = uni.createSelectorQuery();
				// 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery。
				q.select('#scrollview').boundingClientRect();
				q.selectAll('.user-chat-item').boundingClientRect();
				//执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
				q.exec((res) => {
					// 列表的总高度
					res[1].forEach((ret) => {
						this.style.itemH += ret.height;
					});
					// 列表高度大于界面高度
					if (this.style.itemH > this.style.contentH) {
						// 滚动条置于底部
						this.scrollTop = this.style.itemH;
					}

				})
			},
			submit(text) {
				console.log('输入数据:', text)
				let now = new Date().getTime()
				let obj = {
					// 一级评论
					id: 1,
					fid: 0,
					userpic: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					username: "小猫咪",
					time: time.gettime.gettime(new Date().getTime()),
					data: text,
				};
				this.comment.list.push(obj);
				// 滚动条置于顶部
				// this.pageToBottom();


			},
			initData(obj) {
				// console.log(obj.title)
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
			getComment() {
				let arr = [
					// 一级评论
					{
						id: 1,
						fid: 0,
						userpic: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产，支持DCloud!",
					},
					// 子级评论
					{
						id: 2,
						fid: 1,
						userpic: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产，支持DCloud!",
					},
					{
						id: 3,
						fid: 1,
						userpic: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产，支持DCloud!",
					},
					{
						id: 4,
						fid: 0,
						userpic: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产，支持DCloud!",
					},
				];
				for (let i = 0; i < arr.length; i++) {
					arr[i].time = time.gettime.gettime(arr[i].time);
				}
				this.comment.list = arr;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-comment {
		padding: 0 20upx;
	}

	.u-comment-title {
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
	
	
	
</style>
