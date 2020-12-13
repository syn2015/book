<template>
	<view class="common-list u-f animated fadeIn fast">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load=""></image>
		</view>
	
		<view class="common-list-r">
			<view>
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">{{item.username}}
						<tag-sex-age  :sex="item.sex" :age="item.age"></tag-sex-age>
					</view>
					<view v-show="!isguanzhu" class=" guanzhu icon iconfont icon-zengjia" @tap="guanzhu">关注</view>
				</view>
				<view class="common-list-r-time">26天前</view>
			</view>
			<view>{{item.title}}</view>
			<view class="u-f-ajc imgbox" >
				<!-- 图片 -->
				<block v-for="(pic,index) in item.morepic" :key="index">
					<image v-if="item.titlepic" :src="pic" mode="widthFix" lazy-load @tap="imgDetail(index)" class="morepic">
					</image>
				</block>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playinfo">{{item.video.looknum}} 次播放 {{item.video.long}} </view>
				</template>
				<!-- 分享 -->
				<view v-if="item.share" class="common-list-share u-f-ac">
					<image :src="item.share.titlepic" mode="widthFix" lazy-load=""></image>
					<view>{{item.share.title}}</view>
				</view>
			</view>
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	
	
	</view>
</template>

<script>
	import tagSexAge from '../common/tag-sex-age.vue'
	export default {
		name:'DetailInfo',
		props: {
			item: Object
		},
		components: {
			tagSexAge
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu
			}
		},
		methods: {
			guanzhu() {
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功',
					icon:'none'
				})
			},
			imgDetail(index){
				uni.previewImage({
					current:index, //当前选择的图片索引
					urls:this.item.morepic ,// 图片数组
					indicator:'default'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	@import '../../common/list.scss';
	.common-list{
		// 全局的下划线
		border-bottom: 1upx solid #EEEEEE;
		.common-list-r{
			// 去掉原来的下划线
			border-bottom: 0;
			.imgbox{
				flex-direction: column;
				.morepic{
					margin-bottom: 20upx;
				}
			}
			
			.common-list-r-time{
				// 发送时间
				padding: 15upx 0;
				color: #CCCCCC!important;
				font-size: 25upx;
				background: #FFFFFF!important;
			}
		}
	}
	
</style>
