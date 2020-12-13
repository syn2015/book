<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeImg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view style="width: 60px;">昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ac">
					<view>{{birthday}}</view>
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</picker>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ac" @tap="changeOne('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changeOne('job')">
				<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ac" @tap="showMulLinkageThreePicker">
				<view>{{pickerText}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="body-button">
			<button class="user-set-btn" type="primary">完成</button>
		</view>
		<mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	let sex=['男','女','不限'];
	let qg=['秘密','未婚','已婚'];
	let job=['秘密','IT','老师'];
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		name:'UserSetUserinfo',
		data() {
			return {
				userpic:"../../static/demo/userpic/11.jpg",
				username:"haha",
				sex:'不限',
				qg:"未婚",
				job:"IT",
				birthday:"1987-02-07",
				cityPickerValueDefault:[0,0,1],
				pickerText: '北京市-市辖区-朝阳区'
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate(){
				return this.getDate('end')
			}
		},
		components: {
			mpvueCityPicker
		},
		onBackPress() {
		  if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
			return true;
		  }
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		},
		methods: {
			// picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
			onConfirm(e) {
				this.pickerText = e.label;
			},
			// 三级联动
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			bindDateChange(e){
				this.birthday=e.target.value
			},
			getDate(type){
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;	
			},
			changeImg() {
				uni.chooseImage({
					count:1,
					sizeType:['compressed'],
					success: (res) => {
						this.userpic=res.tempFilePaths[0];
					}
				})
			},
			changeOne(val){
				let arr=[];
				switch (val){
					case 'sex':
						arr=sex;
						break;
					case 'qg':
						arr=qg;
						break;
					case 'job':
						arr=job;
						break;
					default:
						break;
				}
				uni.showActionSheet({
					itemList:arr,
					success: (res) => {
						switch (val){
							case 'sex':
							this.sex=arr[res.tapIndex];
								break;
							case 'qg':
							this.qg=arr[res.tapIndex];
								break;
							case 'job':
							this.job=arr[res.tapIndex];
								break;
							default:
								break;
						}
					}
				})
			},
			
		},
	}
</script>

<style lang="scss" scoped>
@import "../../common/form.scss";
.user-set-userinfo-list{
	padding: 20upx 40upx;
	border-bottom: 1upx solid #F4F4F4;
	input{
		text-align: right;
	}
	&:first-child{
		border-top: 1upx solid #F4F4F4;
	}
	&>view:first-child{
		font-size: 32upx;
		font-weight: bold;
		color: #9B9B9B;
	}
	&>view:last-child>view:last-of-type{
		margin-left: 20upx;
		color: #9B9B9B;
	}
	image{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}

}
</style>
