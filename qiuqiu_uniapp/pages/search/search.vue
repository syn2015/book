<template>
	<view>
		<template v-if="list.length>0">
			<block v-for="(item,index) in list" :key="index">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="issearch && list.length<1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list.vue";
	import noThing from "../../components/common/no-thing.vue";
	import loadMore from "../../components/common/load-more.vue";
	export default {
		name: "Search",
		data() {
			return {
				issearch: false,   // 一开始不显示无内容页面
				loadtext: "上拉加载更多",
				searchtext:"",  //搜索关键词
				list: [
					// {
					// 	userpic:"../../static/demo/userpic/12.jpg",
					// 	username:"昵称",
					// 	isguanzhu:false,
					// 	title:"我是标题",
					// 	type:"img", // img:图文,video:视频
					// 	titlepic:"../../static/demo/datapic/11.jpg",
					// 	infonum:{
					// 		index:0,//0:没有操作，1:顶,2:踩；
					// 		dingnum:11,
					// 		cainum:11,
					// 	},
					// 	commentnum:10,
					// 	sharenum:10,
					// },
					// {
					// 	userpic:"../../static/demo/userpic/12.jpg",
					// 	username:"昵称",
					// 	isguanzhu:true,
					// 	title:"我是标题",
					// 	type:"video", // img:图文,video:视频
					// 	titlepic:"../../static/demo/datapic/11.jpg",
					// 	playnum:"20w",
					// 	long:"2:47",
					// 	infonum:{
					// 		index:1,//0:没有操作，1:顶,2:踩；
					// 		dingnum:11,
					// 		cainum:11,
					// 	},
					// 	commentnum:10,
					// 	sharenum:10,
					// }
				]
			};
		},
		components: {
			indexList,
			noThing,
			loadMore
		},
		// 搜索框变化事件
		onNavigationBarSearchInputChanged(e) {
			if(e.text){
				this.searchtext=e.text;
			}
		},
		// 监听原生标题导航按钮点击事件,取消按钮
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e));
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		// 键盘确定事件
		onNavigationBarSearchInputConfirmed(e) {
			console.log(JSON.stringify(e));
			if(e.text){
				this.getData();
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.getData();
			// 关闭下拉刷新
			uni.stopPullDownRefresh();
		},
		// 页面触底事件
		onReachBottom() {
			this.loadMore();
		},
		methods: {
			// 上拉加载
			loadMore() {
				if (this.loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					//获取完成
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isguanzhu: false,
						title: "我是标题",
						type: "img", // img:图文,video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						infonum: {
							index: 0, //0:没有操作，1:顶,2:踩；
							dingnum: 11,
							cainum: 11,
						},
						commentnum: 10,
						sharenum: 10,
					};
					this.list.push(obj);
					this.loadtext = "上拉加载更多";
				}, 1000);
				// this.loadtext="没有更多数据了";
			},
			// 搜索内容
			getData(){
				// 搜索内容：this.searchtext
				// 请求服务器数据
				uni.showLoading()
				setTimeout(()=>{
					let arr=[
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", // img:图文,video:视频
							titlepic:"../../static/demo/datapic/11.jpg",
							infonum:{
								index:0,//0:没有操作，1:顶,2:踩；
								dingnum:11,
								cainum:11,
							},
							commentnum:10,
							sharenum:10,
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称",
							isguanzhu:true,
							title:"我是标题",
							type:"video", // img:图文,video:视频
							titlepic:"../../static/demo/datapic/11.jpg",
							playnum:"20w",
							long:"2:47",
							infonum:{
								index:1,//0:没有操作，1:顶,2:踩；
								dingnum:11,
								cainum:11,
							},
							commentnum:10,
							sharenum:10,
						}
					];
					// this.list=arr=[];
					this.list=arr;
					uni.hideLoading();
					this.issearch=true;
				},2500)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
