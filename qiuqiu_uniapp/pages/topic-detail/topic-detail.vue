<template>
	<view>
		<!-- 话题介绍 -->
		<topic-info :topicInfo='topicInfo'></topic-info>
		<!-- tabbar切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollStyle="border-bottom:0;"
		 scrollItemStyle="width:50%;">
		</swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item,index) in tabList" :key="index">
				<template v-if="tabIndex==index">
					<block v-for="(list,listIndex) in  item.list" :key="listIndex">
						<common-list :item="list" :index="listIndex"></common-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		</view>

	</view>
</template>

<script>
	import topicInfo from '../../components/topic/topic-info.vue'
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from "../../components/common/common-list.vue";
	import loadMore from "../../components/common/load-more.vue";
	export default {
		name: 'TopicDetail',
		data() {
			return {
				topicInfo: {
					titlepic: '../../static/demo/topicpic/13.jpeg',
					title: '忆往事，敬余生',
					desc: '我是描述',
					totalnum: 1000,
					todaynum: 1000
				},
				tabIndex: 1,
				tabBars: [{
						name: "默认",
						id: "moren"
					},
					{
						name: "最新",
						id: "zuixin"
					}

				],
				tabList: [{
						loadtext: "上拉加载更多",
						list: [
							// 文字
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							// 图文
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							// 视频
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: {
									looknum: "20w",
									long: "2:47"
								},
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [
							// 文字
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							// 图文
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							// 视频
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: {
									looknum: "20w",
									long: "2:47"
								},
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [
							// 文字
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							// 图文
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							// 视频
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: {
									looknum: "20w",
									long: "2:47"
								},
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
						]
					}
				]
			};
		},
		methods: {
			// tabbar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			//上拉加载
			loadmore() {
				if (this.tabList[this.tabIndex].loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.tabList[this.tabIndex].loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					//获取完成
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "哈哈",
						sex: 0, //0 男 1 女
						age: 25,
						isguanzhu: false,
						title: "我是标题",
						titlepic: "../../static/demo/datapic/13.jpg",
						video: {
							looknum: "20w",
							long: "2:47"
						},
						share: false,
						path: "深圳 龙岗",
						sharenum: 20,
						commentnum: 30,
						goodnum: 20
					};
					this.tabList[this.tabIndex].list.push(obj);
					this.tabList[this.tabIndex].loadtext = "上拉加载更多";
				}, 1000);
				// this.tabList[this.tabIndex].loadtext="没有更多数据了";
			},
			// 下拉刷新
			pullDownRefresh(){
				setTimeout(()=>{
					uni.stopPullDownRefresh()
					// 停止下拉刷新
				},2000)
			},
			// 上拉加载数据
			getData(){
				//获取数据
				setTimeout(()=>{
					let arr=[
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "新数据1",
							sex: 0, //0 男 1 女
							age: 99,
							isguanzhu: false,
							title: "新数据1",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "新数据2",
							sex: 0, //0 男 1 女
							age: 99,
							isguanzhu: false,
							title: "新数据2",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "新数据3",
							sex: 0, //0 男 1 女
							age: 99,
							isguanzhu: false,
							title: "新数据3",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						}
					];
					//赋值
					this.tabList[this.tabIndex].list=arr;
					//关闭下拉刷新
					this.pullDownRefresh();
				},2500)				
				
			}
		},
		//页面上拉触底事件
		onReachBottom() {
			this.loadmore();
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getData()	
		},
		components: {
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
	}
</script>

<style lang="scss" scoped>



</style>
