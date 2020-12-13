<template>
	<view class="body">
		<input type="text" class="uni-input common-input" placeholder="输入需要绑定的邮箱" v-model="email"  />
		<input type="text" class="uni-input common-input" placeholder="请输入密码" v-model="password"  password/>
		<view class="body-button">
			<button class="user-set-btn " type="primary" :loading="loading" :class="{'user-set-btn-disable':disabled}" @tap="submit">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:'UserSetEmail',
		data() {
			return {
				email:'',
				password:'',
				disabled:true,
				loading:false
			};
		},
		watch: {
			email(val) {
				
			},
			password(val){
				
			}
		},
		methods: {
			submit() {
				this.loading=true,this.disabled=true;
				if(!this.check()){
					this.loading=false;
					this.disabled=false;
					return
				}
				// 提交服务器
				uni.showToast({
					title: '提交服务器',
					icon:'none',
					mask: false,
					duration: 1500
				});
				this.loading=false;
				this.disabled=false;
			},
			check(){
				if(!this.email&&this.email==""){
					uni.showToast({
						title:'邮箱不能为空',
						icon:'none'
					})
					return false;
				};
				// 邮箱正则
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(!ePattern.test(this.email)){
					uni.showToast({
						title: '请输入正确邮箱格式',
						icon:"none"
					});
					return false;
				}
				if(!this.password&&this.password==""){
					uni.showToast({
						title:'密码不能为空',
						icon:'none'
					})
					return false;
				};
				return true
			},
			change() {
				if(this.email && this.password ){
					this.disabled=false;
					return;
				}
				this.disabled=true;
			},
		},
	}
</script>

<style lang="scss">
@import "../../common/form.scss"
</style>
