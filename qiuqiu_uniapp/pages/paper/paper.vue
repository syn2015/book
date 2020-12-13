<template>
	<view class="body">
		<!-- 操作菜单 -->
		<paper-left-popup :show="show" @hidepopup="hidepopup" @addFriend="addFriend" @clear='clear'></paper-left-popup>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<load-more :loadtext="loadtext"></load-more>
		
	</view>
</template>

<script>
	import paperList from '../../components/paper/paper-list.vue'
	import paperLeftPopup from '../../components/paper/paper-left-popup.vue'
	import loadMore from '../../components/common/load-more.vue'
	export default {
		name:'Paper',
		data() {
			return {
				show:false,
				loadtext:'上拉加载更多',
				list:[
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:2
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:12
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:21
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:22
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:21
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:0
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:0
				},
				{
					userpic:"../../static/demo/userpic/12.jpg",
					username:"昵称",
					time:"10:21",
					data:"我是信息",
					noreadnum:11
				}
				]
			};
		},
		components: {
			paperList,
			loadMore,
			paperLeftPopup
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getData();
		},
		// 上拉触底
		onReachBottom() {
			this.loadmore()
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				// console.log("点击了左边按钮");
				uni.navigateTo({
					url:'../user-list/user-list'
				});
				// 关闭操作菜单
				this.hidepopup();
					break;
				case 1:
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
			getData() {
				//获取数据
				setTimeout(()=>{
					let arr=[
								{
									userpic:"../../static/demo/userpic/12.jpg",
									username:"昵称1111",
									time:"10:21",
									data:"我是信息",
									noreadnum:2
								},
								{
									userpic:"../../static/demo/userpic/12.jpg",
									username:"昵称222",
									time:"10:21",
									data:"我是信息",
									noreadnum:0
								},
								{
									userpic:"../../static/demo/userpic/12.jpg",
									username:"昵称333",
									time:"10:21",
									data:"我是信息",
									noreadnum:0
								},
								{
									userpic:"../../static/demo/userpic/12.jpg",
									username:"昵称444",
									time:"10:21",
									data:"我是信息",
									noreadnum:11
								}
							];
					// 赋值
					this.list=arr
					//关闭下拉
					uni.stopPullDownRefresh();
				},2500)
			
			},
			loadmore() {
				if (this.loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					//获取完成
					let obj = {
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称1111",
						time:"10:21",
						data:"我是信息",
						noreadnum:2
					};
					this.list.push(obj);
					this.loadtext = "上拉加载更多";
				}, 1000);
				// this.loadtext="没有更多数据了";
			},
			addFriend(){
				console.log("加糗友");
				this.hidepopup();
			},
			clear(){
				console.log("清缓存");
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
	}
</script>

<style lang="scss" scoped>
.body{
	padding: 0 20upx;
	
	
}

</style>
