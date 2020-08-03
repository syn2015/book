const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const CopyWebpackPlugin=require('copy-webpack-plugin')
const path=require('path')
module.exports={
    entry:'./src/index.ts',
    output:{
        filename:'main.js',
    },
    resolve:{
        extensions:[
            '.js','.ts','.tsx'
        ]    
    },
    module:{
        rules:[{
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/node_modules/
        }]
    },
    devtool:process.env.NODE_ENV==='production' ? false: 'inline-source-map',
    devServer:{
        contentBase:'./dist',
        stats:'errors-only',
        compress:false,
        host:'localhost',
        port:8089,
    },
    plugins:[
        new CleanWebpackPlugin({
            //先清理再生成
            cleanOnceBeforeBuildPatterns:['./dist']
        }),
        new HtmlWebpackPlugin({
            //编译模板
            template:'./src/template/index.html'
        }),
        new CopyWebpackPlugin([{
            from:path.join(__dirname,'../src/modules/handle-title.js'),
            to:path.resolve(__dirname,'../dist/')
        }])
    ]
}