import config from './config.js'
// 网络监听
const Network={
	// 网络状态
	isConnect:false,
	// 监听网络状态
	
	On(){
		// 获取当前网络状态
		uni.getNetworkType({
			success: (res) => {
				console.log('获取网络')
				console.log(JSON.stringify(res))
				if(res.networkType!=='none'){this.isConnect=true;return;}
				uni.showToast({
					icon:'none',
					title:'请先连接网络'
				})
			}
		})
		// 监听网络状态变化
		uni.onNetworkStatusChange(res=>{
			console.log('监听网络')
			console.log(JSON.stringify(res))
			this.isConnect=res.isConnected;
			if(!res.isConnected){
				uni.showToast({
					icon:'none',
					title:'您目前处于断网状态'
				})
			}
		})
	}
	
}




// appg更新
const Update=function(){
		// #ifdef APP-PLUS  
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
			uni.request({  
				url: 'https://api.qiuqiu.syndev.top/api/v1/update',  
				data: {  
					version: widgetInfo.version,  
					name: widgetInfo.name  
				},  
				success: (result) => {  
					var data = result.data;  
					if (data.update && data.wgtUrl) {  
						uni.downloadFile({  
							url: data.wgtUrl,  
							success: (downloadResult) => {  
								if (downloadResult.statusCode === 200) {  
									plus.runtime.install(downloadResult.tempFilePath, {  
										force: false  
									}, function() {  
										console.log('install success...');  
										plus.runtime.restart();  
									}, function(e) {  
										console.error('install fail...');  
									});  
								}  
							}  
						});  
					}  
				}  
			});  
		});  
		// #endif 
}
 export default {
 	Network,
	Update
 }