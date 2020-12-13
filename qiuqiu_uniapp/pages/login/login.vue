<template>
	<view >
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 引入背景图 -->
		<image class="loginhead" src="../../static/common/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- 输入框+按钮 -->
		<view class="body">
			<template v-if="!status">
					<input type="text"
					class="uni-input common-input phone-input"
					placeholder="昵称/手机号/邮箱" placeholder-class="placeholderclass"  v-model="username"/>
				<view class="login-input-box">
					<input type="text"
					class="uni-input common-input forget-input"
					placeholder="请输入密码" placeholder-class="placeholderclass" v-model="password" />
					<view class="forget u-f-ajc login-font-color yanzhengma">
						<view class="u-f-ajc">忘记密码</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text"
					class="uni-input common-input phone-input"
					placeholder="输入手机号码" placeholder-class="placeholderclass" v-model="phone"/>
				</view>
				<view class="login-input-box">
					<input type="text"
					class="uni-input common-input forget-input"
					placeholder="请输入验证码" placeholder-class="placeholderclass" v-model="checknum"/>
					<view class="forget u-f-ajc login-font-color yanzhengma">
						<view class="u-f-ajc">{{!codetime?'获取验证码':codetime+'s'}}</view>
					</view>
				</view>
			</template>

			<view class="body-button" style="padding: 20upx 0upx;">
					<button class="user-set-btn" 
					:loading="loading" :class="{'user-set-btn-disable':disabled}" 
					type="primary" @tap="submit" :disabled="disabled">登录</button>
			</view>
		</view>
		
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding " @tap="changeStatus">
			{{status?'账号密码登录':'验证码登录'}}<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>

		<!-- 第三方登陆 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color">第三方登录</view>
		<other-login></other-login>

		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding login-font-color">
			注册即代表您同意<view>《糗糗用户协议》</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue'
	import otherLogin from '../../components/home/other-login.vue'
	export default {
		name: 'Login',
		data() {
			return {
				status:false,//false代表账号密码登录，true代表手机验证码登录
				disabled:true,
				loading:false,
				username:"",
				password:"",
				phone:"",
				checknum:"",
				codetime:0, // 倒计时
			};
		},
		components: {
			uniStatusBar,
			otherLogin
		},
		watch: {
			username() {
				this.OnBtnChange();
			},
			password() {
				this.OnBtnChange();
			},
			phone() {
				this.OnBtnChange();
			},
			checknum() {
				this.OnBtnChange();
			}
		},
		methods: {
				// 获取验证码
				getCheckNum(){
					
					if(this.codetime > 0){ return; }
					// 验证手机号
					if(!this.isPhone()){ 
						uni.showToast({
							title:'请输入正确的手机号码',
							icon:'none'
						})
						return ;
					}
					// 请求服务器，发送验证码
					// 发送成功，开启倒计时
					this.codetime=10;
					let timer=setInterval(()=>{
						this.codetime--;
						if(this.codetime < 1){
							clearInterval(timer);
							this.codetime=0;
						}
					},1000);
				},
			//初始化表单
			initInput(){
				this.username='';
				this.password='';
				this.phone='';
				this.checknum='';
			},
			isPhone(){
				// 验证手机号
				let mPattern=/^1[34578]\d{9}$/;
				return mPattern.test(this.phone);
				// if(!mPattern.test(this.phone)){
				// 	uni.showToast({
				// 		title:'请输入正确的手机号码',
				// 		icon:'none'
				// 	})
				// 	return;
				// }
			},
			OnBtnChange(){
				if((this.username&&this.password)||(this.phone&&this.checknum)){
					this.disabled=false;return;
				}
				this.disabled=true;
				
			},
			back() {
				
			},
			submit(){
				// 账号密码登录
				if(!this.status){
					return;
				}
				// 验证码登录
				if(!this.isPhone()){
					uni.showToast({
						title:'请输入正确的手机号码',
						icon:'none'
					})
					return ;
				}
				
				console.log('服务器提交');
			},
			changeStatus(){
				//切换登录方式之前先清空表单
				this.initInput();
				this.status=!this.status
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../common/form.scss';
	.icon-guanbi{
		position: fixed;
		top: 60upx;
		left: 30upx;
		color: #332F0A;
		font-size: 40upx;
		font-weight: bold;
		z-index: 99;
	}
	.loginhead{
		width: 100%;
	}
	.login-padding{
		padding: 20upx 0;
	}
	.login-font-color{
		color: #BBBBBB;
	}
	.other-login-title{
		position: relative;
		&::before{
			content: "";
			position: absolute;
			background: #BBBBBB;
			height: 1upx;
			width: 100upx;
			top: 50%;
			left: 25%;
		}
		&::after{
			content: "";
			position: absolute;
			background: #BBBBBB;
			height: 1upx;
			width: 100upx;
			top: 50%;
			right: 25%;
		}
	}
	.login-input-box{
		position: relative;
		.forget{
			position: absolute;
			top: 0;
			height: 100%;
			z-index: 100;
			width: 150upx;
			right: 0;
		}
		.forget-input{
			padding-right: 150upx;
		}
		.phone{
			position: absolute;
			top: 0;
			height: 100%;
			z-index: 100;
			width:100upx;
			left: 0;
			font-weight: bold;
		}
		.phone-input{
			padding-left: 100upx;
		}
		.yanzhengma>view{
			background: #EEEEEE;
			border-radius: 10upx;
			font-size: 25upx;
			width: 150upx;
			padding: 10upx 0;
		}
	}
	.placeholderclass{
		font-weight: bold;
		font-size: 30upx;
	}
</style>
