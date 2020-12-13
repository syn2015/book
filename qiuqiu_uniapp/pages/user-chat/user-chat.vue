<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y 
		 id="scrollview" 
		:scroll-top="scrollTop"
		:scroll-with-animation="true"
		:style="{height:style.contentH+'px'}"
		>
			<block v-for="(item,index) in list" :key="index">
				<user-chat-list :item='item' :index="index"></user-chat-list>
			</block>
		</scroll-view>
		
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
	import userChatList from '../../components/user-chat/user-chat-list.vue';
	import time from "../../common/time.js";
	export default {
		name: 'UserChat',
		data() {
			return {
				scrollTop:0,
				style:{
					contentH:0,
					itemH:0
				},
				list: [{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1555146412"
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/10.jpg",
						type: "img",
						data: "../../static/demo/3.jpg",
						time: "1555146414",
					},
				]
			};
		},
		components: {
			userChatBottom,
			userChatList
		},
		onLoad() {
			this.getData();
			this._initData();
		},
		// 页面渲染完成
		onReady() {
			this.pageToBottom();
		},
		// mounted() {
		// 	this.pageToBottom();
		// },
		methods: {
			submit(text) {
				console.log('输入数据:', text)
				let now=new Date().getTime()
				let obj={
					isme:true,
					userpic:"../../static/demo/userpic/10.jpg",
					type:"text",
					data:text,
					time:now,
					gstime:time.gettime.getChatTime(now,this.list[this.list.length-1].time)
				};
				this.list.push(obj);
				this.pageToBottom();
				

			},
			getData() {
				// 从服务器获取到的数据
				let arr = [{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1555146412"
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/10.jpg",
						type: "img",
						data: "../../static/demo/3.jpg",
						time: "1555146914",
					},
				];
				for (let i = 0; i < arr.length; i++) {
					arr[i].gstime = time.gettime.getChatTime(arr[i].time, i > 0 ? arr[i - 1].time : 0);
				}
				this.list = arr;
			},
				// 滚动条放置于底部
			pageToBottom(){
				// 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。
				let q=uni.createSelectorQuery();
				// 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery。
				q.select('#scrollview').boundingClientRect();
				q.selectAll('.user-chat-item').boundingClientRect();
				//执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
				q.exec((res)=>{
					// 列表的总高度
					res[1].forEach((ret)=>{
						this.style.itemH += ret.height;
					});
					console.log(this.style.itemH,this.scrollTop)
					// 列表高度大于界面高度
					if(this.style.itemH >this.style.contentH){
						// 滚动条置于底部
						this.scrollTop=this.style.itemH;
					}
					console.log('g改变之后',this.style.itemH,this.scrollTop)
				})
			},
			_initData(){
				try{
					const res=uni.getSystemInfoSync();
					// console.log(res.windowHeight);
					this.style.contentH=res.windowHeight-uni.upx2px(120);
				}catch(e){
					console.log(e)
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
.scrollview{
	
}
</style>
