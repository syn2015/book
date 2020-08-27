// 创建stage对象
var stage=new createjs.Stage("gameView");
// 创建容器
var gameView=new createjs.Container();
stage.gameView

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick',stage);

//
// var stage=new createjs.Stage("gameView");
// var gameView=new createjs.Container();
// // 添加容器gameView
// stage.addChild(gameView);

// var s=new createjs.Shape();
// s.graphics.beginFill('#ff0000');
// s.graphics.drawCircle(50,50,25);
// // 结束绘制
// s.graphics.endFill();
// // 添加到容器中
// gameView.addChild(s);

// createjs.Ticker.setFPS(30);
// 监听事件
// createjs.Ticker.addEventListener('tick',stage);