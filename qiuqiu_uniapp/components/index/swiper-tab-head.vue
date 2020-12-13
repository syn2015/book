<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" 
				:class="{'active':tabIndex==index}"
				@tap="tabtap(index)"
				:style="scrollItemStyle">
					{{tab.name}} {{tab.num?tab.num:''}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"swiperTabHead",
		props:{
			tabBars:Array,
			tabIndex:Number,
			// 自定义修改：去掉下划线
			scrollStyle:{
				type:String,
				default:""
			},
			// 自定义修改：左右两分，不可滑动
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			tabtap(index){
				this.$emit('tabtap',index);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.uni-tab-bar{
		.uni-swiper-tab{
			border-bottom: 1upx solid #EEEEEE;
		}
		.active{
			color: #343434;
			.swiper-tab-line{
				border-bottom: 6upx solid #FEDE33;
				width: 70upx;
				margin: auto;
				border-top: 6upx solid #FEDE33;
				border-radius:20upx;
			}
		}
		.swiper-tab-list{
			color: #969696;
			font-weight: bold;
		}
	}

</style>
