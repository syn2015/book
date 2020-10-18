// 类型别名
type lcString=string;


let username:lcString='llcc';
// 错误实例
// username=123;

// 混合类型起别名
type lcStringNumber=string|number
let usernameN:lcStringNumber=123;
let usernameS:lcStringNumber='123';
// 错误实例
// let usernameSN:lcStringNumber='123'|123;

// 约束字符串的取值
type Eventname='click'|'scroll'|'mousemove';
// 可以开启vscode的智能提示
let eventStr:Eventname='click'
