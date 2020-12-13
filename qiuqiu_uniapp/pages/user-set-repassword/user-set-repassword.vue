<template>
	<view class="body">
		<input type="text" class="uni-input common-input" placeholder="输入旧密码" v-model="oldpassword"  password/>
		<input type="text" class="uni-input common-input" placeholder="输入新密码" v-model="newpassword" password />
		<input type="text" class="uni-input common-input" placeholder="输入确认密码"  v-model="renewpassword" password/>
		<view class="body-button">
			<button class="user-set-btn " type="primary" :loading="loading" :class="{'user-set-btn-disable':disabled}" @tap="submit">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:'UserSetRepassword',
		data() {
			return {
				oldpassword:"",
				newpassword:"",
				renewpassword:"",
				disabled:true,
				loading:false
			};
		},
		watch: {
			oldpassword(val){
				this.change()
			},
			newpassword(val){
				this.change()
			},
			renewpassword(val){
				this.change()
			}
		},
		methods: {
			change() {
				if(this.oldpassword && this.newpassword && this.renewpassword){
					this.disabled=false;
					return;
				}
				this.disabled=true;
			},
			check(){
				if(!this.oldpassword&&this.oldpassword==""){
					uni.showToast({
						title:'旧密码不能为空',
						icon:'none'
					})
					return false;
				};
				if(!this.newpassword||this.newpassword==""){
					uni.showToast({
						title:'新密码不能为空',
						icon:'none'
					});
					return false;
				}
				if(!this.renewpassword||this.renewpassword==""){
					uni.showToast({
						title:'确认密码不能为空',
						icon:'none'
					})
					return false
				}
				if(this.newpassword!==this.renewpassword){
					uni.showToast({
						title:'确认密码和新密码不一致',
						icon:'none'
					});
					return false;
				}
				return true;
			},
			submit(){
				this.loading=true; this.disabled=true;
				if(!this.check()){ this.loading=false; this.disabled=false; return; }
				// 提交服务器
				uni.showToast({
					title:'提交服务器',
					icon:'none',
					mask:false,
					duration:1500
				});
				this.loading=false;
				this.disabled=false;
			}
		},
	}
</script>

<style lang="scss" scoped>
@import "../../common/form.scss"
</style>
