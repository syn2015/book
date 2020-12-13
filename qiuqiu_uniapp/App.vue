<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 网络监听
			this.lib.Network.On();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*官方css库 */
	@import './common/uni.css';
	/* 图标库 */
	@import './common/iconfont.css';
	/* 动画库 */
	@import './common/animate.css';
	/* 公用样式 */
	@import './common/common.css';
</style>
