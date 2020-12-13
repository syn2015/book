<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="back" @click-left="back" @click-right="submit">
			<view class="u-f-ajc" @tap="changelook">
				{{yinsi}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图 -->
		<upload-images @uploud="uploud"></upload-images>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="gonggao">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	let changelook= ['所有人可见', '仅自己可见'];
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	// 解决bug:Do not use built-in or reserved HTML elements as component id: uni-icon
	import uniIcons from "../../components/uni-icon/uni-icons.vue";
	import uploadImages from "../../components/common/upload-images.vue";
	import uniPopup from "../../components/uni-popup/uni-popup.vue";
	export default {
		name:'AddInput',
		components:{
			uniNavBar,
			uploadImages,
			uniPopup,
			uniIcons
			
		},
		data() {
			return {
				showpopup:true,
				yinsi:"所有人可见",
				text:"",
				imglist:[],
				isget:false,// 是否保存草稿
			};
		},
		// 监听页面返回事件
		onBackPress(){
			//如果有输入内容
			if(!this.text&&this.imglist.length>1){return;}
			if(!this.isget){
				this.baocun();
				return true;
			}
		},
		methods:{
			// 返回
			back(){
				uni.navigateBack({ delta: 1 });
			},
			// 发布
			submit(){
				console.log("发布")
			},
			// 隐私
			changelook(){
				uni.showActionSheet({
					itemList:changelook,
					success: (res)=> {
						this.yinsi=changelook[res.tapIndex]
					}
				});
			},
			uploud(arr){
				this.imglist=arr;
				console.log(this.imglist)
			},
			hidePopup(){
				this.showpopup=false;
			},
			// 保存草稿
			baocun(){
				uni.showModal({
					content:'是否保存为草稿',
					cancelText:'不保存',
					confirmText:'保存',
					success:res=>{
						if(res.confirm){
							console.log('保存')
						}else{
							console.log('不保存')
						}
						this.isget=true;
						uni.navigateBack({
							delta:1
						})
					}	
				})
			}
			
		}
	}
</script>

<style  lang="scss" scoped>
.uni-textarea{
	border: 1upx solid #EEEEEE;
}
.gonggao{
		width: 500rpx;
		background: #ffffff;
		.u-f-ajc{
			image{
				width: 75%;
				margin-bottom: 20rpx;
			}
		}
		button{
			margin-top: 20rpx;
			background: #FFE934;
			color: #171606;
		}
	}

</style>
