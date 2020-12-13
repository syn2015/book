<template>
	<view >
		<!-- 背景图 + 用户基本信息 -->
		<userSpace :userinfo="userinfo"></userSpace>
		<!-- 统计 -->
		<view class="user-space-data u-f-ajc">
			<block v-for="(item,index) in spacedata" :key="index">
				<home-data :data="item"></home-data>
			</block>
		</view>
		<view style="height: 20upx; background: #F4F4F4;"></view>
		<!-- tab导航 -->
		<swiper-tab-head 
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		@tabtap="tabtap"
		scrollItemStyle="width:33.33%;"
		scrollStyle="border-bottom:0;">
		</swiper-tab-head>
		<!-- 主页 -->
		<!-- 糗事和动态 -->
		<block v-for="(item,index) in tabList" :key="index">
			<template v-if="tabIndex==0">
				<user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
			</template>
			<template v-else-if="tabIndex==index">
				<block v-for="(list,listIndex) in  item.list" :key="listIndex">
					<common-list :item="list" :index="listIndex"></common-list>
				</block>
				<!-- 上拉加载 -->
				<load-more :loadtext="item.loadtext"></load-more>
			</template>
			<template v-else-if="tabIndex==index">
				<block v-for="(list,listIndex) in  item.list" :key="listIndex">
					<common-list :item="list" :index="listIndex"></common-list>
				</block>
				<!-- 上拉加载 -->
				<load-more :loadtext="item.loadtext"></load-more>
			</template>
		</block>
		<!-- 操作菜单 -->
		<user-space-popup :show="show" @pipeOff="pipeOff" @remarks="remarks" @hidepopup="hidepopup"></user-space-popup>
	</view>
</template>

<script>
	import userSpace from "../../components/user-space/user-space.vue";
	import homeData from '../../components/home/home-data.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import userSpaceUserinfo from "../../components/user-space/user-space-userinfo.vue";
	import commonList from "../../components/common/common-list.vue";
	import loadMore from '../../components/common/load-more.vue';
	import userSpacePopup from '../../components/user-space/user-space-popup.vue';
	export default {
		name: 'UserSpace',
		data() {
			return {
				userinfo: {
					bgimg: 1,
					userpic: "../../static/demo/userpic/11.jpg",
					username: "昵称",
					sex: 1,
					age: 20,
					isguanzhu: true,
					regtime:"2019-04-11",
					id:1213,
					birthday:"1987-02-07",
					job:"IT",
					path:"广东广州",
					qg:"已婚"
					
				},
				spacedata:[
					{ name:"获赞", num:"10k" },
					{ name:"关注", num:11 },
					{ name:"粉丝", num:12 },
				],
				tabIndex:0,
				tabBars:[
					{ name:"主页",id:"zhuye" },
					{ name:"糗事",id:"qiushi" },
					{ name:"动态",id:"dongtai" },
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
				],
				show:false
			};
		},
		//页面上拉触底事件
		onReachBottom() {
			this.loadmore();
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				// case 0:
				// // console.log("点击了左边按钮");
				// uni.navigateTo({
				// 	url:'../user-list/user-list'
				// });
				// // 关闭操作菜单
				// this.hidepopup();
				// 	break;
				case 0:
				// 打开操作菜单
				if(this.show){
					this.hidepopup()
				}else{
					this.showpopup();
				}
					break;
			}
		},
		methods: {
			tabtap(index){
				this.tabIndex=index;
			},
			// 上拉加载更多
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
			
			pipeOff(){
				console.log("拉黑");
				this.hidepopup();
			},
			remarks(){
				console.log("备注");
				this.hidepopup();
			},
			hidepopup(){
				// 关闭操作菜单
				this.show=false;
			},
			showpopup(){
				// 打开操作菜单
				this.show=true;
			}
		},
		components: {
			userSpace,
			homeData,
			swiperTabHead,
			userSpaceUserinfo,
			commonList,
			loadMore,
			userSpacePopup

		},
		computed: {
			getRegAge(){
				return time.gettime.sumAge(this.userinfo.regtime)
			},
			getXingZuo(){
				return time.gettime.getHoroscope(this.userinfo.birthday)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-space-margin {
		margin: 15upx 0;
	}
	.user-space-data{
		background: #FFFFFF;
		position: relative;
		z-index: 10;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		margin-top: -15upx;
		padding: 20upx 0;
	}
	
</style>
