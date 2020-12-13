<template>
	<view class="animated fadeIn faster" v-if="show">
		<view class="more-share-mask" @tap="togle"></view>
		<view class="more-share">
			<view class="more-share-title u-f-ajc">
				分享到
			</view>
			<scroll-view scroll-x class="more-share-body">
				<block v-for="(val,index) in providerList" :key="index">
					<view class="more-share-item" hover-class="more-share-hover" @tap="share(val)">
						<view class="icon iconfont u-f-ajc"
						:class="['icon-'+val.zicon,'more-share-'+val.zclass]"></view>
						<view>{{val.name}}</view>
					</view>
				</block>
<!-- 				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc more-share-wx"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc more-share-pyq"></view>
					<view>朋友圈</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-xinlangweibo u-f-ajc  more-share-wb"></view>
					<view>新浪微博</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc more-share-qq"></view>
					<view>QQ好友</view>
				</view> -->
			</scroll-view>
			<view class="more-share-bottom u-f-ajc" hover-class="more-share-hover" @tap="togle">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'MoreShare',
		props: {
			show:Boolean
		},
		data() {
			return {
				shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				href:"https://uniapp.dcloud.io",
				image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png',
				shareType:1,// 1是文字，2是图片，0是图文，5是小程序
				providerList: []
			}
		},
		mounted() {
			uni.getProvider({
				service: 'share',
				success: (e) => {
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '微信好友',
									id: 'weixin',
									zicon:"weixin",
									zclass:"wx",
									sort:0
								})
								data.push({
									name: '朋友圈',
									id: 'weixin',
									type:'WXSenceTimeline',
									zicon:"weixin",
									zclass:"pyq",
									sort:1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '新浪微博',
									id: 'sinaweibo',
									zicon:"xinlangweibo",
									zclass:"wb",
									sort:2
								})
								break;
							case 'qq':
								data.push({
									name: 'QQ好友',
									id: 'qq',
									zicon:"QQ",
									zclass:"qq",
									sort:3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
		},
		methods: {
			//取消
			togle(){
				this.$emit('togle')
			},
			async share(e) {
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'https://uniapp.dcloud.io',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.more-share-mask{
		background:rgba(51, 51, 51, 0.49);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
	}
	.more-share{
		position: fixed;
		z-index: 110;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		.more-share-title{
			font-size: 32upx;
			padding: 25upx;
		}
		.more-share-body{
			white-space: nowrap;
			width: 100%;
			height: 200upx;
			border-bottom: 1upx solid #EEEEEE;
			display: flex!important;
			line-height: 200upx!important;
			.more-share-item{
				width: 25%;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				height: 100%;
				.icon{
					width: 100upx;
					height: 100upx;
					border-radius: 100%;
					font-size: 55upx;
					color: #FFFFFF;
				}
				.more-share-wx{
					background: #2AD19B;
				}
				.more-share-pyq{
					background: #514D4C;
				}
				.more-share-wb{
					background: #EE5E5E;
				}
				.more-share-qq{
					background: #4A73BA;
				}
				view:last-child{
					color: #7A7A7A;
				}
			}
			.more-share-hover{
				background: #EEEEEE;
			}
			
		}
		.more-share-bottom{
			font-size: 32upx;
			padding: 25upx;
		}
	}
</style>
